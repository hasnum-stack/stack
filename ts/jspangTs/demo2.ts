/*
 * @Description: 静态类型 static type
 * @LastEditTime: 2020-12-08 13:44:42
 */
let num: number = 123;

interface User {
    name: String;
    age: Number;
}

const person: User = {
    name: 'hasnum',
    age: 123,
};

interface ersdfs {
    name: string;
}
let obj: ersdfs = {
    name: '123',
};

let fsdds: { age: number } = {
    age: 123,
};

console.log(person);
