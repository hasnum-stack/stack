import React from 'react';
import { Link, Outlet, useParams, Routes, useLocation } from 'react-router-dom';

function Page2() {
  const location = useLocation();
  const { id } = useParams();
  return (
    <>
      <button
        onClick={() => {
          console.log(location);
        }}
      >
        location
      </button>
      <div>Page 2 with id: {id}</div>
      <Link to="/page3">去page3</Link>
    </>
  );
}
export default Page2;
