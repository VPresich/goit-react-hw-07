import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './jsx/components/App.jsx';
// import App from './jsx/redux/App.jsx'; //for test
import './css/index.css';
import { Provider } from 'react-redux';
import store from './jsx/redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
