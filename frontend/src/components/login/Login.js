import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

import './css/login.css';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='card-login'>
      <form className='form'  onSubmit={(e) => onSubmit(e)}>
        <h1 className='welcome-title'>My Money</h1>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            name='email'
            id='email'
            aria-describedby='emailHelp'
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Senha</label>
          <input
            type='password'
            className='form-control'
            name='password'
            id='password'
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='submit-form'>
          <span className='register-link'>
            <Link to='/register'>Registar-se</Link>
          </span>
          <button type='submit' className='button-submit'>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps,{ login })(Login);
