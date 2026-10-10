import fs from 'node:fs';
import vm from 'node:vm';

const logs = [];
const log = (m) => {
  logs.push(m);
  console.log(m);
};

const chunkFiles = fs
  .readdirSync('dist/static/js/async')
  .filter((f) => f.endsWith('.js'))
  .sort();

const modules = {};
const cache = {};
let executions = 0;

function __webpack_require__(id) {
  if (cache[id]) {
    log(`  require(407) -> HIT (module already executed, returns cached instance)`);
    return cache[id].exports;
  }
  log(`  require(407) -> MISS -> executing module factory (execution #${++executions})`);
  const m = (cache[id] = { exports: {} });
  modules[id](m, m.exports, __webpack_require__);
  return m.exports;
}
__webpack_require__.m = modules;
__webpack_require__.r = (exports) => {
  Object.defineProperty(exports, '__esModule', { value: true });
};
__webpack_require__.d = (exports, definition) => {
  for (const k of Object.keys(definition))
    Object.defineProperty(exports, k, { get: definition[k] });
};
__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

const jsonpArray = [];
const jsonpCallback = (data) => {
  const [, moreModules] = data;
  for (const moduleId in moreModules) {
    if (__webpack_require__.o(moreModules, moduleId)) {
      log(`load chunk: store factory for module ${moduleId}`);
      modules[moduleId] = moreModules[moduleId];
    }
  }
};
jsonpArray.push = (data) => jsonpCallback(data);

const context = vm.createContext({
  console,
  self: { rspackChunkdemo20260821: jsonpArray },
  __webpack_require__,
});

const which = (file) => (file.includes('998') ? 'AsyncA(user clicks Load A)' : 'AsyncB(user clicks Load B)');

for (const f of chunkFiles) {
  log(`\n=== LOAD ${f} [${which(f)}] ===`);
  vm.runInContext(fs.readFileSync(`dist/static/js/async/${f}`, 'utf-8'), context);
  log('  ...Async component now requires utils(407):');
  __webpack_require__(407);
}

log(`\n=== RESULT ===`);
log(`total module-407 factory executions: ${executions}`);
log(`live instance count in registry: ${Object.values(cache).filter((m) => m.exports && typeof m.exports === 'object').length} (module 407)`);
log(`loadCount reported: ${__webpack_require__(407).Yq ? 'n/a' : ''}`);
log(`utils exported keys: ${Object.keys(__webpack_require__(407))}`);

fs.writeFileSync('test-utils-loads.log', logs.join('\n') + '\n', 'utf-8');
console.log('\n(log written to ./test-utils-loads.log)');
