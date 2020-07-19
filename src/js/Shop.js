import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import data from './../data/bruut-albums';
import Album from './components/Album';

function Shop() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);

  if (selectedAlbum) {
    const overlay = document.getElementsByClassName("overlay-shop");
    document.body.setAttribute("class", "no-scroll");
    overlay.ontouchmove = (e) => { 
      e.preventDefault(); 
      return false; 
    };
  } else {
    document.body.removeAttribute("class", "no-scroll");
  }

  function Albums({ albums }) {
    return (
      <div className="albums-container">
        {albums.map(album => (
        <Album  
          key={album.id} 
          album={album} 
          albumClickHandler={() => setSelectedAlbum(album)}
        />))}
      </div>
    );
  }

  function Overlay() {
    
    const nextAlbum = (e) => { 
      e.stopPropagation();
      data.map((album, i) => {
        if (album.id === selectedAlbum.id) {
          (i === (data.length -1)) ? i : i++;
          setSelectedAlbum(data[i]);
        } 
      }
    )};
  
    const prevAlbum = (e) => { 
      e.stopPropagation();
      data.map((album, i) => {
        if (album.id === selectedAlbum.id) {
          (i === 0) ? i : i--;
          setSelectedAlbum(data[i]);
        } 
      }
    )};
  
    return (
      <div className="overlay-shop" id="overlay-shop">
        <div className="overlay-wrapper">
          <div className="top-bar-wrapper">
            <div 
              className="button-close" 
              onClick={() => setSelectedAlbum(null)}
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.08697 0.0139848L64 58.1832L58.2095 64L0.294848 5.83247L6.08697 0.0139848Z" fill="black"/>
                <path d="M0 58.1684L57.913 0L63.7052 5.81684L5.79212 63.986L0 58.1684Z" fill="black"/>
              </svg>
            </div>
          </div>
          <div className="left-bar-wrapper" onClick={prevAlbum}>
              <svg width="25" height="44" viewBox="0 0 25 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.678442 23.4691L19.5838 42.3741C20.021 42.8117 20.6047 43.0527 21.2271 43.0527C21.8495 43.0527 22.4332 42.8117 22.8704 42.3741L24.2627 40.9822C25.1686 40.0752 25.1686 38.6011 24.2627 37.6955L8.38743 21.8202L24.2803 5.92734C24.7176 5.48974 24.959 4.90639 24.959 4.28435C24.959 3.66162 24.7176 3.07827 24.2803 2.64032L22.8881 1.24876C22.4505 0.811161 21.8671 0.570084 21.2447 0.570084C20.6223 0.570084 20.0386 0.811161 19.6014 1.24876L0.678442 20.171C0.240149 20.61 -0.000583391 21.1961 0.000798202 21.8192C-0.000583282 22.4447 0.240149 23.0304 0.678442 23.4691Z" fill="white"/>
              </svg>
          </div>
          <div className="content-wrapper">
            <div className="content-container">
              <div className="image-container">
                <img src={selectedAlbum.image}></img>
              </div>
              <div className="info-container">
                <h2>{selectedAlbum.title}</h2>
                <p className="released">Released: {selectedAlbum.releaseDate}</p>
                <div className="para-container">
                  {selectedAlbum.musicians.map(musician => 
                    <p key={musician.name}>
                      {musician.name} - {musician.instrument}
                    </p>
                  )}  
                </div>
                <p className="produced">Produced by {selectedAlbum.producer}</p>
                <p className="available">Available on: {selectedAlbum.availability.join(" | ")}</p>
                <div className="buttons-container">
                  <a 
                    href={selectedAlbum.buyURL}
                    target="_blank"
                    className="button button__shop--buy"
                  >
                    <span className="shopping">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23">
                        <path fill="#FBFBFB" d="M16.036 16.148a2.47 2.47 0 00-2.471 2.471 2.47 2.47 0 002.471 2.471 2.47 2.47 0 002.471-2.471c-.024-1.354-1.116-2.471-2.471-2.471zm4.348-11.783c-.048 0-.119-.024-.19-.024H5.227L4.989 2.75A2.127 2.127 0 002.875.92H.95a.953.953 0 00-.95.95c0 .523.428.95.95.95h1.924c.119 0 .214.095.238.214L4.585 13.06a2.606 2.606 0 002.566 2.209h9.882a2.64 2.64 0 002.566-2.091l1.544-7.721a.938.938 0 00-.759-1.092zM9.978 18.5a2.456 2.456 0 00-2.447-2.352 2.485 2.485 0 00-2.376 2.565 2.436 2.436 0 002.423 2.353h.048c1.354-.072 2.423-1.212 2.352-2.566z"/>
                      </svg>
                    </span>
                    BUY
                  </a>
                  <div 
                    className="button button__shop--stream"
                    onClick={() => setSelectedStream(selectedAlbum)}
                  >
                    STREAM
                  </div>
                </div>
              </div>
            </div> 
          </div>
          <div className="right-bar-wrapper" onClick={nextAlbum}>
             <svg width="25" height="44" viewBox="0 0 25 44" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M24.3216 20.1537L5.41624 1.24875C4.97898 0.811147 4.39528 0.570068 3.7729 0.570068C3.15051 0.570068 2.56681 0.811147 2.12956 1.24875L0.737311 2.64065C-0.168633 3.54763 -0.168633 5.02173 0.737311 5.92733L16.6126 21.8026L0.719696 37.6955C0.28244 38.1331 0.0410156 38.7164 0.0410156 39.3385C0.0410156 39.9612 0.28244 40.5445 0.719696 40.9825L2.11194 42.374C2.54954 42.8116 3.1329 43.0527 3.75528 43.0527C4.37767 43.0527 4.96137 42.8116 5.39862 42.374L24.3216 23.4518C24.7598 23.0128 25.0006 22.4267 24.9992 21.8036C25.0006 21.1781 24.7598 20.5924 24.3216 20.1537Z" fill="white"/>
             </svg>
          </div>
        </div>
        {selectedStream && (<StreamModal album={selectedStream} />)}
      </div>
    );
  }

  function StreamModal({ album }) {
    return (
      <>
        <div className="stream-modal-background" onClick={() => setSelectedStream(null)}></div>
        <div className="stream-modal">
          <div className="close-button" onClick={() => setSelectedStream(null)}>
            <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2.96094" y="0.00695801" width="39.8462" height="3.98462" transform="rotate(45 2.96094 0.00695801)" fill="white"/>
              <rect y="28.1755" width="39.8462" height="3.98462" transform="rotate(-45 0 28.1755)" fill="white"/>
            </svg>
          </div>
          <ul>
            <li><a href={album.spotifyURL} target="_blank">Spotify</a></li>
            <li><a href={album.appleMusicURL} target="_blank">Apple Music</a></li>
            <li><a href={album.deezerURL} target="_blank">Deezer</a></li>
            <li><a href={album.tidalURL} target="_blank">Tidal</a></li>
          </ul>
        </div>
      </>
    );
  }

  return (
    <div className="margin-70">
      <h2>Shop</h2>
      <Albums albums={data} />
      {selectedAlbum && (<Overlay />)}
    </div>
  );
}

ReactDOM.render(
  <Shop />,
  document.getElementById('shop')
);