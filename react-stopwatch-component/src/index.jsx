import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const newStopwatch = (
      <div className="cont">
        <div className="watch">
          <p>0</p>
        </div>
        <div className="play-pause"><i className="fas fa-play"></i></div>
      </div>
    );

    return newStopwatch;
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
