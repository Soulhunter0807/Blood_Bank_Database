import React, { useState} from 'react'

// Router 
import { Link } from 'react-router-dom'

// Icons 
import { FaBars, FaTimes} from 'react-icons/fa' 
import { IconContext } from 'react-icons/lib'

// Logo
import logo from './../Assets/React.png';

// SCSS
import './../SCSS/header.scss';

//Components
import { Button } from './Button';
import { SearchBox } from './SearchBox'

function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const ShowButton = () => {
        if (window.innerWidth <= 968) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    window.addEventListener('resize',ShowButton)

    return (
        <>  
        <IconContext.Provider value = {{color: "#fff"}}>
            <header className = "navbar">
                <div className = "navbar-container container">
                    <Link to = '/' className = "navbar-logo">
                        <img src = {logo} alt = "LOGO" onClick = {closeMobileMenu}></img>
                        <h2 onClick = {closeMobileMenu}> Blood Center </h2>
                    </Link>

                    <div className = "nav-search">
                        <SearchBox hint = "Search" border_color = "Black"></SearchBox>
                    </div>


                    <div className = "menu-icons" onClick = {handleClick} >
                        {click ? <FaTimes/>: <FaBars/>}
                    </div>

                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>

                        <li className = "nav-item">
                            <Link to = '/' className = 'nav-links' onClick = {closeMobileMenu}>Home</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to = '/ContactUs' className = 'nav-links' onClick = {closeMobileMenu}>Contact Us</Link>
                        </li>

                        <li classname = "nav-btn" onClick = {closeMobileMenu}>
                            { button ? (
                                <Link to = '/Login' className = 'btn-link'>
                                    <Button buttonStyle ='btn--outline'>Login</Button>
                                </Link>
                            ) : (
                                <Link to = "/Login" classname = "btn-link">
                                    <Button buttonStyle ='btn--outline' buttonSize = "btn--mobile">Login</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </header>
            </IconContext.Provider>
        </>
    );
}

export default Header;