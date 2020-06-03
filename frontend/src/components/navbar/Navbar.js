import React, { Fragment, useState } from 'react';
import './css/navbar.css';

const Navbar = () => {
  const [formState, setState] = useState({
    menuAtivo: false,
  });

  const { menuAtivo } = formState;

  const ativarMenu = () => setState({ menuAtivo: menuAtivo ? false : true });

  return (
    <Fragment>
      <div className={`header-container ${menuAtivo ? 'menu-ativo' : ''}`}>
        <div onClick={ativarMenu} class='menu-abrir'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className='logo-container'>
          <h1>
            My Money
          </h1>
        </div>
        <nav>
          <div className='navbar'>
            <div onClick={ativarMenu} class='menu-fechar'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className='menu-principal'>
              <li className='menu-item'>
                <a>Login</a>
              </li>
              <li className='menu-item'>
                <a>Registrar</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
