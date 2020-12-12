import React from 'react';

class AccordionItemTitle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.showHideDetails(parseInt(e.target.id));
  }

  render() {
    return (
      <div className="title" onClick={this.handleClick} id={this.props.itemObj.id}>{this.props.itemObj.title}</div>
    );
  }
}

class AccordionItemDetails extends React.Component {
  render() {
    return (
      <div className="details">{this.props.details}</div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.showHideDetails = this.showHideDetails.bind(this);
  }

  showHideDetails(id) {
    if (id === this.state.selected) {
      this.setState({ selected: null });
    } else {
      this.setState({ selected: id });
    }
  }

  render() {
    const list = this.props.items.map(item => {
      const currentItem = (
        <div key={item.id}>
          <AccordionItemTitle showHideDetails={this.showHideDetails} itemObj={item} />
          { this.state.selected === item.id && (
            <AccordionItemDetails details={item.details} />
          )}
        </div>
      );
      return currentItem;
    });

    return <div>{list}</div>;
  }
}

export default Accordion;
