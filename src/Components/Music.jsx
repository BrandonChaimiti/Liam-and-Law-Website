import React from 'react';
import Navbar from './Navbar/Navbar'; // Navigation bar component
import Socials from './Socials/Socials'; // Social media links component
import Music_Cards from './M_Cards/Music_Cards'; // Music cards display component

function Music() {
  return (
    <>
      <Navbar /> {/* Renders the navigation bar */}
      <Music_Cards /> {/* Displays music-related cards */}
      <Socials /> {/* Renders social media links */}
      <div className='footer'>
        <footer>Triple L Entertainment LLC © 2024</footer> {/* Footer content */}
      </div>
    </>
  );
}

export default Music;