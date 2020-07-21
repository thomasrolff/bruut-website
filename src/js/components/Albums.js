import React from 'react';
import Album from './Album';

export default function Albums({ albums, setSelectedAlbum }) {
  return (
    <div className="albums-container">
      {albums.map(album => (
      <Album  
        key={album.id} 
        album={album} 
        albumClickHandler={() => setSelectedAlbum(album)}
      />))}
    </div>
  );
}