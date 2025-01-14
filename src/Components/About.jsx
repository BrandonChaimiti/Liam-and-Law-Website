import React from 'react'
import Navbar from './Navbar/Navbar'
import Picture_Card from './About_Card/Picture_Card'
import Socials from './Socials/Socials'; // Component for social media symbols

function About() {
  return (
    <>
      <Navbar />
      <Picture_Card />
      <Socials />
      <div className='footer'>
        <footer>Triple L Entertainment LLC © 2024</footer>
      </div>
    </>
  )
}

export default About