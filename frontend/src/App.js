import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/register/Register';
import Footer from './components/footer/Footer';
import store from './store';
import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Fragment>
            <div className='container'>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
            </div>
          </Fragment>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
