/*
 * @Description:泛型(类)
 * @LastEditTime: 2020-12-23 22:32:00
 */
class Select {
    constructor(private person: string[]) {}
    getPerson(index: number) {
        return this.person[index];
    }
}

class Select<T> {
    // constructor(private person: T[]) {}
    constructor(private person: Array<T>) {}
    getPerson(index: number) {
        return this.person[index];
    }
}
const aSelect = new Select<string>(['select0', 'select1', 'select2', 'select3', 'select4', 'select5']);
console.log(aSelect.getPerson(2));

//泛型继承
interface Person {
    name: string;
}

class Select<T extends Person> {
    constructor(private personlist: T[]) {}
    getaperson(index: number): string {
        return this.personlist[index].name;
    }
}
const aselect = new Select<Person>([{ name: '123' }, { name: '1233432' }, { name: 'jdklfjdsl' }]);
console.log(aselect.getaperson(2));

// 泛型约束
class Select<T extends number | string> {
    constructor(private perlist: T[]) {}
    selectByNumber(index: number) {
        return this.perlist[index];
    }
}
const dsjfklasdj = new Select(['1', 2, '213123', '233', 232424]);
console.log(dsjfklasdj.selectByNumber(1));

/**
 * @练习
 */
class Select<T> {
    constructor(private list: Array<T>) {}
    getListByIndex(index: number): T {
        return this.list[index];
    }
}
const list = new Select<string>(['123', '123', '456']);
console.log('🚀 ~ listIndex', list.getListByIndex(1));

interface PersonName {
    name: string;
}
class Person<T extends PersonName> {
    constructor(private list: Array<T>) {}
    getPseronByIndex(index: number): T {
        return this.list[index];
    }
}

const apersonlist = new Person([
    { name: '123', age: 12 },
    { name: '435', age: 345 },
    { name: 'hasnum', age: 25 },
]);
console.log('🚀 ~ ', apersonlist.getPseronByIndex(0));

class Select<T extends string | number> {}
function reverse<T>(items: T[]): T[] {
    const toreturn = [];
    for (let i = items.length - 1; i >= 0; i--) {
        toreturn.push(items[i]);
    }
    return toreturn;
}

const sample = [1, 2, 3];
let reversed = reverse(sample);

// reversed[0] = '1'; // Error
// reversed = ['1', '2']; // Error

reversed[0] = 1; // ok
reversed = [1, 2]; // ok
function testT<T>(arg: T) {
    const dsjfkl = arg;
    return dsjfkl;
}

testT(1);
