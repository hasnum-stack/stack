/**
 * 函数泛型
 *
 */
function test<T>(a: T, b: string): string {
  return a + b;
}
test<number>(1, '2');
let a: number = 1;
/**
 * 接口泛型
 */
interface student<T> {
  a: T;
}

let student: student<string> = {
  a: '1',
};

/**
 *
 */
type test = string | number | student<student<string>>;
type NameResolver = () => string;
let test1: test = {
  a: {
    a: '123',
  },
};
