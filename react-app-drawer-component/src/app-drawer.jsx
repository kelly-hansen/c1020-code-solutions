import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState({
      isOpen: !this.state.isOpen
    });

  }

  render() {
    let drawer;
    if (this.state.isOpen === false) {
      drawer = <i className="fas fa-bars" onClick={this.toggleDrawer}></i>;
    } else {
      const menuItems = this.props.menuItems.map(item => {
        return <p key={item.id} onClick={this.toggleDrawer}>{item.name}</p>;
      });
      drawer = (
        <div className="modal">
          <div className="menu">
            <h2>Menu</h2>
            {menuItems}
          </div>
          <div className="dark-bg" onClick={this.toggleDrawer}></div>
        </div>
      );
    }

    return drawer;
  }
}

export default AppDrawer;
