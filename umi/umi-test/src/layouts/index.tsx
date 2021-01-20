import React from 'react';
import { Button } from 'antd';
import router from 'umi/router';

import Link from 'umi/link';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <Button type="danger" onClick={() => router.push('/')}>
        跳转
      </Button>

      <Link to="/books">Go to list page</Link>
      <Link to="/book">Go to list page</Link>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
      <div>
        <span>21213123</span>
      </div>
    </div>
  );
};

export default BasicLayout;
