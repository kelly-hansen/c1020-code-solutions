import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const carouselCont = (
      <div className="carousel-cont">
        <div className="chevron-cont">
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="center-cont">
          <div className="spacer"></div>
          <div className="img-cont">
            <img src={this.props.images[0]} alt="displayed image" />
          </div>
          <div className="indicators-cont">
            <div className="indicator selected"></div>
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
