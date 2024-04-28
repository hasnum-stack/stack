import parser from "@babel/parser";
import generate from "@babel/generator";
import traverse from "@babel/traverse";
import { isReactComponent } from "../../utils/isReactComponent.ts";

async function run(path: string, target: string) {
  //Bun读取文件
  const code = await Bun.file(path).text();
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
  });
  traverse(ast, {
    ClassDeclaration: (path) => {
      // console.log("NAME", path.node.id.name);
      // console.log(`-----${isReactComponent(path)}`);
      // if (isReactComponent(path)) {
      // console.log(generate(path.node).code);
      // path.skip();
      // }
    },
    Function: (path) => {
      console.log(`-----${isReactComponent(path)}`);
      if (isReactComponent(path)) {
        console.log(generate(path.node).code);
      }
    },
  });
  // const targetCode = generate(ast);
  // Bun.write("./test.js", targetCode.code);
}

run("../../source/isReactComponent.js", "target/index.js");
