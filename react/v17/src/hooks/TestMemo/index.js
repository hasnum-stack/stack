import { useMemo, useState } from 'react';

function TestMemo() {
  const [field1, setField1] = useState(0);
  const [field2, setField2] = useState(1);
  const [field3, setField3] = useState(2);
  const memoField = useMemo(() => {
    console.log('进入useMemo');
    return field1 + 'memo';
  }, [field1]);

  const normalField = () => {
    console.log('进入normalField');
    return field1 + 'memo';
  };
  return (
    <>
      <div>{memoField}</div>
      <div>{normalField()}</div>
      <div>
        <button
          onClick={() => {
            setField1(field => field + 1);
          }}>
          点击增加field1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setField2(field => field + 1);
          }}>
          点击增加field2
        </button>
      </div>
    </>
  );
}
export default TestMemo;
