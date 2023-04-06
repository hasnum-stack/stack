import React, { lazy } from 'react';
import { useRoutes, useNavigate, useSearchParams } from 'react-router-dom';

const Route1 = lazy(() => import('./routes/route1'));
const Route2 = lazy(() => import('./routes/route2'));

function Page4() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log('🚀 ~ Page4 ~ searchParams:', searchParams);
  console.log('🚀 ~ Page4 ~ searchParams:', Object.values(searchParams));
  console.log('🚀 ~ Page4 ~ searchParams:', searchParams.get('a'));
  const a = searchParams.set('b', 666);
  console.log('🚀 ~ Page4 ~ a :', a);

  const navigate = useNavigate();
  const routes = useRoutes([
    {
      path: '',
      element: <Route1 />,
    },
    {
      path: 'route2',
      element: <Route2 />,
    },
  ]);

  return (
    <div>
      <h1>Page4</h1>
      <button
        onClick={() => {
          navigate('route2');
        }}
      >
        goto route2
      </button>
      <button
        onClick={() => {
          navigate('');
        }}
      >
        goto route1
      </button>
      <button
        onClick={() => {
          setSearchParams({ a: 1, b: 2 });
          // navigate(, { replace: true });
        }}
      >
        about searchParams
      </button>
      {routes}
    </div>
  );
}
export default Page4;
