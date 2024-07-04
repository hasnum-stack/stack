import t from "@babel/types";
import type { NodePath } from "@babel/traverse";
import type {
  Identifier,
  Expression,
  ClassProperty,
  Node,
  ArrowFunctionExpression,
  FunctionExpression,
  FunctionDeclaration,
  BlockStatement,
} from "@babel/types";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import { isReactComponent } from "../../utils/isReactComponent";

type params = {
  ast: Node;
  reactComponentIdentifierNode: Identifier;
};

// 获取 ClassProperty Node  formRef = React.createRef()
// 添加到 ClassDeclaration
function getFormRefNode() {
  return t.classProperty(
    t.identifier("formRef"),
    t.callExpression(
      t.memberExpression(t.identifier("React"), t.identifier("createRef")),
      [],
    ),
  );
}
// Node  const [form] = Form.useForm();
function getUseFormNode() {
  return t.variableDeclaration("const", [
    t.variableDeclarator(
      t.arrayPattern([t.identifier("form")]),
      t.callExpression(
        t.memberExpression(t.identifier("Form"), t.identifier("useForm")),
        [],
      ),
    ),
  ]);
}
function appendUseFormForFunctionBody(
  path: NodePath<
    FunctionDeclaration | FunctionExpression | ArrowFunctionExpression
  >,
) {
  if (path.has("body") && !path.get("body").isBlockStatement()) return;
  const functionBody = (path.node.body as BlockStatement).body;
  // 查找有没有form与Form.useForm()定义
  // 没有就添加
  const code = generate(getUseFormNode());
  const hasUseForm = functionBody.some((item) => {
    if (item.type === "VariableDeclaration") {
      const variableDeclarator = item.declarations[0];
      if (
        t.isArrayPattern(variableDeclarator.id) &&
        t.isIdentifier(variableDeclarator.id.elements[0])
      ) {
        return variableDeclarator.id.elements[0].name === "form";
      }
    }
  });
  if (!hasUseForm) {
    functionBody.unshift(getUseFormNode());
  }
  appendFormAttributeForJSXElement(path);
}
function appendFormAttributeForJSXElement(
  path: NodePath<
    FunctionDeclaration | FunctionExpression | ArrowFunctionExpression
  >,
) {
  path.traverse({
    JSXOpeningElement(innerPath) {
      if (
        innerPath.node.name.type === "JSXIdentifier" &&
        innerPath.node.name.name === "Form"
      ) {
        const formAttributeExists = innerPath.node.attributes.some(
          (attribute) =>
            t.isJSXAttribute(attribute) && attribute.name.name === "form",
        );

        if (!formAttributeExists) {
          const formAttribute = t.jsxAttribute(
            t.jsxIdentifier("form"),
            t.jsxExpressionContainer(t.identifier("form")),
          );
          innerPath.node.attributes.push(formAttribute);
        }
      }
    },
  });
}
function appendUseFormAndFormAttributeForFunctionBody(
  path: NodePath<
    FunctionDeclaration | FunctionExpression | ArrowFunctionExpression
  >,
) {
  appendUseFormForFunctionBody(path);
  appendFormAttributeForJSXElement(path);
  path.traverse({
    MemberExpression(innerPath) {
      if (
        t.isThisExpression(innerPath.node.object) &&
        t.isIdentifier(innerPath.node.property, { name: "props" }) &&
        innerPath.parentPath.isMemberExpression() &&
        t.isIdentifier(innerPath.parentPath.node.property, { name: "form" })
      ) {
        innerPath.parentPath.replaceWith(t.identifier("form"));
      }
    },
  });
}
function traversReactComponentByIdentifier({
  ast,
  reactComponentIdentifierNode,
}: params) {
  traverse(ast, {
    ClassDeclaration: (path) => {
      if (
        path.node.id?.name === reactComponentIdentifierNode.name &&
        isReactComponent(path)
      ) {
        const classBody = path.node.body.body;
        // 查找有没有formRef,没有就添加
        const hasFormRef = classBody.some((item) => {
          if (item.type === "ClassProperty" && t.isIdentifier(item.key)) {
            return item.key.name === "formRef";
          }
        });
        if (!hasFormRef) {
          classBody.unshift(getFormRefNode());
        }
        // 遍历组件,this.props.form 替换成 this.formRef.current,Form添加ref属性
        path.traverse({
          MemberExpression(path) {
            // 检查是否访问了 `this.props.form`
            if (
              t.isThisExpression(path.node.object) &&
              t.isIdentifier(path.node.property, { name: "props" }) &&
              path.parentPath.isMemberExpression() &&
              t.isIdentifier(path.parentPath.node.property, { name: "form" })
            ) {
              // 替换为 `this.formRef.current`
              path.parentPath.replaceWith(
                t.memberExpression(
                  t.memberExpression(
                    t.thisExpression(),
                    t.identifier("formRef"),
                  ),
                  t.identifier("current"),
                ),
              );
            }
          },
          JSXOpeningElement(path) {
            if (
              path.node.name.type === "JSXIdentifier" &&
              path.node.name.name === "Form"
            ) {
              const refAttributeExists = path.node.attributes.some(
                (attribute) =>
                  t.isJSXAttribute(attribute) && attribute.name.name === "ref",
              );

              if (!refAttributeExists) {
                const refAttribute = t.jsxAttribute(
                  t.jsxIdentifier("ref"),
                  t.jsxExpressionContainer(
                    t.memberExpression(
                      t.thisExpression(),
                      t.identifier("formRef"),
                    ),
                  ),
                );
                path.node.attributes.push(refAttribute);
              }
            }
          },
        });
      }
    },
    "ArrowFunctionExpression|FunctionExpression": (path) => {
      if (!path.isArrowFunctionExpression() && !path.isFunctionExpression())
        return;
      const parentPath = path?.parentPath;
      if (!parentPath) return;
      const hasId = parentPath.has("id");
      if (hasId) {
        const parentId = parentPath?.get("id");
        const parentIds = Array.isArray(parentId) ? parentId : [parentId];
        parentIds.forEach((id) => {
          if (id.isIdentifier({ name: reactComponentIdentifierNode.name })) {
            if (isReactComponent(path)) {
              appendUseFormAndFormAttributeForFunctionBody(path);
            }
          }
        });
      }
    },
    FunctionDeclaration: (path) => {
      if (path.node.id) {
        // console.log(
        //   "---",
        //   path.node.id.name,
        //   reactComponentIdentifierNode.name,
        // );
        // console.log("FunctionDeclaration", path.node.id.name);
        // console.log(path.node.id.name === reactComponentIdentifierNode.name);
        // console.log("666", isReactComponent(path));
        if (
          path.node.id.name === reactComponentIdentifierNode.name &&
          isReactComponent(path)
        ) {
          appendUseFormAndFormAttributeForFunctionBody(path);
        }
      }
    },
  });
}

export { traversReactComponentByIdentifier };
