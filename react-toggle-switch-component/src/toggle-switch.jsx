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
    let labelText;
    if (this.state.on) {
      contClass = 'switch-cont on';
      labelText = 'ON';
    } else {
      contClass = 'switch-cont off';
      labelText = 'OFF';
    }

    return (
      <div className="cont">
        <div className={contClass} onClick={this.handleClick}>
          <div className="back"></div>
          <div className="switch"></div>
        </div>
        <p>{labelText}</p>
      </div>
    );
  }
}
