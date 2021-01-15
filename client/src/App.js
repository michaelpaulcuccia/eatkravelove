import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from './context/UserContext';
import Navie from './components/layout/Navie';
import Landing from './components/layout/Landing';
import Register from './components/users/Register';
import Login from './components/users/Login';
import Logout from './components/users/Logout';
import OrderForm from './components/order/OrderForm';
import About from './components/About';
import Menu from './components/Menu';
import './style/Main.css';

const App = () => {

  //context API
  const [token, setToken] = useState('');

  //tabs
  const [showHiddenTabs, setShowHiddenTabs] = useState(false);
  const [hideRegisterLogin, setHideRegisterLogin] = useState(true);

  useEffect(() => {
    const webToken = localStorage.getItem('x-auth-token');
    if (webToken) {
      setShowHiddenTabs(true);
      setHideRegisterLogin(false);
      setToken(webToken);
    }

  }, [])

  return (

    <Router>
      <UserContext.Provider value={{ token, setToken }}>
        <Fragment>
          <Navie showHiddenTabs={showHiddenTabs} hideRegisterLogin={hideRegisterLogin} />
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route
              path='/login'
              render={(props) => (
                <Login {...props} setShowHiddenTabs={setShowHiddenTabs} setHideRegisterLogin={setHideRegisterLogin} />
              )}
            />
            <Route
              path='/logout'
              render={(props) => (
                <Logout {...props} setShowHiddenTabs={setShowHiddenTabs} setHideRegisterLogin={setHideRegisterLogin} />
              )}
            />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/orderform' component={OrderForm} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Fragment>
      </UserContext.Provider>
    </Router >

  )
}

export default App