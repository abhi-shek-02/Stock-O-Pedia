import React from 'react'
import { NavLink } from 'react-router-dom'
// import { logo } from '../Img/cryptocurrency.png'

import '../Component/NavBar.css'
const Navbar = () => {
    return (
        <nav className="nav-main">
            <div className="links-container">
                <NavLink to='/' className="same1">Home</NavLink>
                <NavLink to='/nifty50' className="same1">NIFTY 50</NavLink>
                <NavLink to='/niftynext50' className="same1">NIFTY NEXT 50</NavLink>
                <NavLink to='/nifty500' className="same1">NIFTY 500</NavLink>
                <NavLink to='/niftymidcap50' className="same1">NIFTY MIDCAP 50</NavLink>
                <NavLink to='/niftymidcap100' className="same1">NIFTY MIDCAP 100</NavLink>
                <NavLink to='/niftymidcap150' className="same1">NIFTY MIDCAP 150</NavLink>
                <NavLink to='/niftysmallcap50' className="same1">NIFTY SMALLCAP 50</NavLink>
                <NavLink to='/niftysmallcap100' className="same1">NIFTY SMALLCAP 100</NavLink>
                <NavLink to='/niftysmallcap250' className="same1">NIFTY SMALLCAP 250</NavLink>
                <NavLink to='/niftybank' className="same1">NIFTY BANK</NavLink>
                <NavLink to='/niftyit' className="same1">NIFTY IT</NavLink>
                <NavLink to='/niftyauto' className="same1">NIFTY AUTO</NavLink>
                <NavLink to='/niftyfmcg' className="same1">NIFTY FMCG</NavLink>
                <NavLink to='/niftymetal' className="same1">NIFTY METAL</NavLink>
                <NavLink to='/niftyinfra' className="same1">NIFTY INFRA</NavLink>
                <NavLink to='/niftymedia' className="same1">NIFTY MEDIA</NavLink>
                <NavLink to='/niftypharma' className="same1">NIFTY PHARMA</NavLink>
            </div>
        </nav>
    )
}

export default Navbar




































