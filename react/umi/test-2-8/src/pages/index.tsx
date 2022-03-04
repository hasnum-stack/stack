import { useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'umi';
import styles from './index.less';
class TestCalss extends Object {
  constructor() {
    super();
  }
  a = 1;
}

export default function IndexPage(props) {
  console.log('🚀 ~ IndexPage ~ props', props);
  console.log('🚀 ~ useRouteMatch');

  const routeMatch = useRouteMatch();
  console.log('🚀 ~ IndexPage ~ routeMatch', routeMatch);
  const a = '1' ?? '2';
  console.log('🚀 ~ IndexPage ~ a ', a);
  const b = new TestCalss();
  useEffect(() => {
    new Promise((resovle) => {
      // resovle();
    });
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Switch>
        <Route path={`${routeMatch.url}/123`}>
          <div>123</div>
        </Route>
        <Route path={`${routeMatch.url}/789`} component={TEdsjkflsdfjj}></Route>
      </Switch>
    </div>
  );
}

function TEdsjkflsdfjj() {
  return <div>789</div>;
}
