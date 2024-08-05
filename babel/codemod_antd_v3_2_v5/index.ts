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
import prettier from "prettier";
import compatibleForm2ant from "./src/compatibleForm2ant.ts";
import { traverseFormCreate } from "./src/traverse/traverseFormCreate.ts";
import { handleImportForm } from "./src/handle/handleImportForm.ts";
import { handleImportIcon } from "./src/handle/handleImportIcon.ts";
import { handleRootClassName } from "./src/handle/handleRootClassName.ts";
function startMod(ast: Node, currentPath: string) {
  let flag = false;
  traverse(ast, {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      /**
       * 查找import @ant-design/compatible语句
       * 过滤出需要处理的文件
       */
      if (path.node.source.value === "@ant-design/compatible") {
        const specifiers = path.node.specifiers;
        // Form标识的索引
        const indexForm = specifiers.findIndex((item, index) => {
          if (
            item.type === "ImportSpecifier" &&
            item.imported.type === "Identifier"
          ) {
            return item.imported.name === "Form";
          }
        });
        const importFormFlag = handleImportForm(ast, path, indexForm);

        //import { Icon as LegacyIcon } from '@ant-design/compatible';
        const indexIcon = specifiers.findIndex((item, index) => {
          if (
            item.type === "ImportSpecifier" &&
            item.imported.type === "Identifier" &&
            item.imported.name === "Icon" &&
            item.local.type === "Identifier" &&
            item.local.name === "LegacyIcon"
          ) {
            return true;
          }
        });
        const importIconFlag = handleImportIcon(ast, path, indexIcon);

        const classNameFlag = handleRootClassName(ast);
        flag = importFormFlag || importIconFlag || classNameFlag;
      }
    },
  });

  return flag;
}
let count = 0;
async function run(path: string, target: string) {
  //Bun读取文件
  const code = await Bun.file(path).text();
  // return;
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx", "typescript", "decorators"],
  });
  const flag = startMod(ast, path);
  if (!flag) return;
  count++;
  const targetCode = generate(ast);
  const formatedCode = await prettier.format(targetCode.code, {
    parser: "babel",
    printWidth: 120, // 行宽
    tabWidth: 2, // 缩进字节数
    semi: true, // 句尾添加分号
    singleQuote: true, // 单引号
    jsxSingleQuote: true, // JSX单引号
    arrowParens: "avoid", //箭头函数一个参数省略括号
  });
  Bun.write(target, formatedCode);
}

async function gogo(path: string) {
  const res = await glob(path, {
    ignore: ["node_modules/**/*"],
  });

  for (const item of res) {
    // const target = item.replace("src", "dist");
    // console.log(target);
    await run(item, item);
  }
  console.log(count);
}
gogo("/Users/hasnum/Documents/ZL/code/ehome-admin-async/square/src/**/*.js");
