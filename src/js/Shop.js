import React from 'react';
import ReactDOM from 'react-dom';
import data from '../data/bruut-albums.json';
import Albums from './components/Albums';

ReactDOM.render(
  <Albums albums={data.albums} />,
  document.getElementById('root')
);

