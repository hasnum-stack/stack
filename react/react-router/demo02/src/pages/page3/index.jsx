import React from 'react';
import { Link, Outlet, useParams, Routes, Route, useNavigate, useLocation, useRoutes } from 'react-router-dom';
const Sum = React.lazy(() => import('./components/sum/index'));
const Task = React.lazy(() => import('./components/task/index'));
function Page3() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      page3 todo
      <button
        onClick={() => {
          console.log(location);
          return;
          navigate('sum');
        }}
      >
        切换route
      </button>
      <Routes>
        <Route index path="sum" element={<Sum />} />
        <Route path="task" element={<Task />} />
      </Routes>
    </>
  );
}
export default Page3;
