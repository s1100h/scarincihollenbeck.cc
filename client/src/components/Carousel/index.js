import React, { Component } from 'react';
import NextArrow from './NextArrow';
import PreviousArrow from './PreviousArrow';
import JustInCarousel from './JustInCarousel';
import LargeArticleCarousel from './LargeArticleCarousel';
import LocationCarousel from './LocationCarousel';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
     startCount: 0,
     endCount: 2
    };
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.renderSlides = this.renderSlides.bind(this);
  }

  previousImage() {
    const { slides } = this.props;
    const { startCount, endCount } = this.state;    
    const arrLength = parseInt(slides.length, 10);

    const previousStartIndex = (startCount <= 0) ? arrLength - 3 : startCount - 1; 
    const previousEndIndex = (startCount <= 0 ) ?  arrLength - 1: endCount - 1;

    this.setState({ startCount: previousStartIndex });
    this.setState({ endCount: previousEndIndex });   
  }

  nextImage() {
    const { slides } = this.props;
    const { startCount, endCount } = this.state; 
    const arrLength = parseInt(slides.length, 10);

    const nextStartIndex = (endCount === arrLength) ?  0 : startCount + 1; 
    const nextEndIndex = (endCount === arrLength) ? 2 : endCount + 1;    
   
    this.setState({ startCount: nextStartIndex });
    this.setState({ endCount: nextEndIndex });
  }

  renderSlides() {
    const { slides, sliderType } = this.props;
    const { startCount, endCount } = this.state; 

    if (sliderType === 'LargeArticle') { 
      return slides.map((post, index) => (index >= startCount && index <= endCount) && <LargeArticleCarousel key={post.title} post={post} id={index} />)
    }

    if (sliderType === 'Location') {
      return slides.map((post, index) => (index >= startCount && index <= endCount) && <LocationCarousel key={post.id} post={post} id={index} />)
    }

    if(sliderType === 'JustInCarousel') {
      return slides.map((post, index) => (index >= startCount && index <= endCount) && <JustInCarousel key={post.id} post={post} id={index} />)
    }
    
  }

  render() {
    const {  arrowSize, slides, sliderType } = this.props; 
    return (
      <div className="mx-auto d-block w-100">
        <div id="carousel-slider">
          <PreviousArrow previousImage={this.previousImage} arrowSize={arrowSize} />
          <ul className="list-unstyled carousel-slider-track">
            {(slides.length > 0) && this.renderSlides()} 
          </ul>
          <NextArrow nextImage={this.nextImage} arrowSize={arrowSize}/>
        </div>
      </div>

    )
  }  
}

export default Carousel