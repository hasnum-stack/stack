import parser from "@babel/parser";
import traverse, { NodePath } from "@babel/traverse";
import type {
  File,
  ImportDeclaration,
  ModuleSpecifier,
  Node,
} from "@babel/types";
function starMod(ast: Node) {
  traverse(ast, {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      if (path.node.source.value.startsWith("@ant-design/compatible")) {
        path.node.specifiers.forEach((item) => {
          if (
            item.type === "ImportSpecifier" &&
            item.imported.type === "Identifier"
          ) {
            console.log(item.imported.name);
          }
        });
        // if()
      }
    },
  });
}
async function run(path: string) {
  //Bun读取文件
  const code = await Bun.file(path).text();
  // return;
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
  });
  starMod(ast);
  // console.log(ast);
}
run("source/index.js");
