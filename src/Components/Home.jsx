import React from 'react'
import Navbar from './Navbar/Navbar'
import Gallery from './Gallery/Gallery'
import Socials from './Socials/Socials'
import './styles/home.css'

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
              <div className="video-container">
                  <video
                      className="home-music-video"
                      autoPlay
                      loop
                      muted // Ensures the video plays without sound
                      playsInline // Ensures the video plays inline on mobile devices
                      preload="auto" // Preloads the video to improve quality and reduce loading time
                  >
                      <source src="/LiamLawFlickVid.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
              </div>
      </div>
      <Gallery />
      <Socials />
      <div className='footer'>
        <footer>Triple L Entertainment LLC © 2024</footer>
      </div>
    </>
  )
}

export default Home