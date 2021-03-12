/**
 * 给对象添加迭代器
 */
let array = ['Marian', 'Rose', 'Zachary', 'Micheal', 'Vincent'];
let arrayIterator = array[Symbol.iterator]();
console.log('🚀 ~ arrayIterator', arrayIterator.next());

let object = {
  KE: 'Stanley Cortez',
  QA: 'James Cook',
  BI: 'Eleanor Lopez',
  NO: 'Eugene Jackson',
  EC: 'Mathilda Davis',
};

object[Symbol.iterator] = function(){

   return {
        return {
            next() {
                return {
                    value: '123',
                    done: false,
                };
            },
        };
    };
} 
let objectIterator = object[Symbol.iterator]();
console.log('~', objectIterator.next());
