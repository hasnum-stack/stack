import React, { Component } from 'react';
import styles from './index.less';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { history } from 'umi';
import Test from '../test';

export default function IndexPage() {
  return (
    <div>
      <h1
        className={styles.title}
        onClick={() => {
          history.push('/test-1231');
        }}
      >
        Page index123
      </h1>
      {/* <Test /> */}
      {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
    </Routes>
  </BrowserRouter>, */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/b" element={<Test />}></Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}
