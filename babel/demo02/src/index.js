new Promise(() => {});
class Test {
  constructor() {
    console.log('Test');
    this.a = 1;
  }
  todo() {
    console.log('todo');
  }
  say() {
    console.log(this.a);
  }
}
const a = new Test();
a.todo();
a.say();
function test4(...args) {
  return args.reduce((a, b) => a + b, 0);
}
function test5(config) {
  return {
    ...config,
    form: 'test5',
  };
}
function test6() {
  return new Promise(resolve => {
    resolve('123');
  });
}
async function main() {
  const res = await test6();
  console.log(res);
}
main();
const b = new Map([
  ['a', 2],
  [3, 4],
]);
console.log(b);
const c = `${b.get('a')}, ${b.get(3)},5`;
fetch('https://www.baidu.com');
const d = [1, 2, 3, 4, 5];
let e = d.map(item => item * 2);
