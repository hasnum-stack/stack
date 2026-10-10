import React, { useEffect, useLayoutEffect } from 'react';
import { prepare, layout } from '@chenglou/pretext';
function TestPretext() {
  const [width, setWidth] = React.useState(0);
  useLayoutEffect(() => {
    const el = document.querySelector('#container');
    console.log(el, 'elelelele');
    const font = window.getComputedStyle(el).font;
    console.log(font, 'fontfont');
    const prepared = prepare('编辑删除', font);
    console.log(prepared, 'preparedprepared');

    const width = prepared.widths.reduce((sum, w) => sum + w, 0);
    console.log(width, 'widthwidth');
    setWidth(width);
  }, []);

  // const { height, lineCount } = layout(ctx, textWidth, 20); // pure arithmetics. No DOM layout & reflow!
  // console.log('height:', height, 'lineCount:', lineCount);
  return (
    <>
      <div id="container" style={{ width: width }}>
        编辑删除
      </div>
    </>
  );
}
export default TestPretext;
