import { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
    setInterval(() => {
      setCount(count + 1);
      console.log('🚀 ~ Example ~ count', count);
    }, 1000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
}
export default Example;
