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

  handleClick(e) {
    let newIndex;
    if (e.target.className === 'fas fa-chevron-left') {
      newIndex = this.state.imageIndex - 1;
      if (newIndex < 0) {
        newIndex = this.props.images.length - 1;
      }
    } else if (e.target.className === 'fas fa-chevron-right') {
      newIndex = this.state.imageIndex + 1;
      if (newIndex > this.props.images.length - 1) {
        newIndex = 0;
      }
    } else if (e.target.matches('.indicator')) {
      newIndex = parseInt(e.target.id, 10);
    }
    if (newIndex !== undefined) {
      this.newInterval(newIndex);
    }
  }

  newInterval(index) {
    clearInterval(this.state.intervalID);
    const newIntervalID = setInterval(() => {
      let nextIndex;
      if (this.state.imageIndex === this.props.images.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = this.state.imageIndex + 1;
      }
      this.setState({
        imageIndex: nextIndex,
        intervalID: this.state.intervalID
      });
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
