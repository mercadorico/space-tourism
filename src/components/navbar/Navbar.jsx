import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

import './navbar.css';
import logo from '../../assets/shared/logo.svg'
import menu from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';

function Menu(props) {

    const handleNavbarClick = (navClass) => {
        // set nav state by getting the class of clicked nav link
        props.resetState();
        props.setNavState(navClass);
    }


    return (
        <>
            <Link className='home-bar' to="/" onClick={(e) => {handleNavbarClick(e.target.className)}} > 
                <strong className='navbar__num'>00</strong> HOME 
            </Link>
            <Link className='destination-bar' to="/destination" onClick={(e) => {handleNavbarClick(e.target.className)}} >
                <strong className='navbar__num'>01</strong> DESTINATION
            </Link>
            <Link className='crew-bar' to="/crew" onClick={(e) => {handleNavbarClick(e.target.className)}} >
                <strong className='navbar__num'>02</strong> CREW
            </Link>
            <Link className='technology-bar' to="/technology" onClick={(e) => {handleNavbarClick(e.target.className)}} >
                <strong className='navbar__num'>03</strong> TECHNOLOGY
            </Link>            
        </>
    );
}

function Navbar(props) {
    const [toggleMenu, setToggleMenu] = useState(false); 
    const [navState, setNavState] = useState('home-bar');

    useEffect(() => {

        // remove nav_underline class on navbar links 
        document.body.querySelector('.home-bar').classList.remove('nav_underline');
        document.body.querySelector('.destination-bar').classList.remove('nav_underline');
        document.body.querySelector('.crew-bar').classList.remove('nav_underline');
        document.body.querySelector('.technology-bar').classList.remove('nav_underline');
        
        document.body.querySelector(`.${navState}`).classList.add('nav_underline');
    });

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
                            <Menu resetState={props.resetState} setNavState={setNavState} />
                        </div>              
                    )
                }
            </div>
            
            {/* navbar menu for desktop, laptop, and tablet */}
            <div className="navbar2--hide-items">
                <hr className='navbar2__hr--flex-item navbar2__hr'/>
                <div className='nav navbar__nav--blur navbar2__nav--flex-item'>
                    <div className='nav__links nav__links--flex'>
                        <Menu resetState={props.resetState} setNavState={setNavState} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
