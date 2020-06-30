import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data/bruut-albums.json';
import Albums from './components/Albums';

function Shop() {
  return (
    <div className="margin-70">
      <h2>Shop</h2>
      <Albums albums={data.albums} />
    </div>
  );
}

ReactDOM.render(
  <Shop />,
  document.getElementById('shop')
);

