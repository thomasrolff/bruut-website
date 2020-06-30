import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import goSurfing from '../../img/album-go-surfing.jpg';
import v from '../../img/album-v.jpg';
import superjazz from '../../img/album-superjazz.jpg';
import madpack from '../../img/album-madpack.jpg';
import fire from '../../img/album-fire.jpg';
import bruut from '../../img/album-bruut.jpg';
import Overlay from './Overlay';

function Album(props) {
  const [overlayOn, toggleOverlay] = useState(false);

  return (
    <div className="album">
      <img src={props.image}></img>
      <div className="overlay" onClick={() => toggleOverlay(!overlayOn)}>
        
        {overlayOn && (
          createPortal(<Overlay album={props}/>, document.getElementById('overlay-root'))
        )}

        <h3 className="albumTitle">{props.album.title}</h3>
        <p className="album-info"></p>
      </div>
    </div>
  );
}


export default function Albums(props) {
  return (
    <div className="albums-container">
      <Album album={props.albums.goSurfing} image={goSurfing} />
      <Album album={props.albums.v} image={v}/>
      <Album album={props.albums.superjazz} image={superjazz}/>
      <Album album={props.albums.madpack} image={madpack}/>
      <Album album={props.albums.fire} image={fire}/>
      <Album album={props.albums.bruut} image={bruut}/>
    </div>
  );
}

