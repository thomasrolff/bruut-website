import React, { useState } from 'react';
import arrowPrevious from '../../img/arrow-previous.svg';
import arrowNext from '../../img/arrow-next.svg';
import closeButton from '../../img/cross3.svg';


function Overlay({ data, initialAlbum }) {
  const [viewAlbum, setViewAlbum] = useState(initialAlbum);

  const nextAlbum = () => { 
    data.map((item, i) => {
      if (item.id === viewAlbum.id) {
        i++;
        (i === data.length) ? i = i : setViewAlbum(data[i]);
      } 
    }
  )};

  const prevAlbum = () => { 
    data.map((item, i) => {
      if (item.id === viewAlbum.id) {
        (i === 0) ? i = i : i--;
        setViewAlbum(data[i]);
      } 
    }
  )};

  return (
    <div className="overlay-shop">
      <div className="overlay-wrapper">
        <div className="top-bar-wrapper">
          <div className="button-close">
            <img src={closeButton}></img>
          </div>
        </div>
        <div className="left-bar-wrapper">
          <img src={arrowPrevious} onClick={prevAlbum}></img>
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
        <div className="right-bar-wrapper">
          <img src={arrowNext} onClick={nextAlbum}></img>
        </div>
      </div>
    </div>
  );
}

export default Overlay;