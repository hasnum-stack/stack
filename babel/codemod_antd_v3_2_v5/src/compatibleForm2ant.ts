import traverse, { NodePath } from "@babel/traverse";
import t from "@babel/types";
import type {
  File,
  ImportDeclaration,
  ModuleSpecifier,
  Node,
  CallExpression,
} from "@babel/types";

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
  if (path.node.callee.type === "MemberExpression") {
    if (
      path.node.callee.object.type === "Identifier" &&
      path.node.callee.object.name === "Form" &&
      path.node.callee.property.type === "Identifier" &&
      path.node.callee.property.name === "create"
    ) {
      // 他
      path.parentPath.replaceWith(path.parentPath.node.arguments[0]);
      // path.remove();
      // console.log(JSON.stringify(path.node));
      // Bun.write(, "./path.json");
      // path.replaceWith(path.node.arguments[0]);
    }
  }
}
function compatibleForm2ant(ast: Node) {
  traverse(ast, {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      appendFormImport(path);
    },
    CallExpression: (path: NodePath<CallExpression>) => {
      removeFormCreate(path);
    },
  });
}
export default compatibleForm2ant;
