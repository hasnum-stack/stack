import { useParams } from 'umi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Test() {
  let navigate = useNavigate();
  let params = useParams();
  const [count, setCount] = useState(0);
  console.log('🚀 ~ Test ~ params', params);
  console.log('🚀 ~ Test ~ navigate', navigate);
  return (
    <div>
      <h1
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        test123
      </h1>
      {count}
    </div>
  );
}
