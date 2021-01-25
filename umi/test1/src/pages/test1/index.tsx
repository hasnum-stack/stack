import React, { FC } from 'react';
import { IndexModelState, ConnectProps, Loading, connect } from 'umi';
interface PageProps extends ConnectProps {
  eewr: IndexModelState;
  loading: boolean;
}
const IndexPage: FC<PageProps> = ({ eewr, dispatch }) => {
  const { name } = eewr;
  return <div>Hello {name}</div>;
};
export default connect(
  ({ eewr, loading }: { eewr: IndexModelState; loading: Loading }) => {
    return {
      eewr,
      loading: loading.models.index,
    };
  },
)(IndexPage);
