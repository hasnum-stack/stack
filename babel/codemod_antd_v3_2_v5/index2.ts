import parser from "@babel/parser";
import traverse, { NodePath } from "@babel/traverse";
import generate from "@babel/generator";
import type {
  File,
  ImportDeclaration,
  ModuleSpecifier,
  Node,
} from "@babel/types";
import { glob, globStream } from "glob";
import fs from "fs";
import compatibleForm2ant from "./src/compatibleForm2ant.ts";
import { traverseFormCreate } from "./src/traverse/traverseFormCreate.ts";
function startMod(ast: Node) {
  traverse(ast, {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      /**
       * 查找import @ant-design/compatible语句
       * 过滤出需要处理的文件
       */
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

        traverseFormCreate(ast);
        // return;
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
    plugins: ["jsx", "typescript"],
  });
  startMod(ast);
  const targetCode = generate(ast);
  Bun.write(target, targetCode.code);
}

async function gogo(path: string) {
  const res = await glob(path, {
    ignore: ["node_modules/**/*"],
  });
  console.log(res);
  for (const item of res) {
    const target = item.replace("source", "dist");
    console.log(target);
    await run(item, target);
  }
  // console.log(res.length);
}
gogo("./source/**/*.js");
