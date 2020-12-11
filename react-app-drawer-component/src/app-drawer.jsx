import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  render() {
    let drawer;
    if (this.state.isOpen === false) {
      drawer = <i className="fas fa-bars"></i>;
    } else {
      drawer = (
        <div className="modal">
          <div className="menu-cont"></div>
          <div className="dark-bg"></div>
        </div>
      );
    }

    return drawer;
  }
}

export default AppDrawer;
