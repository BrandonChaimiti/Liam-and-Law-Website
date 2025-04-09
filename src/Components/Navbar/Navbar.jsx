import React from 'react'; // Import React library to create components
import { Link } from 'react-router-dom'; // Import Link component for navigation
import './navbar.css'; // Import the CSS file for styling the Navbar component

// Define the Navbar functional component
function Navbar() {
  return (
    <div>
        {/* Header section containing the logo and navigation links */}
        <header className="header">
            {/* Logo area */}
            <a className="logo">LIAM AND LANCE</a>
            
            {/* Navigation menu */}
            <nav className="nav">
                {/* Navigation links using React Router's Link component for client-side routing */}
                <Link to='/'>Home</Link> {/* Link to the Home page */}
                <Link to='/music'>Music</Link> {/* Link to the Music page */}
                <Link to='/videos'>Videos</Link> {/* Link to the Videos page */}
                <Link to='/about'>About</Link> {/* Link to the About Us page */}
            </nav>
        </header>
    </div>
  );
}

export default Navbar; // Export the Navbar component so it can be used in other parts of the application