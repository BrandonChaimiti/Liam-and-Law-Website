import React from 'react';
import Navbar from './Navbar/Navbar'; // Navigation bar component
import Youtube_Embed from './Vid_Cards/Youtube_Embed'; // Component for embedding YouTube videos

function Videos() {
  return (
    <>
      <Navbar /> {/* Renders the navigation bar */}
      {/* Embeds a YouTube video */}
      <Youtube_Embed embedID='EgoMftgxm3s' />
      <Youtube_Embed embedID='ITPLVXWSL48' />
      <Youtube_Embed embedID='NxELnC36A6w' />
    </>
  );
}

export default Videos;