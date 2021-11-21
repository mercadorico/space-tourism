import React from 'react';
import './navbar.css';
import logo from '../../assets/shared/logo.svg'

function Navbar() {
    return (
        <div className="navbar navbar--flex-container">
            <img src={logo} alt='logo' />
            <hr className='navbar__hr'/>
            <div className='nav navbar__nav--blur'>
                <div className='nav__links nav__links--flex'>
                    <a href='/'> <strong>00</strong> HOME</a>
                    <a href='/destination'> <strong>01</strong> DESTINATION</a>
                    <a href='/crew'> <strong>02</strong> CREW</a>
                    <a href='/technology'> <strong>03</strong> TECHNOLOGY</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
