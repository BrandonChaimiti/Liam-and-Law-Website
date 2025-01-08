import React from 'react'
import { FaInstagram, FaYoutube, FaTiktok, FaSoundcloud  } from "react-icons/fa"
import './socials.css'

function Socials() {
  return (
    <div className='icon-container'>
        <a href='https://www.instagram.com/liamlawandlancemagic/'>
          <FaInstagram className='react-icons'/>
        </a>

        <a href='https://www.tiktok.com/@mrlancemagic'>
          <FaTiktok className='react-icons'/>
        </a>

        <a href='https://soundcloud.com/liamandlance'>
          <FaSoundcloud className='react-icons'/>
        </a>
        
        <a href='https://www.youtube.com/@liamlawandlancemagic'>
          <FaYoutube className='react-icons'/>
        </a>
    </div>
  )
}

export default Socials