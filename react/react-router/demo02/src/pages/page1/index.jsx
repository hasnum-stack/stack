import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="App">
      <button
        onClick={() => {
          navigate('/page2/123');
        }}
      >
        goto page2
      </button>
      <div>hasnum react-router-dom v6 test</div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default Page1;
