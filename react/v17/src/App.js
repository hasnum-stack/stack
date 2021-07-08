import React, { useState, useEffect } from 'react';
import ContentTest from './hooks/content';
import TestMemo from './hooks/TestMemo';

const App = () => {
  let [book, setBook] = useState(0);
  let [pen, setPen] = useState(0);

  useEffect(() => {
    console.log(213);
  }, [book]);

  useEffect(() => {
    console.log(456);
  }, [pen]);

  const handleClickBook = () => {
    setBook(book => {
      return book + 1;
    });
  };

  const handleClickPen = () => {
    setPen(pen => {
      return pen + 1;
    });
  };

  return (
    <>
      <div>book = {book}</div>
      <div>pen = {pen}</div>
      <button onClick={handleClickBook}>click Book</button>
      <button onClick={handleClickPen}>click Pen</button>

      <ContentTest> </ContentTest>

      <hr />
      <TestMemo></TestMemo>
    </>
  );
};

export default App;
