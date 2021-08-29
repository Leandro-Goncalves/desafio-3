import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/User';
import { createServer } from 'miragejs';

createServer({
  routes(){
    this.namespace = 'api';

    this.post('/login', (schema, request) => {
      const {email, password} = JSON.parse(request.requestBody)
      if(email !== "teste@hotmail.com" || password !== "123"){
        return {
          error:true,
          message: "invalid email and/or password!"
        }
      }
      const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      return {
        error:false,
        jwt
      }
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
      <ToastContainer/>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
