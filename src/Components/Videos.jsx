import React from 'react';
import Navbar from './Navbar/Navbar'; // Navigation bar component
import Youtube_Embed from './Vid_Cards/Youtube_Embed'; // Component for embedding YouTube videos
import Socials from './Socials/Socials'; // Component for social media symbols

function Videos() {
  return (
    <>
      <Navbar /> {/* Renders the navigation bar */}
      {/* Embeds a YouTube video */}
      <Youtube_Embed embedID='EgoMftgxm3s' />
      <Youtube_Embed embedID='ITPLVXWSL48' />
      <Youtube_Embed embedID='NxELnC36A6w' />
      <Socials />
      <div className='footer'>
        <footer>Triple L Entertainment LLC © 2024</footer>
      </div>
    </>
  );
}

export default Videos;