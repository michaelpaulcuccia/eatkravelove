import React, { useState, useEffect } from 'react';
import UserContext from './context/UserContext';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';

const App = () => {

  const [token, setToken] = useState('');

  useEffect(() => {
    const setTokenLocalStorage = async () => {
      //set token in local storage - either a token or 'undefined'
      localStorage.setItem("x-auth-token", token);
    }
    setTokenLocalStorage()
  }, [token]);

  return (

    <div>
      <UserContext.Provider value={{ token, setToken }}>
        REGISTER:
      <Register />
        <br></br>
      LOGIN:
      <Login />
        <br></br>
      LOGOUT
      <Logout />
      </UserContext.Provider>
    </div>

  )
}

export default App

