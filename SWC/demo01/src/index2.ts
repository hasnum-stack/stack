const a: string = "hello world";

const b = {
  [a]: "hello world",
};
const has = Object.hasOwn(b, a);
if (has) {
  console.log("lll");
}

console.log(a);
const c = [1, 2, 3];
const d = [...c, 4];
console.log(d);
async function test() {
  return 1;
}
async function main() {
  const res = await test();
  console.log(res);
  console.log("main");
}
main();
console.log(6);
