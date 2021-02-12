import * as React from 'react';
import styles from './index.less';
import ButtonSize from './ButtonSize';
const IndexPage = () => {
  return (
    <div>
      <ButtonSize />
      <h1 className={styles.title}>Page index</h1>
      <div>test2</div>
    </div>
  );
};

export default IndexPage;
