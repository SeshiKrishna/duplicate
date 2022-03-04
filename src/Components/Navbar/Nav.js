import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import img from './Images/logo.jpg'
import './Nav.css'

const Nav = () =>{
    const [isMobile, setIsMobile] = useState(false);
    return(
        <nav className='navbar'>
            <Link to='/' exact className='home'>
            <img src={img} alt="Image" className='logo'></img>
            </Link>
            <ul className={isMobile ? "nav-links-mobile"  : "nav-links"}
            onClick = {() => setIsMobile(false)}
            >
                <Link to='/' className='home' >
                    <li>Home</li>
                </Link>
                <Link to='/sales' className='sales' >
                    <li>Sales</li>
                </Link>
                <Link to='/transfer' className='transfer' >
                    <li>Transfer</li>
                </Link>
            </ul>
            <button className='mobile-menu-icon'
            onClick = {() => setIsMobile(!isMobile)}
            >
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
        </nav>
    )
}

export default Nav