import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click Me!</button>;
}

const button = <CustomButton />;
ReactDOM.render(
  button,
  document.getElementById('root')
);
