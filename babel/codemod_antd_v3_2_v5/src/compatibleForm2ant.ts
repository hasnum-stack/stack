import traverse, { NodePath } from "@babel/traverse";
import type { CallExpression, ImportDeclaration, Node } from "@babel/types";
import t from "@babel/types";
import generate from "@babel/generator";
import { handleAppendFormImport } from "./handle/handleAppendFormImport.ts";
import { traverseFormCreate } from "./traverse/traverseFormCreate.ts";
import { removeGetFieldDecorators } from "./removeGetFieldDecorators.ts";
// function append
function compatibleForm2ant(ast: Node) {
  traverse(ast, {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      // Form添加到antd
      handleAppendFormImport(path);
    },
    CallExpression: (path: NodePath<CallExpression>) => {
      // 去掉Form.create()
      // removeFormCreate(path);
      // 去掉getFieldDecorator(),并将参数添加到JSXElement
      removeGetFieldDecorators(path);
    },
    ClassDeclaration: (path) => {
      // console.log(generate(path.node).code);
    },
  });
}
export default compatibleForm2ant;
