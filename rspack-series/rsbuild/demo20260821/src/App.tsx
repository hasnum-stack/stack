import { lazy, Suspense, useState } from 'react';
import './App.css';

const AsyncA = lazy(() => import('./AsyncA'));
const AsyncB = lazy(() => import('./AsyncB'));

const App = () => {
  const [view, setView] = useState<'a' | 'b' | null>(null);
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <button onClick={() => setView('a')}>Load A</button>
      <button onClick={() => setView('b')}>Load B</button>
      <Suspense fallback={<div>loading…</div>}>
        {view === 'a' && <AsyncA />}
        {view === 'b' && <AsyncB />}
      </Suspense>
    </div>
  );
};

export default App;
