import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const accordionList = [
  {
    id: 1,
    title: 'Mark Hoppus',
    details: 'Mark plays bass for Blink-182, and enjoys long walks on the beach.'
  },
  {
    id: 2,
    title: 'Tom Delonge',
    details: 'Tom plays guiter for Blink-182, and enjoys warm bubble baths.'
  },
  {
    id: 3,
    title: 'Travis Barker',
    details: 'Travis plays drums for Blink-182, and enjoys a pumpkin spice latte.'
  }
];

ReactDOM.render(
  <Accordion items={accordionList} />,
  document.getElementById('root')
);
