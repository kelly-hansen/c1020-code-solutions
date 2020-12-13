import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      imageIndex: 0
    });
  }

  render() {
    const indicators = this.props.images.map((image, i) => {
      let imageClass;
      if (this.state.imageIndex === i) {
        imageClass = 'indicator selected';
      } else {
        imageClass = 'indicator';
      }
      return <div className={imageClass} key={i}></div>;
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

    return carouselCont;
  }
}

export default Carousel;
