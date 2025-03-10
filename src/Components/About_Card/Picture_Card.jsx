import React, { useState } from 'react';
import "./pic_card.css"; // Styles for music cards

function Picture_Card() {

  return (
    <div className='about-container'>
      <div className="picture">
        <img src="src/assets/showImages/SideBySide.jpg" className="card-image" alt="Liam Law and Lance Magic" /> {/* Card image */}
          <h2 className="picture-title">Liam Law and Lance Magic</h2> {/* Card title */}
      </div>
      <div className='bio'>
        <p>
        Liam Law and Lance Magic, are a dynamic musical duo raised in Ellicott City, Maryland, with strong ties to Richmond and Suffolk, Virginia.
        Their journey began with a shared passion for music, nurtured in their family home, where they started writing songs together around late
        2018.
        </p>
        
        <p>
        Liam Law, born in San Diego, California, began writing, recording and self-producing music as early as 2012. By 2018, Liam discovered his
        unique flow blended seamlessly with the beats produced by his brother, Lance Magic.
        </p>

        <p>
        Lance Magic, born in Columbia, Maryland, has been honing his musical talents since a young age. A pianist from age 5, he started digitally
        programming music by 13 and has since developed a versatile production style influenced by funk, pop, hip-hop, and R&B. Together, the
        brothers embrace a "sonically universal" approach, blending elements of hip-hop, pop, funk, and R&B into their distinct sound.
        </p>

        <p>
        Aside from music, the brothers have starred in numerous plays and musicals from the early ages of nine and ten years old. Liam and Lance
        believe their theatrical background has heavily influenced their styles of visual and musical production.
        </p>
      </div>
    </div>
  );
}

export default Picture_Card;