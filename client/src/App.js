import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from './context/UserContext';
import AdminContext from './context/AdminContext';
import Navie from './components/layout/Navie';
import Landing from './components/layout/Landing';
import Register from './components/users/Register';
import Login from './components/users/Login';
import Logout from './components/users/Logout';
import OrderForm from './components/order/OrderForm';
import Testimonials from './components/Testimonials';
import Administrator from './components/admin/Administrator';


const App = () => {

  //context API
  const [token, setToken] = useState('');
  const [admin, setAdmin] = useState(undefined);

  //tabs
  const [showHiddenTabs, setShowHiddenTabs] = useState(false);
  const [hideRegisterLogin, setHideRegisterLogin] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const webToken = localStorage.getItem('x-auth-token');
    if (webToken) {
      setShowHiddenTabs(true);
      setHideRegisterLogin(false);
      setToken(webToken);
    }

    if (admin) {
      setShowAdmin(true)
    }
  }, [])

  return (

    <Router>
      <AdminContext.Provider value={{ admin, setAdmin }}>
        <UserContext.Provider value={{ token, setToken }}>
          <Fragment>
            <Navie showHiddenTabs={showHiddenTabs} hideRegisterLogin={hideRegisterLogin} admin={admin} />
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
                  <Logout {...props} setShowHiddenTabs={setShowHiddenTabs} setHideRegisterLogin={setHideRegisterLogin} setShowAdmin={setShowAdmin} />
                )}
              />
              <Route exact path='/orderform' component={OrderForm} />
              <Route exact path='/testimonials' component={Testimonials} />
              {admin &&
                <Route exact path='/admin' component={Administrator} />
              }
            </Switch>
          </Fragment>
        </UserContext.Provider>
      </AdminContext.Provider>
    </Router>

  )
}

export default App