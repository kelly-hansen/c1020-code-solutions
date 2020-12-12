import React from 'react';

class AccordionItem extends React.Component {
  render() {
    return (
      <div>
        <div className="title">Working</div>
        {this.props.showDetails && <div className="details"></div>}
      </div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  render() {
    let list;
    if (this.state.selected === null) {
      list = (
        <div>
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </div>
      );
    }
    return list;
  }
}

export default Accordion;
