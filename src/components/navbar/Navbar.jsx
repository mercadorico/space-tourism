import React, {useState} from 'react';
import { Link } from "react-router-dom";

import './navbar.css';
import logo from '../../assets/shared/logo.svg'
import menu from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';

function Menu() {
    return (
        <>
            <Link to="/">
                <a href='/'> <strong>00</strong> HOME</a>
            </Link>
            <Link to="/destination">
                <a href='/destination'> <strong>01</strong> DESTINATION</a>
            </Link>
            <Link to="/crew">
                <a href='/crew'> <strong>02</strong> CREW</a>
            </Link>
            <Link to="/technology">
                <a href='/technology'> <strong>03</strong> TECHNOLOGY</a>
            </Link>            
        </>
    );
}

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false); 

    return (
        <div className="navbar navbar--flex-container">
            {/* image container */}
            <div className='navbar__img-container--flex-item'>
                <img src={logo} alt='logo' />
            </div>

            {/* navbar menu for mobile */}
            <div className={`navbar__menu navbar__menu--display ${toggleMenu && 'navbar__menu--blur'} navbar__menu--flex-container`}>
                <div className='navbar__menu--flex-item'>
                    {
                        toggleMenu ? 
                            <img src={close} onClick = {() => {setToggleMenu(false)}} className='menu-logo' alt='navbar__menu'/> 
                            : <img src={menu} onClick = {() => {setToggleMenu(true)}} className='menu-logo' alt='navbar__menu'/>
                    }
                </div>
                {
                    toggleMenu && (
                        <div className='menu__links--flex-container'>
                            <Menu />
                        </div>              
                    )
                }
            </div>
            
            {/* navbar menu for desktop, laptop, and tablet */}
            <div className="navbar2--hide-items">
                <hr className='navbar2__hr--flex-item'/>
                <div className='nav navbar__nav--blur navbar2__nav--flex-item'>
                    <div className='nav__links nav__links--flex'>
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
