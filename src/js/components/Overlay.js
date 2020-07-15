import React, { useState } from 'react';
// import arrowPrevious from '../../img/arrow-left.svg';
// import arrowNext from '../../img/arrow-right.svg';
import ButtonBuy from './ButtonBuy';
import ButtonStream from './ButtonStream';

function Overlay({ data, initialAlbum, overlayOff }) {
  const [viewAlbum, setViewAlbum] = useState(initialAlbum);

  const nextAlbum = (e) => { 
    e.stopPropagation();
    data.map((item, i) => {
      if (item.id === viewAlbum.id) {
        (i === (data.length -1)) ? i : i++;
        setViewAlbum(data[i]);
      } 
    }
  )};

  const prevAlbum = (e) => { 
    e.stopPropagation();
    data.map((item, i) => {
      if (item.id === viewAlbum.id) {
        (i === 0) ? i : i--;
        setViewAlbum(data[i]);
      } 
    }
  )};

  return (
    <div className="overlay-shop">
      <div className="overlay-wrapper">
        <div className="top-bar-wrapper">
          <div className="button-close" onClick={overlayOff}>
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
              <img src={viewAlbum.image}></img>
            </div>
            <div className="info-container">
              <h2>{viewAlbum.title}</h2>
              <p>{viewAlbum.released}</p>
              <div className="para-container">
                <p>{viewAlbum.maarten}</p>
                <p>{viewAlbum.folkert}</p>
                <p>{viewAlbum.thomas}</p>
                <p>{viewAlbum.felix}</p>
              </div>
              <p>{viewAlbum.produced}</p>
              <p>{viewAlbum.available}</p>
              <div className="buttons-container">
                <ButtonBuy album={viewAlbum} />
                <ButtonStream album={viewAlbum} />
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
      <div id="stream-modal-root"></div>
    </div>
  );
}

export default Overlay;