/*
 * @Description:
 * @LastEditTime: 2020-12-20 11:46:43
 */
// class Person {
//     public readonly name: string;
//     constructor(name: string) {}
// }
class Person {
    constructor(public readonly name: string) {}
}
const a = new Person('hasnum');
//无法分配到 "name" ，因为它是只读属性
//a.name = '12'

//抽象类

abstract class Chouxiang1 {
    abstract skill();
}
class Shixian1 extends Chouxiang1 {
    skill(): void {
        console.log(`Shixian1实现抽象类`);
    }
}
class Shixian2 extends Chouxiang1 {
    skill(): void {
        console.log(`Shixian2实现抽象类`);
    }
}
