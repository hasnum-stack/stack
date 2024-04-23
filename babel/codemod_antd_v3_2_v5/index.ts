import parser from "@babel/parser";
import traverse, { NodePath } from "@babel/traverse";
import generate from "@babel/generator";

import type {
  File,
  ImportDeclaration,
  ModuleSpecifier,
  Node,
} from "@babel/types";
import compatibleForm2ant from "./src/compatibleForm2ant.ts";
function starMod(ast: Node) {
  traverse(ast, {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      // console.log(path.node.source.value, "path.node.source.value");
      // 查找import @ant-design/compatible语句
      if (path.node.source.value === "@ant-design/compatible") {
        const specifiers = path.node.specifiers;
        const specifiersLength = specifiers.length;
        // Form标识的索引
        const indexForm = specifiers.findIndex((item, index) => {
          if (
            item.type === "ImportSpecifier" &&
            item.imported.type === "Identifier"
          ) {
            return item.imported.name === "Form";
          }
        });
        //只有一个specifier,直接删除整个import语句
        if (specifiersLength === 1) {
          path.remove();
        } else {
          specifiers.splice(indexForm, 1);
        }
        //处理Form
        compatibleForm2ant(ast);
      }
    },
  });
}
async function run(path: string, target: string) {
  //Bun读取文件
  const code = await Bun.file(path).text();
  // return;
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
  });
  starMod(ast);
  const targetCode = generate(ast);
  Bun.write(target, targetCode.code);
  // console.log(ast);
}
run("source/index.js", "target/index.js");
