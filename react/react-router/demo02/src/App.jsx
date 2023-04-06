import React, { Suspense, useState } from 'react';
import Page1 from './pages/page1/index';
const Page2 = React.lazy(() => import('./pages/page2/index'));
const Page3 = React.lazy(() => import('./pages/page3/index'));
const Page4 = React.lazy(() => import('./pages/page4/index'));

const loading = <div>loading...</div>;
import { HashRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Page1 />,
  },
  {
    path: '/page2/:id?',
    element: <Page2 />,
  },
  {
    path: '/page3/*',
    element: <Page3 />,
  },
  {
    path: '/page4/*',
    element: <Page4 />,
  },
]);
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={loading}>
        <RouterProvider router={router} />
        {/* <HashRouter>
        <Page1 />;
      </HashRouter> */}
      </Suspense>
    </>
  );
}

export default App;
