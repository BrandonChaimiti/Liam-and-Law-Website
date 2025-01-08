import React from 'react'
import './gallery.css'

function Gallery() {
    const images = [
        'src/assets/showImages/Chillin.jpg',
        'src/assets/showImages/LitStudioPic.jpg',
        'src/assets/showImages/Chill_Studio_Pic.jpg',
        'src/assets/showImages/Lance_Dark_Background.jpg'
    ];
    
    return (
        <div>
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="gallery-image"
                />
            ))}
        </div>
    )
}

export default Gallery