/*
 * @Description:
 * @LastEditTime: 2020-12-08 18:00:15
 */
//类型 可以是原始值func

interface user {
    name: string;
    age: number;
    h?: string;
}
function getDjfsklj(user: user): void {
    console.log(user.name, user.age);
}
const a = { name: '12321', age: 2, hei: 123, dsfsdf: 'idfjuiodlsja' };
getDjfsklj(a);

// getDjfsklj({ name: '12321', age: 2, hei: 123, dsfsdf: 'idfjuiodlsja' });
