import React, { Component } from 'react';
import Slider from 'react-slick';
import Slide from './Slide';
import './index.scss';

const NextArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-right just-in-toggles just-in-toggle-right" onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-left just-in-toggles just-in-toggle-left" onClick={onClick} />;
};

class JustInCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };
  
    fetch(`http://localhost/shlaw.dev.cc/wp-json/just-in/posts`, {headers})
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1690,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="JustInCarousel d-block mx-auto">
        <Slider {...settings}>
          {
              (this.state.posts) ? this.state.posts.map(val => (
                <Slide
                  key={val.id}
                  date={val.date}
                  image={val.image}
                  link={val.link}
                  category={val.category}
                  location={val.location}
                  title={val.title}
                />
              )) : ''
          }
        </Slider>
      </div>
    );
  }
}

export default JustInCarousel;