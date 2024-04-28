import parser from "@babel/parser";
import generate from "@babel/generator";
import traverse from "@babel/traverse";

async function run(path: string, target: string) {
  //Bun读取文件
  const code = await Bun.file(path).text();
  const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
  });
  traverse(ast, {
    Identifier: (path) => {
      if (path.node.name === "abc") {
        // console.log("React", path.scope.bindings["React"]);
        console.log(path.scope.bindings);
      }
    },
  });
  // const targetCode = generate(ast);
  // Bun.write("./test.js", targetCode.code);
}

run("test/scope/scope.js");
