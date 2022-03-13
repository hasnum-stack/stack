import React from 'react';
const a = 123;
function Test() {
  return <div>123</div>;
}

class Test1 extends React.Component {
  render() {
    return <Test />;
  }
}
console.log(a);

const tet = 123;
export { Test, Test1, tet };
