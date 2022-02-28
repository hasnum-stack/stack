import { useEffect } from 'react';
import styles from './index.less';
class TestCalss extends Object {
  constructor() {
    super();
  }
  a = 1;
}

export default function IndexPage() {
  const a = '1' ?? '2';
  console.log('🚀 ~ IndexPage ~ a ', a);
  const b = new TestCalss();
  useEffect(() => {
    new Promise((resovle) => {
      resovle();
    });
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
