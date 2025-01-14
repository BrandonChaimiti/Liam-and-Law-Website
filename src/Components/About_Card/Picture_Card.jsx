import React, { useState } from 'react';
import "./pic_card.css"; // Styles for music cards

function Picture_Card() {

  return (
    <div>
        <div className="picture">
        <img src="src/assets/showImages/SideBySide.jpg" className="card-image" alt="Liam Law and Lance Magic" /> {/* Card image */}
          <h2 className="picture-title">Liam Law and Lance Magic</h2> {/* Card title */}
        </div>
    </div>
  );
}

export default Picture_Card;