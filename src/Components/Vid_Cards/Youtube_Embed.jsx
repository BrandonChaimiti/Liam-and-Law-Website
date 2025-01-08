import React from 'react'
import PropTypes from 'prop-types'
import './vids.css'

const Youtube_Embed = ({ embedID }) => {
    return(
        <div className='music-video'>
        <iframe
            src={`https://www.youtube.com/embed/${embedID}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube" 
        />
    </div>
    )
};

Youtube_Embed.propTypes = {
    embedID: PropTypes.string.isRequired
};

export default Youtube_Embed