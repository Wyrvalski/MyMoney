import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import Input from '../helpers/Input';
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

  return (
    <div className='card-register'>
      <form action='/#' className='form' onSubmit={(e) => onSubmit(e)}>
        <h1 className='welcome-title'>My Money</h1>
        <Input
          typeInput='text'
          labelInput='Nome'
          nameInput='name'
          valueInput={name}
          onChangeInput={(e) => onChange(e)}
        />
        <Input
          typeInput='email'
          labelInput='Email'
          nameInput='email'
          valueInput={email}
          onChangeInput={(e) => onChange(e)}
        />
        <Input
          typeInput='password'
          labelInput='Senha'
          nameInput='password'
          valueInput={password}
          onChangeInput={(e) => onChange(e)}
        />
        <Input
          typeInput='password'
          labelInput='Repetir senha'
          nameInput='password2'
          valueInput={password2}
          onChangeInput={(e) => onChange(e)}
        />
        <div className='submit-form'>
          <span className='register-link'>
            <Link to='/'>Login</Link>
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
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { setAlert, register })(Register);
