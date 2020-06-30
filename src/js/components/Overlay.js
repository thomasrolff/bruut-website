import React from 'react';

export default function Overlay(props) {
  
  document.body.classList.add("no-scroll");

  return (
    <div className="overlay-shop">
    {props.album.released}
   </div>
  );
}

