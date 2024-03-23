import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import store from './Store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
  </Provider>,
);

reportWebVitals();
