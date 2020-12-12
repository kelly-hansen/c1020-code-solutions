import React from 'react';

class AccordionItem extends React.Component {
  render() {
    return (
      <div>
        <div className="title">{this.props.itemObj.title}</div>
        {this.props.selectedId === this.props.itemObj.id && (
          <div className="details">{this.props.itemObj.details}</div>
        )}
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    const list = this.props.items.map(item => {
      return <AccordionItem onClick={this.handleClick} selectedId={this.state.selected} itemObj={item} key={item.id} />;
    });

    return <div>{list}</div>;
  }
}

export default Accordion;
