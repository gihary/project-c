import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // <-- usa App.jsx, NON App.js
import './index.css'; // questo puoi tenerlo se vuoi uno stile base

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

