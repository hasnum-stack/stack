// function App() {
//   const [num, updateNum] = useState(0);

//   return {
//     onclick() {
//       updateNum(num + 1);
//     },
//   };
// }
// App().onclick();

/**
 * 一定时间执行一次,直到return ftrue
 */
function simplePluler(queryFn, cb) {
  let time = 1000;
  (function start() {
    setTimeout(() => {
      queryFn() ? cb() : ((time *= 1.5), start());
    }, time);
  })();
}

simplePluler(
  function () {
    const random = Math.random();
    console.log('🚀 ~ random', random);
    return random > 0.5 ? true : false;
  },
  function () {
    console.log('cb执行,simplePluper结束');
  }
);
