const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

/**
 * 回调函数异步
 * 缺点:依次读取多个文件就会出现多重嵌套,很难管理,情况称为回调地狱噩梦,也有叫回调地狱
 *
 */
//tips:err 执行分成两段，在这两段之间抛出的错误，程序无法捕捉，只能当作参数，传入第二段
fs.readFile(path.resolve(__dirname, '../index1.js'), (err, data) => {
    //err没有错误返回null
    if (err) {
        console.log(err);
        return;
    }
    // console.log('🚀 ~ fs.readFile ~ err', err);
    // console.log('🚀 ~ fs.readFile ~ data', data);
});

/**
 * promise
 * 解决回调地狱
 *
 */
function promiseReadFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
            //err没有错误返回null
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}
promiseReadFile(path.resolve(__dirname, '../index1.js'))
    .then(res => {
        console.log(res.toString());
    })
    .then(res => {
        return promiseReadFile(path.resolve(__dirname, '../index2.js'));
    })
    .then(res => {
        console.log(res.toString());
    })
    .catch(err => {
        console.log(err);
    });
