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
            <img src="https://www.lipmanhearne.com/wp-content/uploads/2014/11/Thinking-Wide-5.jpg" alt="displayed image" />
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
