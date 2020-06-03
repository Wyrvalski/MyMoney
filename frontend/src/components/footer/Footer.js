import React from 'react'
import { Link } from 'react-router-dom'
import './css/footer.css'
const Footer = () => {
    return (
        <footer className='footer-container'>
            <ul className='footer-itens'>
              <li className='footer-item'>
                <Link to='/login'>Login</Link>
              </li>
              <li className='footer-item'>
                <Link to='/register'>Registrar</Link>
              </li>
            </ul>
        </footer>
    )
}

export default Footer
