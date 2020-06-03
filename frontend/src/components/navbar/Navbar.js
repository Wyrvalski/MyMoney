import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom'

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
        <div onClick={ativarMenu} className='menu-abrir'>
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
            <div onClick={ativarMenu} className='menu-fechar'>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul className='menu-principal'>
              <li className='menu-item'>
                <Link to='/login'>Login</Link>
              </li>
              <li className='menu-item'>
                <Link to='/resgister'>Registrar</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
