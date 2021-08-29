import { useEffect, useState } from 'react';
import './App.css';
import { toast } from 'react-toastify';
import {api} from './services/api'
import { Login } from './fakeApi/login';
import Cookies from 'universal-cookie';
import { useUser } from './context/User';

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {
    login,
    userIsLogged
  } = useUser();

  function ResetInputs() {
    setEmail("");
    setPassword("")
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    if(!email.trim() || !password.trim()){
      toast.warning("Empy fields!")
      return
    }
    
    try{
      await login(email, password)
      toast.success("User logged!")
    } catch (err) {
      toast.error(err.message)
    }
    ResetInputs()

  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit} className="Form">
        <h1 className="Title">Login</h1>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          className="Input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
          className="Input"
        />
        <button type="submit" className="Button">Login</button>
      </form>
    </div>
  );
}

export default App;
