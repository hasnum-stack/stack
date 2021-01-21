import styles from './index.less';
import { PageLoading } from '@ant-design/pro-layout';

export default function IndexPage() {
  return (
    <div>
      <PageLoading />
      <h1 className={styles.title}>test2</h1>
    </div>
  );
}
