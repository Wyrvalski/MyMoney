import React from 'react';

const Register = () => {
  return (
    <div>
      <div className='card-login'>
        <form>
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
              id='email'
              name='email'
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
          <span className='register-link'>
            <a href='#'>Entrar</a>
          </span>
          <button type='submit' className='btn btn-my-primary'>
            Registar-se
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
