/*
 * @Description:类型推断 类型注解
 * @LastEditTime: 2020-12-08 17:12:35
 */
let x = 3;

let y = [0, 1, null];

function getTotal(a: number, b: number) {}
function tet(a: number, b: string) {
    return a + b;
}
//类型自动推断
const lll = tet(1, '1');
