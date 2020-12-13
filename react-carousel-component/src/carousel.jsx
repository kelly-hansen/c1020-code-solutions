import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      imageIndex: 0,
      intervalID: null
    });
  }

  newInterval() {
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
        intervalID: newIntervalID
      });
    }, 3000);
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
      <div className="carousel-cont">
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

    this.newInterval();

    return carouselCont;
  }
}

export default Carousel;
