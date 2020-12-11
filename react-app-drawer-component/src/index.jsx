import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from './app-drawer';

const menuItems = [
  {
    id: 1,
    name: 'About'
  },
  {
    id: 2,
    name: 'Get Started'
  },
  {
    id: 3,
    name: 'Sign In'
  }
];

ReactDOM.render(
  <AppDrawer menuItems={menuItems} />,
  document.getElementById('root')
);
