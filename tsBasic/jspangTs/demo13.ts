/*
 * @Description:getter setter
 * @LastEditTime: 2020-12-20 11:29:04
 */

class Student {
    constructor(private _age: number) {}
    get age(): number {
        return this._age - 10;
    }
    set age(age: number) {
        this._age = age + 2;
    }
}

const hasnum = new Student(26);
hasnum.age = 29;
console.log(hasnum.age);

// static 静态属性 直接通过构造函数调用
class Adjkflsdj {
    static dsfk() {
        return 'static';
    }
    public totodsjfl() {
        return 'public';
    }
    name: string = '123';
}
const dsflds = new Adjkflsdj();
console.log();
