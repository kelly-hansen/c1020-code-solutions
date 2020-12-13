import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  '../src/images/001.png',
  '../src/images/004.png',
  '../src/images/007.png',
  '../src/images/025.png',
  '../src/images/039.png'
];

ReactDOM.render(
  <Carousel images={images} />,
  document.getElementById('root')
);
