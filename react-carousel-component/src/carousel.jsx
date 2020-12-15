import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      imageIndex: 0,
      intervalID: null
    });
    this.handleClick = this.handleClick.bind(this);
    this.newInterval = this.newInterval.bind(this);
  }

  getNextIndex() {
    if (this.state.imageIndex + 1 > this.props.images.length - 1) {
      return 0;
    } else {
      return this.state.imageIndex + 1;
    }
  }

  getPreviousIndex() {
    if (this.state.imageIndex - 1 < 0) {
      return this.props.images.length - 1;
    } else {
      return this.state.imageIndex - 1;
    }
  }

  handleClick(e) {
    let newIndex;
    if (e.target.className === 'fas fa-chevron-left') {
      newIndex = this.getPreviousIndex();
    } else if (e.target.className === 'fas fa-chevron-right') {
      newIndex = this.getNextIndex();
    } else if (e.target.matches('.indicator')) {
      newIndex = parseInt(e.target.id, 10);
    }
    if (newIndex !== undefined) {
      this.newInterval(newIndex);
    }
  }

  updateStateImageIndex(index) {
    this.setState({
      imageIndex: index,
      intervalID: this.state.intervalID
    });
  }

  newInterval(index) {
    clearInterval(this.state.intervalID);
    const newIntervalID = setInterval(() => {
      const nextIndex = this.getNextIndex();
      this.updateStateImageIndex(nextIndex);
    }, 3000);
    let newIndex;
    if (typeof index === 'number') {
      newIndex = index;
    } else {
      newIndex = this.state.imageIndex;
    }
    this.setState({
      imageIndex: newIndex,
      intervalID: newIntervalID
    });
  }

  componentDidMount() {
    this.newInterval();
  }

  render() {
    const indicators = this.props.images.map((image, i) => {
      let imageClass;
      if (this.state.imageIndex === i) {
        imageClass = 'indicator selected';
      } else {
        imageClass = 'indicator';
      }
      return <div className={imageClass} key={i} id={i}></div>;
    });

    const carouselCont = (
      <div className="carousel-cont" onClick={this.handleClick}>
        <div className="chevron-cont">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="center-cont">
          <div className="spacer"></div>
          <div className="img-cont">
            <img src={this.props.images[this.state.imageIndex]} alt="displayed image" />
          </div>
          <div className="indicators-cont">
            {indicators}
          </div>
        </div>
        <div className="chevron-cont">
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    );

    return carouselCont;
  }
}

export default Carousel;
