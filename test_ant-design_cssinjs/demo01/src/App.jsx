import { createTheme, useCacheToken, useStyleRegister } from '@ant-design/cssinjs';

function App() {
  const a = useStyleRegister(
    {
      // theme: 'light',
      token: 'color',
      path: ['primary'],
    },
    () => [
      {
        color: 'red',
      },
    ]
  );
  console.log('🚀 ~ App ~ a :', a);

  return <div>2134</div>;
}

export default App;
