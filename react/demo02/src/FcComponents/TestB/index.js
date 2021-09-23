import React, { useEffect, useState } from 'react';

function TestB(props) {
  console.log('TestB');
  const [testData, setTestData] = useState(0);
  useEffect(() => {
    console.log(props.ids);
    setTimeout(() => {
      setTestData(data => data + 1);
    }, 500);
  }, [props.ids]);
  return <div>123{testData}</div>;
}
export default TestB;
