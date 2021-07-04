import React, { useRef } from 'react';
import { noop } from '../../libs/utils';
import './index.scss';
function AddInput({ isInputShow, addItem = noop }) {
  console.log('AddInput');
  const inputRef = useRef();
  const submitValue = () => {
    const value = inputRef.current.value.trim();
    if (value.length === 0) {
      return;
    }
    addItem(value);
    inputRef.current.value = '';
  };
  return (
    <>
      {isInputShow && (
        <div className="input-wrapper">
          <input type="text" ref={inputRef} placeholder="请输入代办事件" />
          <button className="btn btn-primary" onClick={submitValue}>
            增加
          </button>
        </div>
      )}
    </>
  );
}
export default AddInput;
