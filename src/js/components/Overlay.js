import React from 'react';
import arrowPrevious from '../../img/arrow-previous.svg';
import arrowNext from '../../img/arrow-next.svg';
import closeButton from '../../img/cross3.svg';


function Overlay({ album, image }) {
  console.log(album);

  return (
    <div className="overlay-shop">
      <div className="overlay-wrapper">
        <div className="top-bar-wrapper">
          <div className="button-close">
            <img src={closeButton}></img>
          </div>
        </div>
        <div className="left-bar-wrapper">
          <img src={arrowPrevious}></img>
        </div>
        <div className="content-wrapper">
          <div className="content-container">
            <div className="image-container">
              <img src={image}></img>
            </div>
            <div className="info-container">
              <h2>{album.title}</h2>
              <p>{album.released}</p>
              <div className="para-container">
                <p>{album.maarten}</p>
                <p>{album.folkert}</p>
                <p>{album.thomas}</p>
                <p>{album.felix}</p>
              </div>
              <p>{album.produced}</p>
              <p>{album.available}</p>
            </div>
          </div> 
        </div>
        <div className="right-bar-wrapper">
          <img src={arrowNext}></img>
        </div>
      </div>
    </div>
  );
}

export default Overlay;