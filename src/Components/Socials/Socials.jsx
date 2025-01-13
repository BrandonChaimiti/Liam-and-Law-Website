import React from 'react'; // Import React library to create components
import { FaInstagram, FaYoutube, FaTiktok, FaSoundcloud } from "react-icons/fa"; // Import social media icons from react-icons library
import './socials.css'; // Import the CSS file for styling the Socials component

// Define the Socials functional component
function Socials() {
  return (
    <div className='icon-container'> {/* Container for the social media icons */}
        {/* Instagram icon with a link to the Instagram page */}
        <a href='https://www.instagram.com/liamlawandlancemagic/' target="_blank" rel="noopener noreferrer">
          <FaInstagram className='react-icons' /> {/* Apply CSS styling to the icon */}
        </a>

        {/* TikTok icon with a link to the TikTok page */}
        <a href='https://www.tiktok.com/@mrlancemagic' target="_blank" rel="noopener noreferrer">
          <FaTiktok className='react-icons' /> {/* Apply CSS styling to the icon */}
        </a>

        {/* SoundCloud icon with a link to the SoundCloud page */}
        <a href='https://soundcloud.com/liamandlance' target="_blank" rel="noopener noreferrer">
          <FaSoundcloud className='react-icons' /> {/* Apply CSS styling to the icon */}
        </a>
        
        {/* YouTube icon with a link to the YouTube channel */}
        <a href='https://www.youtube.com/@liamlawandlancemagic' target="_blank" rel="noopener noreferrer">
          <FaYoutube className='react-icons' /> {/* Apply CSS styling to the icon */}
        </a>
    </div>
  );
}

export default Socials;