import { traverseFormCreate } from "../traverse/traverseFormCreate.ts";
import compatibleForm2ant from "../compatibleForm2ant.ts";
import type { ImportDeclaration, Node } from "@babel/types";
import { NodePath } from "@babel/traverse";

export function handleImportForm(
  ast: Node,
  path: NodePath<ImportDeclaration>,
  indexForm: number,
) {
  if (indexForm === -1) return false;
  const specifiers = path.node.specifiers;
  const specifiersLength = specifiers.length;
  //只有一个specifier,直接删除整个import语句
  if (specifiersLength === 1) {
    path.remove();
  } else {
    specifiers.splice(indexForm, 1);
  }
  // console.log(currentPath);
  traverseFormCreate(ast);
  // return;

  //处理Form
  compatibleForm2ant(ast);
  return true;
}
