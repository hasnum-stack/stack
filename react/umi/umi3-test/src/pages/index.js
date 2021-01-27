import { connect, useSelector, useDispatch } from 'umi';
import { Button } from 'antd';
import styles from './index.css';

const Index = ({ test, loading, dispatch }) => {
  let book = useSelector(({ book }) => book);
  const dispath = useDispatch();
  return (
    <div className={styles.normal}>
      <Button
        type="danger"
        onClick={() => {
          dispath({
            type: 'book/add',
          });
        }}
      >
        {book.bookAge}
      </Button>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
        </li>
      </ul>
    </div>
  );
};
// export default connect()(Index);
// export default connect(({ test, book }) => {
//   return { test, book };
// })(Index);
export default Index;
