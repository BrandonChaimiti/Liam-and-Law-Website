import React from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  return (
    <div>
        <header className="header">
            <a className="logo">LIAM AND LANCE</a>
            
            <nav className="nav">
                <Link to='/'>Home</Link>
                <Link to='/music'>Music</Link>
                <Link to='/videos'>Videos</Link>
                <Link to='/about'>About us</Link>
            </nav>
        </header>
    </div>
  )
}

export default Navbar