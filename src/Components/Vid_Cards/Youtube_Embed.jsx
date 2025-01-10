import React from 'react';
import PropTypes from 'prop-types'; // Used for type-checking props
import './vids.css'; // Styles for the video embed component

const Youtube_Embed = ({ embedID }) => {
    return (
        <div className='music-video'> {/* Wrapper for the embedded video */}
            <iframe
                src={`https://www.youtube.com/embed/${embedID}`} // Dynamic YouTube video URL
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube" // Accessible title for the iframe
            />
        </div>
    );
};

// Prop type validation to ensure embedID is a required string
Youtube_Embed.propTypes = {
    embedID: PropTypes.string.isRequired
};

export default Youtube_Embed;
