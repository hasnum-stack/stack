/*
 * @Description:泛型(类)
 * @LastEditTime: 2020-12-20 17:52:39
 */
// class Select {
//     constructor(private person: string[]) {}
//     getPerson(index: number) {
//         return this.person[index];
//     }
// }

// class Select<T> {
//     // constructor(private person: T[]) {}
//     constructor(private person: Array<T>) {}
//     getPerson(index: number) {
//         return this.person[index];
//     }
// }
// const aSelect = new Select<string>(['select0', 'select1', 'select2', 'select3', 'select4', 'select5']);
// console.log(aSelect.getPerson(2));

//泛型继承
// interface Person {
//     name: string;
// }

// class Select<T extends Person> {
//     constructor(private personlist: T[]) {}
//     getaperson(index: number): string {
//         return this.personlist[index].name;
//     }
// }
// const aselect = new Select([{ name: '123' }, { name: '1233432' }, { name: 'jdklfjdsl' }]);
// console.log(aselect.getaperson(2));

//泛型约束

class Select<T extends number | string> {
    constructor(private perlist: T[]) {}
    selectByNumber(index: number) {
        return this.perlist[index];
    }
}
const dsjfklasdj = new Select(['1', 2, '213123', '233', 232424]);
console.log(dsjfklasdj.selectByNumber(2));
