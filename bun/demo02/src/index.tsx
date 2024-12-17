import * as ReactDOM from 'react-dom/client';
import React from 'react'
const Component = React.lazy(() => import('./Components/Component'));
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<Component message="Sup!" />)
