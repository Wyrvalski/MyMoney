import React from 'react';
import './css/login.css';

const Login = () => {
  return (
    <div className='card-login'>
      <form>
        <h1 className='welcome-title'>My Money</h1>
        <div className='form-group'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            name='email'
            id='email'
            aria-describedby='emailHelp'
          />
        </div>
        <div className='form-group'>
          <label>Senha</label>
          <input
            type='password'
            className='form-control'
            name='password'
            id='password'
          />
        </div>
        <span className='register-link'>
          <a href='#'>Registar-se</a>
        </span>
        <button type='submit' className='btn btn-my-primary'>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
