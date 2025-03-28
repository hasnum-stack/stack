import React from 'react';
import './index.less';
import { createStyles } from 'antd-style';
console.log('mfmfmfmfmfmf_part');
const useStyles = createStyles(({ token }) => {
  const primaryColor = token.colorPrimary;
  return {
    container: {
      color: primaryColor,
    },
  };
});

const Part: React.FC = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.container}>
      'container'
      <div className="icon-container">
        <img src="https://module-federation.io/svg.svg" alt="logo" className="logo-image" />
      </div>
      <h1 className="title">Hello Module Federation 2.0</h1>
    </div>
  );
};

export default Part;
