import traverse, { NodePath } from "@babel/traverse";
import type { CallExpression, ImportDeclaration, Node } from "@babel/types";
import t from "@babel/types";
import generate from "@babel/generator";
import { handleAppendFormImport } from "./handle/handleAppendFormImport.ts";
import { traverseFormCreate } from "./traverse/traverseFormCreate.ts";
import {
  removeGetFieldDecorators,
  removeObjectPropertyGetFieldDecorator,
  removeEmptyObject,
} from "./removeGetFieldDecorators.ts";
// function append
function compatibleForm2ant(ast: Node) {
  //遍历是否有antd的import
  let hasAntdImport = false;
  traverse(ast, {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      if (path.node.source.value === "antd") {
        hasAntdImport = true;
      }
    },
  });
  // console.log("hasAntdImport", hasAntdImport);
  if (!hasAntdImport) {
    // 添加一个import from 'antd'
    //通过ast添加import语句
    const importDeclaration = t.importDeclaration(
      [t.importSpecifier(t.identifier("Form"), t.identifier("Form"))],
      t.stringLiteral("antd"),
    );
    //添加到ast的body中
    if ("program" in ast) {
      ast.program.body.unshift(importDeclaration);
    }
  }
  traverse(ast, {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      // Form添加到antd
      if (hasAntdImport) {
        handleAppendFormImport(path);
      }
    },
    CallExpression: (path: NodePath<CallExpression>) => {
      // 去掉Form.create()
      // removeFormCreate(path);
      // 去掉getFieldDecorator(),并将参数添加到JSXElement
      removeGetFieldDecorators(path);
    },
    Identifier: (path) => {
      //去掉对象中的getFieldDecorator属性
      const isRemove = removeObjectPropertyGetFieldDecorator(path);
      if (isRemove) {
        //去掉空的对象     const { } = this.props.form;
        removeEmptyObject(ast);
      }
    },
    ClassDeclaration: (path) => {
      // console.log(generate(path.node).code);
    },
  });
}
export default compatibleForm2ant;
