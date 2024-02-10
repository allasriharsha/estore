import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ActionAreaCard from './ActionAreaCard';
import Navigation from './Navigation';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appbar = ReactDOM.createRoot(document.getElementById('navigation'));
root.render(
  <React.StrictMode>

    <App />
      <ActionAreaCard/>
  </React.StrictMode>
);

appbar.render(
  <React.StrictMode>
  <Navigation />
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
