import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from './context/UserContext';
import Navie from './components/layout/Navie';
import Landing from './components/layout/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import OrderForm from './components/order/OrderForm';
import Testimonials from './components/Testimonials';


const App = () => {

  const [token, setToken] = useState('');
  const [showTabs, setShowTabs] = useState(false);

  useEffect(() => {
    const webToken = localStorage.getItem('x-auth-token');
    console.log(webToken)
    if (webToken) {
      setShowTabs(true)
      setToken(webToken)
    }
  }, [])

  return (

    <Router>
      <UserContext.Provider value={{ token, setToken }}>
        <Fragment>
          <Navie showTabs={showTabs} />
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route
              path='/login'
              render={(props) => (
                <Login {...props} setShowTabs={setShowTabs} />
              )}
            />
            <Route
              path='/logout'
              render={(props) => (
                <Logout {...props} setShowTabs={setShowTabs} />
              )}
            />
            <Route exact path='/orderform' component={OrderForm} />
            <Route exact path='/testimonials' component={Testimonials} />
          </Switch>
        </Fragment>
      </UserContext.Provider>
    </Router>

  )
}

export default App