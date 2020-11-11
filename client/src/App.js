import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from './context/UserContext';
import Navie from './components/layout/Navie';
import Landing from './components/layout/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';


const App = () => {

  const [token, setToken] = useState('');
  const [showLogOut, setShowLogOut] = useState(false);

  const setTokenLocalStorage = async () => {

    localStorage.setItem("x-auth-token", token);

    if (token !== '') {
      setShowLogOut(!showLogOut)
    } else {
      setShowLogOut(showLogOut)
    }

  };

  useEffect(() => {
    setTokenLocalStorage()
  }, [token]);

  return (

    <Router>
      <UserContext.Provider value={{ token, setToken }}>
        <Fragment>
          <Navie showLogOut={showLogOut} />
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logout' component={Logout} />
          </Switch>
        </Fragment>
      </UserContext.Provider>
    </Router>

  )
}

export default App

