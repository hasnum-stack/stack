import React from 'react';
import type { FC } from 'react';
// import { useTitle, useLocalStorage } from 'react-use';
import type { IndexModelState, ConnectProps, Loading } from 'umi';
import { connect } from 'umi';

interface PageProps extends ConnectProps {
  eewr: IndexModelState;
  loading: boolean;
}

const IndexPage: FC<PageProps> = ({ eewr, dispatch }) => {
  const { name } = eewr;
  // useTitle(`1231232423`);
  //   const [localValue, setLocalValue] = useLocalStorage('123', '初始化');
  //   console.log('🚀 ~ localValue', localValue);
  return <div>Hello {name}</div>;
};
export default connect(({ eewr, loading }: { eewr: IndexModelState; loading: Loading }) => {
  return {
    eewr,
    loading: loading.models.index,
  };
})(IndexPage);
