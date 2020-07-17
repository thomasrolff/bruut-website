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

  return (
    <div className="album">
      <img src={image}></img>
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
          document.body.setAttribute("class", "no-scroll") : 
          document.body.removeAttribute("class", "noscroll")
        }
      </div>
    </div>
  );
}

export default Album;

