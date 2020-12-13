import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      imageIndex: 0,
      intervalID: null
    });
  }

  changeImage(index, intervalID) {
    this.setState({
      imageIndex: index,
      intervalID: intervalID
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

    clearInterval(this.state.intervalID);
    let nextIndex;
    if (this.state.imageIndex === this.props.images.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = this.state.imageIndex + 1;
    }
    const intervalID = setInterval(() => {
      this.changeImage(nextIndex, intervalID);
    }, 3000);

    return carouselCont;
  }
}

export default Carousel;
