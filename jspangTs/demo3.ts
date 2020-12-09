/*
 * @Description:
 * @LastEditTime: 2020-12-08 16:28:42
 */
const aperson: { name: string; hubit: string[] } = {
    name: 'hasnum',
    hubit: ['123', '123123'],
};
const list: number[] = [1, 23, 4];

class Person {}
const auser: Person = new Person();

const afunc: () => string = () => {
    return '123';
};
let a = afunc();
console.log('🚀 ~ a', a);
