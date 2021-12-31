import React, {useState} from 'react';
import { Link } from "react-router-dom";

import './navbar.css';
import logo from '../../assets/shared/logo.svg'
import menu from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';

function Menu(props) {
    return (
        <>
            <Link to="/" onClick={() => {props.resetState()}} > 
                <strong className='navbar__num'>00</strong> HOME 
                <hr className='navbar-home__hr--hide navbar-home__hr '></hr>
            </Link>
            <Link to="/destination" onClick={() => {props.resetState()}} >
                <strong className='navbar__num'>01</strong> DESTINATION
                <hr className='navbar-home__hr--hide navbar-home__hr '></hr>
            </Link>
            <Link to="/crew" onClick={() => {props.resetState()}} >
                <strong className='navbar__num'>02</strong> CREW
                <hr className='navbar-home__hr--hide navbar-home__hr '></hr>
            </Link>
            <Link to="/technology" onClick={() => {props.resetState()}} >
                <strong className='navbar__num'>03</strong> TECHNOLOGY
                <hr className='navbar-home__hr--hide navbar-home__hr '></hr>
            </Link>            
        </>
    );
}

function Navbar(props) {
    const [toggleMenu, setToggleMenu] = useState(false); 

    return (
        <div className="navbar navbar--flex-container">
            {/* image container */}
            <div className='navbar__img-container--flex-item'>
                <img className='navbar__img' src={logo} alt='logo' />
            </div>

            {/* navbar menu for mobile */}
            <div className={`navbar__menu navbar__menu--display ${toggleMenu && 'navbar__menu--blur'} navbar__menu--flex-container`}>
                <div className='navbar__menu--flex-item'>
                    {
                        toggleMenu ? 
                            <img src={close} onClick = {() => {setToggleMenu(false)}} className='menu-logo navbar__img' alt='navbar__menu'/> 
                            : <img src={menu} onClick = {() => {setToggleMenu(true)}} className='menu-logo navbar__img' alt='navbar__menu'/>
                    }
                </div>
                {
                    toggleMenu && (
                        <div className='menu__links--flex-container'>
                            <Menu resetState={props.resetState}/>
                        </div>              
                    )
                }
            </div>
            
            {/* navbar menu for desktop, laptop, and tablet */}
            <div className="navbar2--hide-items">
                <hr className='navbar2__hr--flex-item navbar2__hr'/>
                <div className='nav navbar__nav--blur navbar2__nav--flex-item'>
                    <div className='nav__links nav__links--flex'>
                        <Menu resetState={props.resetState}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
