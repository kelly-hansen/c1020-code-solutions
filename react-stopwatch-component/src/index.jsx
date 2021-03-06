import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      time: 0,
      timerID: null
    };
    this.playPause = this.playPause.bind(this);
    this.reset = this.reset.bind(this);
  }

  playPause() {
    const stateCopy = Object.assign({}, this.state);
    if (this.state.running) {
      stateCopy.running = false;
      clearInterval(stateCopy.timerID);
      this.setState(stateCopy);
    } else {
      stateCopy.running = true;
      stateCopy.timerID = setInterval(() => {
        stateCopy.time++;
        this.setState(stateCopy);
      }, 1000);
      this.setState(stateCopy);
    }
  }

  reset() {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.time = 0;
    this.setState(stateCopy);
  }

  render() {
    let playPauseIcon;
    let watchFace;
    if (this.state.running === false) {
      playPauseIcon = 'fas fa-play';
      watchFace = (
        <div className="watch" onClick={this.reset}>
          <p>{this.state.time}</p>
        </div>
      );
    } else {
      playPauseIcon = 'fas fa-pause';
      watchFace = (
        <div className="watch">
          <p>{this.state.time}</p>
        </div>
      );
    }

    const newStopwatch = (
      <div className="cont">
        {watchFace}
        <div className="play-pause" onClick={this.playPause}>
          <i className={playPauseIcon}></i>
        </div>
      </div>
    );

    return newStopwatch;
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);
