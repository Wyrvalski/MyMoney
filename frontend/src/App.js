import React, { Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <Login />
        {/* <Register /> */}
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
