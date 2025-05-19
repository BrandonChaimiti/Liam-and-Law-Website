import React, { useState } from 'react'; // Import React and the useState hook
import "./M_Cards.css"; // Styles for music cards

function Music_Cards() {
  const [dropdownVisible, setDropdownVisible] = useState(null); // Tracks the visible dropdown menu

  // Data for each music card stored in an array
  const cardData = [
    {
      id: 1,
      image: "/assets/covers/marathon_music.JPEG", // Image for the card
      title: "MARATHON MUSIC", // Title of the music
      songLinkSpotify: "https://open.spotify.com/track/67r5RKrouXly6WA6xY2CrH", // Spotify link
      songLinkAM: "https://music.apple.com/gb/album/marathon-music/1714314750?i=1714314751", // Apple Music link
      songSC: "https://soundcloud.com/liamandlance/marathon-music", // SoundCloud link
    },
    {
      id: 2,
      image: "/assets/covers/12AM.jpeg",
      title: "12 AM",
      songLinkSpotify: "https://open.spotify.com/track/3xUhMsj8NIkm8aHMbxT719",
      songLinkAM: "https://music.apple.com/gb/album/12am/1726997627?i=1726997628",
      songSC: "https://soundcloud.com/liamandlance/12amexplicit",
    },
    {
      id: 3,
      image: "/assets/covers/2AM.PNG",
      title: "2 AM",
      songLinkSpotify: "https://open.spotify.com/track/1UnzdjEWdlvGvO0JUqoq3G",
      songLinkAM: "https://music.apple.com/gb/album/2am/1774743362?i=1774743363",
      songSC: "https://soundcloud.com/liamandlance/2am-edited-version",
    },
    {
      id: 4,
      image: "/assets/covers/Warm_Up.jpeg",
      title: "Warm Up",
      songLinkSpotify: "https://open.spotify.com/track/6Pj3cQlpyJUjiOg2p2uHDm",
      songLinkAM: "https://music.apple.com/gb/album/warm-up-single/1742651949",
      songSC: "https://soundcloud.com/liamandlance/warm-up",
    },
  ];

  return (
    <div className="cards-container">
      {/* Map through the cardData array to render each music card */}
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} className="card-image" alt={card.title} /> {/* Card image */}
          <h2 className="card-title">{card.title}</h2> {/* Card title */}
          {/* Button to toggle the dropdown menu for the card */}
          <button
            className="card-button"
            onClick={() => setDropdownVisible(dropdownVisible === card.id ? null : card.id)}
          >
            Listen Now
          </button>
          {/* Conditionally render the dropdown menu if the current card's dropdown is visible */}
          {dropdownVisible === card.id && (
            <div className="dropdown-menu"> {/* Dropdown with music links */}
              <a href={card.songLinkSpotify}>Spotify</a>
              <a href={card.songLinkAM}>Apple Music</a>
              <a href={card.songSC}>SoundCloud</a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Music_Cards;
