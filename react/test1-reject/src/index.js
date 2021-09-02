import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// (
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// ),
// const App = props => {
//     console.log(props);
//     return <div>789789789</div>;
// };
// class App extends React.Component {
//     render() {
//         return (
//             <>
//                 <div tet={1}>9999999</div>
//             </>
//         );
//     }
// }
// React.createElement('div', {}, 123)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
