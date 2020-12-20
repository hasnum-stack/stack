/*
 * @Description:联合类型与类型保护
 * @LastEditTime: 2020-12-20 15:48:43
 */
interface Waiter {
    anjiao: boolean;
    say: () => {};
}
interface Teacher {
    anjiao: boolean;
    skill: () => {};
}

//联合类型
function judegeWho(animal: Waiter | Teacher) {
    //:

    //类型保护断言
    if (animal.anjiao) {
        (animal as Teacher).skill();
    } else {
        (animal as Waiter).say();
    }

    //类型保护in
    if ('skill' in animal) {
        animal.skill();
    } else {
        animal.say();
    }
}

function add(first: string | number, second: string | number) {
    // 类型保护 typeof
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`;
    }
    return first + second;
}

class NumberObj {
    constructor(public count: number) {}
}
function addCount(first: NumberObj | object, second: NumberObj | object) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
console.log(addCount(new NumberObj(1), new NumberObj(2)));
