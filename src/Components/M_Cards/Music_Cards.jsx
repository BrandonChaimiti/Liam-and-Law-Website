import React, { useState } from 'react'
import "./M_Cards.css"

function Music_Cards() {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  
  const cardData = [
    {
      id: 1,
      image: "src/assets/covers/marathon_music.jpeg",
      title: "MARATHON MUSIC",
      songLinkSpotify: "https://open.spotify.com/track/67r5RKrouXly6WA6xY2CrH",
      songLinkAM: "https://music.apple.com/gb/album/marathon-music/1714314750?i=1714314751",
      songSC: "https://soundcloud.com/liamandlance/marathon-music",
    },
    {
      id: 2,
      image: "src/assets/covers/12AM.jpeg",
      title: "12 AM",
      songLinkSpotify: "https://open.spotify.com/track/3xUhMsj8NIkm8aHMbxT719",
      songLinkAM: "https://music.apple.com/gb/album/12am/1726997627?i=1726997628",
      songSC: "https://soundcloud.com/liamandlance/12amexplicit",
    },
    {
      id: 3,
      image: "src/assets/covers/2AM.PNG",
      title: "2 AM",
      songLinkSpotify: "https://open.spotify.com/track/1UnzdjEWdlvGvO0JUqoq3G",
      songLinkAM: "https://music.apple.com/gb/album/2am/1774743362?i=1774743363",
      songSC: "https://soundcloud.com/liamandlance/2am-edited-version",
    },
    {
      id: 4,
      image: "src/assets/covers/Warm_Up.jpeg",
      title: "Warm Up",
      songLinkSpotify: "https://open.spotify.com/track/6Pj3cQlpyJUjiOg2p2uHDm",
      songLinkAM: "https://music.apple.com/gb/album/warm-up-single/1742651949",
      songSC: "https://soundcloud.com/liamandlance/warm-up",
    },
  ];
  
  return (
    <div className="cards-container">
      {cardData.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} className="card-image" alt={card.title} />
          <h2 className="card-title">{card.title}</h2>
          <button className="card-button" onClick={() => setDropdownVisible (dropdownVisible === card.id ? null : card.id)}>Listen Now</button>
          {dropdownVisible === card.id && (
            <div className="dropdown-menu">
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

export default Music_Cards