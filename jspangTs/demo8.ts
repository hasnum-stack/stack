/*
 * @Description:
 * @LastEditTime: 2020-12-15 21:09:19
 */
//类型 可以是原始值func

interface user {
    name: string;
    age: number;
    h?: string;
    [propname: string]: any;
}
function getDjfsklj(user: user): void {
    console.log(user.name, user.age);
    console.log(user.dsfsdf);
}
// const a = { name: '12321', age: 2, hei: 123, dsfsdf: 'idfjuiodlsja' };
// getDjfsklj(a);

getDjfsklj({ name: '12321', age: 2, hei: 123, dsfsdf: 'idfjuiodlsja' });
