import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.css'

export default function Menu() {
  return (
    <div className='menu-parent'>
        <h2 className='logo-text'>
        <NavLink className="logo-text-link" to='/'>HRnet</NavLink>
        </h2>
        <ul className='menu'>
            <li className='menu-item'>
                <NavLink  className="menu-link" to="/">Create Employee</NavLink>
            </li>
            <li className='menu-item'>
                <NavLink  className="menu-link" to="/employee-list">Employee List</NavLink>
            </li>

        </ul>      
    </div>
  )
}
