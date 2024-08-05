{
  const a = 123;
}
const a = 789;
const b = {
  a: 12345,
};
const hasa = Object.hasOwn(b, "a");
if (hasa) {
  console.log("has a");
}
