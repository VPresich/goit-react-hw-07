import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './jsx/components/App.jsx';
import { Provider } from 'react-redux';
import store from './jsx/redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
