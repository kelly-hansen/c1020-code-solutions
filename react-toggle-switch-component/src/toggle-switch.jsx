import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newSwitchStatus = !this.state.on;
    this.setState({ on: newSwitchStatus });
  }

  render() {
    let contClass;
    if (this.state.on) {
      contClass = 'cont on';
    } else {
      contClass = 'cont off';
    }

    return (
      <div className={contClass} onClick={this.handleClick}>
        <div className="back"></div>
        <div className="switch"></div>
      </div>
    );
  }
}
