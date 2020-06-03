import React from 'react';
import './css/register.css'

const Register = () => {
  return (
    <div className='card-register'>
      <form className='form'>
        <h1 className='welcome-title'>My Money</h1>
        <div className='form-group'>
          <label>Nome</label>
          <input type='text' className='form-control' id='name' name='name' />
        </div>
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
            id='password1'
            name='password1'
          />
        </div>
        <div className='form-group'>
          <label>Repetir Senha</label>
          <input
            type='password'
            className='form-control'
            id='password2'
            name='password2'
          />
        </div>
        <div className='submit-form'>
          <span className='register-link'>
            <a href='#'>Registar-se</a>
          </span>
          <button type='submit' className='button-submit'>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
