import React from 'react'
import { Link } from 'react-router-dom'
import './css/dashboard.css'

const Dashboard = () => {
    return (
        <div className='container-dash'>
            <ul className='sidebar'>
                <li><Link to='/#'>Teste1</Link> </li>
                <li>Teste2</li>
                <li>Teste1</li>
                <li>Teste2</li>
            </ul>
        </div>
    )
}

export default Dashboard
