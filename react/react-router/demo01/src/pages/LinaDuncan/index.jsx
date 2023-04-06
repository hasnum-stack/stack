import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoganMcDonald from '../LoganMcDonald';
export default () => {
  return (
    <>
      <div>LinaDuncan6</div>
      <BrowserRouter>
        <Switch>
          <Route path="/logan-mcdonald" component={LoganMcDonald} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
