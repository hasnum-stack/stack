/*
 * @Description:枚举
 * @LastEditTime: 2020-12-20 16:05:35
 */

enum Status {
    MASSAGE,
    SPA,
    DJKLF,
}
function getServe(status: number) {
    if (status === 0) {
        return 'masage';
    } else if (status === 1) {
        return 'SPA';
    } else if (status === 2) {
        return 'jdsijdsklf';
    }
}
// console.log(getServe(1));

console.log(Status['MASSAGE']);
