import logo from './logo.svg';
import './App.css';
import { Button, Tabs, Badge, SearchBar } from 'antd-mobile';
import MultiMenuExample from './SelectDepart';
import ListViewTest from './ListView';
const tabs = [
  { title: <Badge text={'3'}>First Tab</Badge> },
  { title: <Badge text={'今日(20)'}>Second Tab</Badge> },
  { title: <Badge dot>Third Tab</Badge> },
];

function App() {
  return (
    <>
      <SearchBar placeholder="Search" maxLength={8} />
      <Tabs
        tabs={tabs}
        initialPage={1}
        onChange={(tab, index) => {
          console.log('onChange', index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log('onTabClick', index, tab);
        }}>
        <ListViewTest />
      </Tabs>
    </>
    // <div className="App">
    /* <Button type="primary">点击</Button> */
    /* <MultiMenuExample></MultiMenuExample> */
    // </div>
  );
}

export default App;
