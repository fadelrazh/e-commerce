import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './utils/service-worker';  // Sesuaikan path jika diperlukan
import reportWebVitals from './utils/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Register service worker only in production mode
if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
}

reportWebVitals();
