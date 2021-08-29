import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/User';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
      <ToastContainer/>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
