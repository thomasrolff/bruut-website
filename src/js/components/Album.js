import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Overlay from './Overlay';

function Album({ data, album, image }) {
  const [overlayOn, setOverlay] = useState(false);

  const overlayOff = (e) => {
    // Prevent onClick event from bubbling up to parent
    e.stopPropagation();
    setOverlay(false);
  }

  const noScroll = () => {
    const overlay = document.getElementById('overlay-root');
   
    document.body.setAttribute("class", "no-scroll");
    overlay.ontouchmove = (e) => { 
      e.preventDefault(); 
      return false; 
    };
  }

  function onTouch(e) {
    e.preventDefault();
  }

  return (
    <div className="album" onTouchStart={onTouch}>
      <img src={image} onTouchStart={onTouch}></img>
      <div className="overlay" onClick={() => setOverlay(true)}>
        <h3 className="albumTitle">{album.title}</h3>
        <p className="album-info">{album.info}</p>
        {album.infoSub && (
          <p className="album-info-sub">{album.infoSub}</p>
        )}
        {overlayOn && (
          createPortal(<Overlay 
            initialAlbum={album} 
            data={data} 
            overlayOff={overlayOff} 
          />, 
            document.getElementById('overlay-root'))
        )}
        {overlayOn? 
          noScroll() : 
          document.body.removeAttribute("class", "no-scroll")
        }
      </div>
    </div>
  );
}

export default Album;