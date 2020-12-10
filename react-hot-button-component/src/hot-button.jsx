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
    if (this.state.clickCount < 3) {
      button = <button className="gray" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 6) {
      button = <button className="purple" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 9) {
      button = <button className="lightpurple" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 12) {
      button = <button className="red" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 15) {
      button = <button className="orange" onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 18) {
      button = <button className="yellow" onClick={this.handleClick}>Hot Button</button>;
    } else {
      button = <button className="white">Hot Button</button>;
    }
    return (
      button
    );
  }
}
