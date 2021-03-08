/*
 * @Description:
 * @LastEditTime: 2020-12-15 22:06:46
 */
/*
 * @Description:
 * @LastEditTime: 2020-12-08 17:49:27
 */
//类型 可以是原始值func

interface user {
    name: string;
    age: number;
    h?: string;
    // [propname: string]: any;
    // say(): string;
}
function fdgdfgdfgfd({ name, age }: user): void {
    console.log(name, age);
}
const dfsdf = {
    name: '12321',
    age: 2,
    hei: 123,
    dsfsdf: 'idfjuiodlsja',
    say() {
        return '123';
    },
};
// fdgdfgdfgfd({
//     name: '123',
//     age: 1,
//     too: 2,
//     say() {
//         return '123';
//     },
//     t: 213,
// });
const srfsdfs = { name: '12321', age: 2, hei: 123, dsfsdf: 'idfjuiodlsja' };
fdgdfgdfgfd(srfsdfs);

// fdgdfgdfgfd(dfsdf);.

interface SearchFunc {
    (source: string, substring: string): number;
}
const searchfunc: SearchFunc = (source, substring) => parseFloat(source + substring);

const user: user = {
    name: 'q23',
    age: 1,
};

interface StringArray {
    [dfs: string]: string;
    [dfs: number]: string;
}
const stringarray: StringArray = {
    '123': '123',
    '456': '456',
    12: '123',
};
console.log('🚀 ~ stringarray', stringarray);

class Clock implements user {
    name: string;
    age: number;
}

interface Suaer extends user {
    tets: string;
}

const asqa: Suaer = {
    tets: '123',
    name: '123',
    age: 123,
};

function identity<TETWT>(arg: TETWT): TETWT {
    return arg;
}
