/*
 * @Description:泛型(函数)
 * @LastEditTime: 2020-12-20 17:04:27
 */
function join<T, P>(first: T, second: P) {
    return `${first}${second}`;
}

// console.log(join('1', '23'));  X
console.log(join<number, string>(1, '23'));

function arrayFunc<T>(params: Array<T>) {
    return params;
}
arrayFunc<string>(['1', '2']);
