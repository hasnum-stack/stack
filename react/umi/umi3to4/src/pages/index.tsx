import React, { Component } from 'react';
import styles from './index.less';

export default function IndexPage() {
  console.log('🚀 ~ IndexPage ~ Promise', Promise);
  return (
    <div>
      <h1 className={styles.title}>Page index123</h1>
      <Test />
    </div>
  );
}

class Test extends Component {
  render() {
    return <div>123</div>;
  }
}
