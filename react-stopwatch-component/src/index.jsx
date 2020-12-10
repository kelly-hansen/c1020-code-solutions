import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const newStopwatch = <div>Hello</div>;

    return newStopwatch;
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
