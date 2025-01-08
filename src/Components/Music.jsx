import React from 'react'
import Navbar from './Navbar/Navbar'
import Socials from './Socials/Socials'
import Music_Cards from './M_Cards/Music_Cards'

function Music() {
  return (
    <>
      <Navbar />
      <Music_Cards />
      <Socials />
      <div className='footer'>
        <footer>Triple L Entertainment LLC © 2024</footer>
      </div>
    </>

  )
}

export default Music