/**
 * function
 *
 * 必选参数不能位于可选参数后(可选参数们必须位于最后)
 */
function Grace(num1: number, num2: number = 2, num3?: number, num4?: number): number {
  return num1 + num2;
}
console.log(Grace(1));

function test<T>(x: T): string {
  return '123';
}
test(1);
/**
 * 函数表达式方式声明函数
 * 全写
 */
let Ronald: (num1: number) => number = (num1: number): number => {
  return 1;
};

/**
 * 根据函数的参数与返回值推断函数类型
 * (后面推算前面)
 *
 */
let Hogan = (num1: number): string => {
  return '123';
};

/**
 * 根据函数表达式的类型推断,参数和返回值
 * (前面推算后面)
 *
 */
//1.直接在声明是写函数类型 (返回值为=>)
let Clara: (x: string, y: string) => string = (x, y) => {
  return x + y;
};
//2.提前声明接口,并在函数表达式时引用 (返回值为:)
interface ICordelia<T> {
  (x: number, y: T): string;
}
let Murphy: ICordelia<number> = (x, y) => {
  return `${x}${y}`;
};
/**
 * 写点其他的
 *
 * 预编译四步骤
 * 1.创建AO(active object);
 * 2.查找形参与变量声明,作为AO属性并赋值undefined;
 * 3.实参赋值对应变量
 * 4.查找函数声明,函数名作为AO属性并赋值该函数
 */
