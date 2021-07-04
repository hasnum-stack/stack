import React from 'react';
import './index.scss';

const noop = () => {};
function AppHeader({ openInput = noop }) {
  console.log('AppHeader');
  return (
    <div className="header">
      <h1>待办事项</h1>
      <span className="icon" onClick={openInput}>
        &#43;
      </span>
    </div>
  );
}
export default AppHeader;
