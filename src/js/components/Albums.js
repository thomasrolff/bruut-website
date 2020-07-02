import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import goSurfing from '../../img/album-go-surfing.jpg';
import v from '../../img/album-v.jpg';
import superjazz from '../../img/album-superjazz.jpg';
import madpack from '../../img/album-madpack.jpg';
import fire from '../../img/album-fire.jpg';
import bruut from '../../img/album-bruut.jpg';
import Overlay from './Overlay';


function Album({ album, image }) {
  const [overlayOn, toggleOverlay] = useState(false);

  return (
    <div className="album">
      <img src={image}></img>
      <div className="overlay" onClick={() => toggleOverlay(!overlayOn)}>
        
        {overlayOn && (
          createPortal(<Overlay album={album} image={image} />, document.getElementById('overlay-root'))
        )}

        <h3 className="albumTitle">{album.title}</h3>
        <p className="album-info"></p>
      </div>
    </div>
  );
}


 function Albums({ albums }) {
  console.log(albums)
  
  return (
    <div className="albums-container">
      <Album album={albums[0]} image={goSurfing}/>
      <Album album={albums[1]} image={v}/>
      <Album album={albums[2]} image={superjazz}/>
      <Album album={albums[3]} image={madpack}/>
      <Album album={albums[4]} image={fire}/>
      <Album album={albums[5]} image={bruut}/>
    </div>
  );
}

export default Albums;