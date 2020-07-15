import React from 'react';

function StreamModal({ album, toggleModal }) {
  
  const stopPropagation = (e) => {
    e.stopPropagation();
    console.log('function runs');
    return null;
  }
  
  return (
    <>
      <div className="stream-modal-background"></div>
      <div className="stream-modal" onClick={stopPropagation}>
        <div className="close-button" onClick={toggleModal}>
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

export default StreamModal;