import React, { FC } from 'react';

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}`,
);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"

class Test {
  constructor() {
    console.log('test');
    const a = [12];
    const b = [...a];
    const Arr = Array.from(a);
    const promise = new Promise((resolve, reject) => {
      resolve(1);
    });
    console.log(b, Arr);

    const arr1 = [0, 1, 2, [3, 4]];

    Promise.resolve().finally();
    const numbers = [1, 2, 3, 4, 5];

    if (numbers.includes(3)) {
      console.log('Number 3 is in the array.');
    }
  }
}
const test = new Test();
console.log(test);
const Foo: FC<{ title: string }> = (props) => {
  const test = async () => {
    await fetch('https://jsonplaceholder.typicode.com/todos/1');
  };
  return <h4>{props.title} + 66</h4>;
};

export default Foo;
