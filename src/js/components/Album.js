import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Overlay from './Overlay';

function Album({ data, album, image }) {
  const [overlayOn, setOverlay] = useState(false);

  return (
    <div className="album">
      <img src={image}></img>
      <div className="overlay" onClick={() => setOverlay(true)}>
        
        {overlayOn && (
          createPortal(<Overlay initialAlbum={album} data={data} />, document.getElementById('overlay-root'))
        )}

        <h3 className="albumTitle">{album.title}</h3>
        <p className="album-info"></p>
      </div>
    </div>
  );
}

export default Album;