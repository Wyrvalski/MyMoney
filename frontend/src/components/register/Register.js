import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

import './css/register.css';

const Register = ({ register, setAlert, isAuthenticated }) => {
  const [formData, setData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  console.log(isAuthenticated);
  

  return (
    <div className='card-register'>
      <form action='/#' className='form' onSubmit={(e) => onSubmit(e)}>
        <h1 className='welcome-title'>My Money</h1>
        <div className='form-group'>
          <label>Nome</label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            onChange={(e) => onChange(e)}
          />
        </div>
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
            id='password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <label>Repetir Senha</label>
          <input
            type='password'
            className='form-control'
            id='password2'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='submit-form'>
          <span className='register-link'>
            <Link to='/login'>Login</Link>
          </span>
          <input type='submit' className='button-submit' value='Registrar-se' />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps, { setAlert, register })(Register);
