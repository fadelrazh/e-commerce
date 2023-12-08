import React from 'react';
import ReactDOM from 'react-dom'; // Perhatikan penggunaan ReactDOM di sini
import './index.css';
import App from './App';
import * as serviceWorker from './services/utils/service-worker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
}

reportWebVitals();
