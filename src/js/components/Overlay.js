import React, { useState } from 'react';
import arrowPrevious from '../../img/arrow-previous.svg';
import arrowNext from '../../img/arrow-next.svg';
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
          <img src={arrowPrevious}></img>
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
          <img src={arrowNext}></img>
        </div>
      </div>
    </div>
  );
}

export default Overlay;