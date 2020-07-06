import React, { useState } from 'react';
import arrowPrevious from '../../img/arrow-previous.svg';
import arrowNext from '../../img/arrow-next.svg';
import closeButton from '../../img/cross3.svg';


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
            <img src={closeButton}></img>
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