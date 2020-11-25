function zsq(target) {
    target.prototype.logger = () => `${target.name} 被调用`;
}

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
console.log(2134);
const a = require('./01-1index1');
a.test = 12;
console.log(a);

const Q = require('./01-1index1');
console.log('🚀 ~ Q', Q);

var u1 = new User('hasnum', '123');
console.log('u1', u1);
