import React from 'react';
import PropTypes from 'prop-types'; // For prop validation
import './vids.css'; // Import responsive styling

// Component to embed a YouTube video using an ID
const Youtube_Embed = ({ embedID }) => {
  return (
    <div className='music-video'>
      <iframe
        src={`https://www.youtube.com/embed/${embedID}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube video"
      />
    </div>
  );
};

// Prop validation
Youtube_Embed.propTypes = {
  embedID: PropTypes.string.isRequired
};

export default Youtube_Embed;
