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
    if (clickCount === 3 && currentButtonColorIndex < buttonColors.length - 1) {
      clickCount = 0;
      currentButtonColorIndex++;
      this.setState({
        class: buttonColors[currentButtonColorIndex]
      });
    }
  }

  render() {
    return (
      <button className={this.state.class} onClick={this.handleClick}>Hot Button</button>
    );
  }
}
