import React from 'react';
import useMergedState from '../hooks/useMergedState';
function List({ value, onChange }) {
  console.log(value, 'valuevalue');
  const [list, setList] = useMergedState([], {
    value,
    onChange,
  });
  return (
    <>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div
        onClick={() => {
          setList([...list, 444]);
        }}
      >
        add
      </div>
    </>
  );
}
export default List;
