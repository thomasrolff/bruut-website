import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data/bruut-albums-array.json';
import Albums from './components/Albums';

function Shop() {
  return (
    <div className="margin-70">
      <h2>Shop</h2>
      <Albums data={data} />
    </div>
  );
}

ReactDOM.render(
  <Shop />,
  document.getElementById('shop')
);