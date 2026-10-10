import React, { useState } from 'react';
import { create } from 'zustand';
// 生成复杂对象数据
const users = Array.from({ length: 6000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  age: Math.floor(Math.random() * 60) + 18,
  createdAt: new Date(),
}));
const Item = ({ item, onChange }) => {
  return (
    <input
      value={item.name}
      onChange={(event) => {
        const value = event.target.value;
        onChange(value);
      }}
    />
  );
};
const List1 = () => {
  const [list, setList] = useState(users);

  return (
    <>
      {list.map((item, index) => {
        return (
          <Item
            key={index}
            item={item}
            onChange={(value) => {
              setList((list) => {
                list[index].name = value;
                return [...list];
              });
            }}
          />
        );
      })}
    </>
  );
};

const { maps, ids } = users.reduce(
  (result, current) => {
    const { id } = current;
    const { maps, ids } = result;
    maps[id] = current;
    ids.push(current.id);
    return result;
  },
  { maps: {}, ids: [] },
);
console.log(maps, 'mapsmaps');
console.log(ids, 'idsids');
const useListStore = create((set) => {
  return {
    maps,
    ids,
    setState: (id, value) => {
      maps[id] = value;
      set({
        maps,
      });
    },
  };
});
const Item2 = ({ id, index }) => {
  // console.log(id);
  const item = useListStore((state) => state.maps[id]);
  // console.log(item, 'itemitem');
  // console.log(item, 'itemitemitem');
  const setState = useListStore((state) => state.setState);

  const onChange = (value) => {
    setState(id, { ...item, name: value });
  };
  const onRemove = () => {
    setState(id, null);
  };

  if (!item) return null;
  return (
    <>
      <input
        value={item.name}
        onChange={(event) => {
          const value = event.target.value;
          onChange(value);
        }}
      />
      <button onClick={onRemove}>remove</button>
    </>
  );
};
const List2 = () => {
  const ids = useListStore((state) => state.ids);
  return (
    <>
      {ids.map((id, index) => {
        return <Item2 key={index} index={index} id={id} />;
      })}
    </>
  );
};
const App = () => {
  // console.log(list, 'list');
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      {/* <List1 /> */}
      <List2 />
    </div>
  );
};

export default App;
