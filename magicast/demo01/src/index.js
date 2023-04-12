const path = require('path');
const { parseModule, generateCode, builders, createNode, loadFile, writeFile } = require('magicast');
const start = async () => {
  const rootpath = process.cwd();

  const mod = await loadFile(path.resolve(rootpath, 'source/index.js'));
  // const ast = mod;

  const module = parseModule(mod.$code);
  console.info(module.exports);
  // console.log(mod.exports);
};
start();
