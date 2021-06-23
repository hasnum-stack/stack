/**
 * 数组
 */
let arr1: number[] = [1, 2];
let arr3: Array<number> = [1, 2];

let arr2: (number | string)[] = [1, 2, '123'];
let arr4: Array<number | string> = [1, 2, '123'];

/**
 * 元组
 * 已知元素数量和类型的数组
 * 可使用数组方法,使用联合类型
 */
let arr5: [number, string, boolean] = [1, '1', true];
arr5.push(true);
console.log(arr5);
