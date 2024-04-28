import { NodePath } from "@babel/traverse";
import t, { type ImportDeclaration } from "@babel/types";

const v5antd = "antd";

/**
 * append Form import
 * import { Form } from 'antd'
 * @param path
 */
export function handleAppendFormImport(path: NodePath<ImportDeclaration>) {
  // 查找 import ant语句
  if (path.node.source.value === v5antd) {
    path.node.specifiers.push(
      t.importSpecifier(t.identifier("Form"), t.identifier("Form")),
    );
  }
}
