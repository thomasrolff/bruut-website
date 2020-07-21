import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import data from './../data/bruut-albums';
import Albums from './components/Albums'
import Overlay from './components/Overlay'


function Shop() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);

  if (selectedAlbum) {
    const overlay = document.getElementsByClassName("overlay-shop");
    document.body.setAttribute("class", "no-scroll");
    overlay.ontouchmove = (e) => { 
      e.preventDefault(); 
      return false; 
    };
  } else {
    document.body.removeAttribute("class", "no-scroll");
  }



  return (
    <div className="margin-70">
      <h2>Shop</h2>
      <Albums albums={data} setSelectedAlbum={setSelectedAlbum}/>
      {selectedAlbum && (
        <Overlay 
          selectedAlbum={selectedAlbum}
          setSelectedAlbum={setSelectedAlbum}
          selectedStream={selectedStream}
          setSelectedStream={setSelectedStream}
          data={data}
        />
      )}
    </div>
  );
}

ReactDOM.render(
  <Shop />,
  document.getElementById('shop')
);