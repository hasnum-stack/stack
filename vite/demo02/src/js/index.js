/**
 * 阻塞代码
 *
 */
// for (let i = 0; i < 3000000000; i++) {
//     let a = i;
// }

/**
 * 柯里化任意调用累加
 * 重写toString
 *
 */
function add(initNumber) {
  let sum = initNumber;
  let adder = (calcNumber) => {
    sum = sum + calcNumber;
    return adder;
  };
  adder.toString = function () {
    return sum;
  };
  return adder;
}
let result = add('dsfsd')(2);
console.log('🚀 ~ add ~ add', result(3));

let obj = {
  a: 1,
  dsfdsf: 123,
  //   valueOf() {
  //     console.log('valueOf');
  //     return 1;
  //   },
  //   toString() {
  //     console.log('toString');
  //     return 2;
  //   },
};
class ets {}
new ets();
Object.defineProperty(obj, 'test', {
  value: 1,
});
console.log(obj);
