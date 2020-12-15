/*
 * @Description:
 * @LastEditTime: 2020-12-15 22:25:10
 */
class Laaa {
    private a: string = 'hi';
    private c: string = '123';
    constructor() {
        // this.c = '123';
    }
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
