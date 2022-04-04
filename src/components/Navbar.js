import React from 'react'
import './Navbar.css'
import userIcon from '../images/user-solid.svg'


// Barre de navigation

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <ul className='listNav'>
                <li className='logo'>Logo</li>
                <div className="container">
                    <li>CONNEXION</li>
                    <li><img src={userIcon} style={{ width : '20px'}} alt="" /></li>
                    <li>INSCRIPTION</li>
                </div>
            </ul>
        </nav>
    </div>
  )
}
