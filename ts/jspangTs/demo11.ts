/*
 * @Description:
 * @LastEditTime: 2020-12-16 23:07:07
 */
class Asdjkfl {
    //类的内部
    public a: number = 1;
    private b: string = 'b';
    protected c: number = 3; //可以在继承中使用 及其子类中访问
}
class Aiop extends Asdjkfl {
    say() {
        // return this.c + this.b;
        return this.c;
    }
}
//类的外部
let dsfksdf = new Asdjkfl();
// dsfksdf.a = 123;
// dsfksdf.b = '123';

// console.log('🚀 ~ dsfksdf.b', dsfksdf);

function fdjsklfjsd(a) {
    console.log(a);
}

fdjsklfjsd(dsfksdf);
