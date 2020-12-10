import React from 'react';

let clickCount = 0;
const buttonColors = ['gray', 'purple', 'lightpurple', 'red', 'orange', 'yellow', 'white'];
let currentButtonColorIndex = 0;

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: buttonColors[currentButtonColorIndex]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    clickCount++;
    if (clickCount === 3) {
      clickCount = 0;
      currentButtonColorIndex++;
      this.setState({
        class: buttonColors[currentButtonColorIndex]
      });
    }
  }

  render() {
    let button;
    if (buttonColors[currentButtonColorIndex] === 'white') {
      button = <button className={this.state.class}>Hot Button</button>;
    } else {
      button = <button className={this.state.class} onClick={this.handleClick}>Hot Button</button>;
    }
    return (
      button
    );
  }
}
