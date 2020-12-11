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
      const menuItems = this.props.menuItems.map(item => {
        return <p key={item.id}>{item.name}</p>;
      });
      drawer = (
        <div className="modal">
          <div className="menu">
            <h2>Menu</h2>
            {menuItems}
          </div>
          <div className="dark-bg"></div>
        </div>
      );
    }

    return drawer;
  }
}

export default AppDrawer;
