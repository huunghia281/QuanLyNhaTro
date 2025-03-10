import React from 'react';
import ReactDOM from 'react-dom/client';
import "./reset.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter,
} from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>

  // </React.StrictMode>
);


