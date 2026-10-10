import fs from 'node:fs';
import vm from 'node:vm';

const distJs = 'dist/static/js';
const indexFile = fs.readdirSync(distJs).find((f) => /^index\.[a-f0-9]+\.js$/.test(f));
const indexSrc = fs.readFileSync(`${distJs}/${indexFile}`, 'utf-8');

// ① 暴露闭包内的 __webpack_require__ 和 jsonpInstalledChunks
let patched = indexSrc
  .replace(
    'var jsonpInstalledChunks = { 410: 0 };',
    'var jsonpInstalledChunks = { 410: 0 }; self.__jsonpInstalledChunks = jsonpInstalledChunks;',
  )
  // ② 中和入口启动(不真的 render React),并把 __webpack_require__ 挂到全局
  .replace(
    /var __webpack_exports__ = __webpack_require__\.O\(undefined, \[[^\]]+\], \(\) => __webpack_require__\(947\)\);\s*\n\s*__webpack_exports__ = __webpack_require__\.O\(__webpack_exports__\);/,
    'self.__webpack_require__ = __webpack_require__;',
  );

// ③ 提供最小 document(react 渲染被中和了,这里只为兜底)
const context = vm.createContext({
  self: {},
  console,
  document: {
    createElement: () => ({ set src(v) {}, onload: null, onerror: null }),
    head: { appendChild: () => {} },
  },
});
context.self = context;

vm.runInContext(patched, context);

const wr = context.__webpack_require__;
const chunkTable = context.__jsonpInstalledChunks;

// ④ 把浏览器"注入 <script> 下载"换成 Node 读磁盘文件 + 同 context 执行
wr.l = (url, done, key, chunkId) => {
  const file = `dist/${url}`;
  console.log(`[node-loader] loading chunk ${chunkId} -> ${url}`);
  const src = fs.readFileSync(file, 'utf-8');
  vm.runInContext(src, context); // 触发 self.push -> __rspack_jsonp 注册模块
  done(null);
};

console.log('=== before ===');
console.log('jsonpInstalledChunks:', JSON.stringify(chunkTable));
console.log('__webpack_require__.f keys:', Object.keys(wr.f));

console.log('\n=== call __webpack_require__.e(740) (=== AsyncA 的 import) ===');
const p = wr.e(740).then(() => {
  console.log('after e(740): jsonpInstalledChunks =', JSON.stringify(chunkTable));
  console.log('module 407 registered?', typeof wr(407) === 'function' || !!wr(407));
  console.log('utils exports:', Object.keys(wr(407)));
});
await p;

console.log('\n=== 再加载 243 (AsyncB) ===');
await wr.e(243);
console.log('after e(243): jsonpInstalledChunks =', JSON.stringify(chunkTable));
console.log('module registry keys (m):', Object.keys(wr.m).sort((a, b) => a - b).join(', '));
