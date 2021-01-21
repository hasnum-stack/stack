import styles from './index.less';
import ButtonSize from './ButtonSize';
export default function IndexPage() {
  return (
    <div>
      <ButtonSize />
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
