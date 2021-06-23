/*
 * @Description:
 * @LastEditTime: 2020-12-16 22:41:33
 */
class Laaa {
    constructor() {
        // this.c = '123';
    }
    private a: string = 'hi';
    private c: string = '123';
    say() {
        console.log(this.a);
    }
}

class Abbb extends Laaa {
    b: string = 'too';
    sayB() {
        console.log(this.b);
    }
}
const rjlkfsdj = new Abbb();
rjlkfsdj.say();
rjlkfsdj.sayB();
const dsfjkl = new Laaa();
console.log('🚀 ~ dsfjkl', dsfjkl);

class Auio {
    constructor(test: string = '213') {
        this.a = test;
    }
    a: string;
    say() {
        return 'super';
    }
}
class Tewr extends Auio {
    dsk() {
        return super.say() + 123;
    }
}
// console.log(new Auio());
console.log(new Tewr().dsk());
