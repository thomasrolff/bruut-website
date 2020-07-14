import React from 'react';
import Album from './Album';

function Albums({ data }) {

  return (
    <div className="albums-container">

      {data.map(item => (
      <Album  
        album={item} 
        image={item.image}
        data={data}
        key={item.id} 
      />))}
    </div>
  );
}

export default Albums;

