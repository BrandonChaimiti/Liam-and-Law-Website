import React from 'react'; // Import React library to create components
import './gallery.css'; // Import the CSS file for styling the Gallery component

// Define the Gallery functional component
function Gallery() {
    // Array of image paths that will be displayed in the gallery
    const images = [
        '/showImages/Chillin.jpg',
        '/showImages/LitStudioPic.jpg',
        '/showImages/Chill_Studio_Pic.jpg',
        '/showImages/Lance_Dark_Background.jpg'
    ];
    
    return (
        <div>
            {/* Map through the array of image paths to generate an <img> element for each */}
            {images.map((src, index) => (
                <img
                    key={index} // Unique key prop to help React identify each element in the list
                    src={src} // Set the source of the image
                    alt={`Gallery image ${index + 1}`} // Provide a descriptive alternative text for accessibility
                    className="gallery-image" // Apply CSS styling to the image using the gallery-image class
                />
            ))}
        </div>
    );
}

export default Gallery; // Export the Gallery component so it can be used in other parts of the application