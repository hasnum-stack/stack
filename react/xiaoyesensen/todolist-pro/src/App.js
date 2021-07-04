import { useCallback, useState } from 'react';
import AppHeader from './components/AppHeader';
import AddInput from './components/AddInput';
import './App.scss';
function App() {
  const [isInputShow, setInputShow] = useState(false),
    [todoList, setTodoList] = useState([]),
    addItem = useCallback(value => {
      const dataItem = {
        id: new Date().getTime(),
        content: value,
        completed: false,
      };
      setTodoList(todoList => [...todoList, dataItem]);
      setInputShow(false);
    }, []);
  return (
    <div className="App">
      <AppHeader
        openInput={() => {
          setInputShow(flag => !flag);
        }}
      />
      <AddInput isInputShow={isInputShow} addItem={addItem} />
    </div>
  );
}

export default App;
