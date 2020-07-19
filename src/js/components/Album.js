import React from 'react';

function Album({ album, albumClickHandler }) {
  return (
    <div className="album">
      <img src={album.image}></img>
      <div className="overlay" onClick={albumClickHandler}>
        <h3 className="albumTitle">{album.title}</h3>
        <p className="album-info">{album.info}</p>
        {album.infoSub && (
          <p className="album-info-sub">{album.infoSub}</p>
        )}
      </div>
    </div>
  );
}

export default Album;