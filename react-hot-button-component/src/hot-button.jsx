import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    let button;
    let buttonClass;
    if (this.state.clickCount < 18) {
      if (this.state.clickCount < 3) {
        buttonClass = 'gray';
      } else if (this.state.clickCount < 6) {
        buttonClass = 'purple';
      } else if (this.state.clickCount < 9) {
        buttonClass = 'lightpurple';
      } else if (this.state.clickCount < 12) {
        buttonClass = 'red';
      } else if (this.state.clickCount < 15) {
        buttonClass = 'orange';
      } else if (this.state.clickCount < 18) {
        buttonClass = 'yellow';

      }
      button = <button className={buttonClass} onClick={this.handleClick}>Hot Button</button>;
    } else {
      buttonClass = 'white';
      button = <button className={buttonClass}>Hot Button</button>;
    }
    return (
      button
    );
  }
}
