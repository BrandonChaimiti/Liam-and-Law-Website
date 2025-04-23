import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  // State to toggle menu visibility on mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <a className="logo">LIAM AND LANCE</a>

      {/* Hamburger button (visible only on mobile) */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {/* Navigation menu */}
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/music" onClick={() => setMenuOpen(false)}>Music</Link>
        <Link to="/videos" onClick={() => setMenuOpen(false)}>Videos</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </nav>
    </header>
  );
}

export default Navbar;
