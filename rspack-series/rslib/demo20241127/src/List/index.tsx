import React from 'react';
interface ListProps {
  list: string[];
}
function List({ list }: ListProps) {
  return (
    <>
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
}
export { List };
