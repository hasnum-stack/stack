const swc = require("@swc/core");
async function run() {
  const module = await swc.parseFile("./src/index.js", {
    // Some options cannot be specified in .swcrc
    // filename: "../target/index.js",
    sourceMaps: true,
    syntax: "ecmascript",
    jsx: true,
    // Input files are treated as module by default.
    // isModule: false,

    // All options below can be configured via .swcrc
    // jsc: {
    //   parser: {
    //     syntax: "ecmascript",
    //   },
    //   transform: {},
    // },
    // jsc: {
    //   parser: {
    //     syntax: "ecmascript",
    //     jsx: true,
    //   },
    // },
  });
  const astStringify = JSON.stringify(module.body);
  const source = await swc.print(module, {});
  Bun.write("target/index.js", source.code);
  //bun写入文件
  Bun.write("target/index.ast.json", astStringify);
  // .then((module) => {
  //   module.type; // file type
  //   const ast = module.body; // AST
  //   const astStringify = JSON.stringify(module.body);
  //
  //   swc.print(module, {}).then((result) => {
  //     Bun.write("target/index.js", result.code);
  //   });
  //
  //   //bun写入文件
  //   Bun.write("target/index.ast.json", astStringify);
  // });
}

run();
