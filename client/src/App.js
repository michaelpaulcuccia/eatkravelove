import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from './context/UserContext';
import AdminContext from './context/AdminContext';
import Navie from './components/layout/Navie';
import Landing from './components/layout/Landing';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import OrderForm from './components/order/OrderForm';
import Testimonials from './components/Testimonials';
import Admin from './components/admin/Admin';


const App = () => {

  //context API
  const [token, setToken] = useState('');
  const [admin, setAdmin] = useState(undefined);

  //tabs
  const [showTabs, setShowTabs] = useState(false);
  const [hideRegisterLogin, setHideRegisterLogin] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const webToken = localStorage.getItem('x-auth-token');
    if (webToken) {
      setShowTabs(true);
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
            <Navie showTabs={showTabs} hideRegisterLogin={hideRegisterLogin} admin={admin} />
            <Route exact path='/' component={Landing} />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route
                path='/login'
                render={(props) => (
                  <Login {...props} setShowTabs={setShowTabs} setHideRegisterLogin={setHideRegisterLogin} />
                )}
              />
              <Route
                path='/logout'
                render={(props) => (
                  <Logout {...props} setShowTabs={setShowTabs} setHideRegisterLogin={setHideRegisterLogin} setShowAdmin={setShowAdmin} />
                )}
              />
              <Route exact path='/orderform' component={OrderForm} />
              <Route exact path='/testimonials' component={Testimonials} />
              {admin &&
                <Route exact path='/admin' component={Admin} />
              }
            </Switch>
          </Fragment>
        </UserContext.Provider>
      </AdminContext.Provider>
    </Router>

  )
}

export default App