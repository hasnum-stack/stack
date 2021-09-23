import { useEffect, useState } from 'react';

function TestA() {
  const [list, setList] = useState([
    {
      name: '张三',
      id: 0,
    },
  ]);
  // const [obj,setObj] = useState()
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    localStorage.list = JSON.stringify(list);
  }, [list]);
  return (
    <>
      <ul>
        {list.map(item => (
          <li
            key={item.id}
            onClick={() => {
              setList(list => list.filter(user => user.id !== item.id));
            }}>
            {item.name}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={event => {
          setInputValue(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const userInfo = {
            name: inputValue,
            id: new Date().getTime(),
          };
          setList(list => [...list, userInfo]);
        }}>
        点击新增
      </button>
    </>
  );
}

export default TestA;
