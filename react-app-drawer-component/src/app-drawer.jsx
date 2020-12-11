import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  render() {
    let drawer;
    if (this.state.isOpen === false) {
      drawer = <i className="fas fa-bars"></i>;
    }

    return drawer;
  }
}

export default AppDrawer;
