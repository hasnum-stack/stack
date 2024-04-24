import traverse, { NodePath } from "@babel/traverse";
import t from "@babel/types";
import type {
  File,
  ImportDeclaration,
  ModuleSpecifier,
  Node,
  CallExpression,
} from "@babel/types";
import generate from "@babel/generator";
const v5antd = "antd";

// 添加 import { Form } from 'antd'
function appendFormImport(path: NodePath<ImportDeclaration>) {
  // 查找 import ant语句
  if (path.node.source.value === v5antd) {
    path.node.specifiers.push(
      t.importSpecifier(t.identifier("Form"), t.identifier("Form")),
    );
  }
}
// remove Form.create()
function removeFormCreate(path: NodePath<CallExpression>) {
  if (t.isMemberExpression(path.node.callee)) {
    if (
      t.isIdentifier(path.node.callee.object) &&
      path.node.callee.object.name === "Form" &&
      t.isIdentifier(path.node.callee.property) &&
      path.node.callee.property.name === "create"
    ) {
      if (t.isCallExpression(path.parentPath.node)) {
        path.parentPath.replaceWith(path.parentPath.node.arguments[0]);
      }
    }
  }
}
// remove getFieldDecorator()
// Form.getFieldDecorator('name', { valuePropName: 'checked' })(<Checkbox />)
function removeGetFieldDecorators(path: NodePath<CallExpression>) {
  if (
    t.isIdentifier(path.node.callee) &&
    path.node.callee.name === "getFieldDecorator"
  ) {
    const parentJSXElement = path.findParent((parent) => {
      return t.isJSXElement(parent.node);
    });
    if (parentJSXElement === null) return;
    const getFieldDecoratorArgs = path.node.arguments;
    const attributes: t.JSXAttribute[] = [];
    getFieldDecoratorArgs.forEach((item, index) => {
      if (index === 0 && t.isStringLiteral(item)) {
        const name = item.value;
        attributes.push(
          t.jSXAttribute(t.jSXIdentifier("name"), t.stringLiteral(name)),
        );
        return;
      }
      if (index === 1) {
        if (t.isObjectExpression(item)) {
          const properties = item.properties;
          properties.forEach((prop) => {
            if (t.isObjectProperty(prop) && t.isIdentifier(prop.key)) {
              if (!t.isRestElement(prop.value) && !t.isPattern(prop.value)) {
                attributes.push(
                  t.jSXAttribute(
                    t.jSXIdentifier(prop.key.name),
                    t.jSXExpressionContainer(prop.value),
                  ),
                );
              }
            }
          });
        }
      }
    });
    if (attributes.length > 0) {
      if ("openingElement" in parentJSXElement.node) {
        parentJSXElement.node.openingElement.attributes.push(...attributes);
      }
    }
    const node = parentJSXElement.node;

    const callParent = path.findParent((parent) =>
      t.isCallExpression(parent.node),
    );
    if (callParent === null) return;
    if (callParent.node?.arguments) {
      const node = callParent.node.arguments[0];
      callParent.replaceWith(node);
    }
    Bun.write(
      `console/parentJSXElement${node.start}.js`,
      generate(parentJSXElement.node).code,
    );
  }
}
function compatibleForm2ant(ast: Node) {
  traverse(ast, {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      appendFormImport(path);
    },
    CallExpression: (path: NodePath<CallExpression>) => {
      removeFormCreate(path);
      removeGetFieldDecorators(path);
    },
  });
}
export default compatibleForm2ant;
