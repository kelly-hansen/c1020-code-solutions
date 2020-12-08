import React from 'react';
import ReactDOM from 'react-dom';

const newH1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log(newH1);

ReactDOM.render(newH1, document.getElementById('root'));
