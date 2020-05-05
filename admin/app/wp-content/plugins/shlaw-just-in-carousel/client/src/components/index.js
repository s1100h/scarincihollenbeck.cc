/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Slider from 'react-slick';
import noImg from '../no-image-found-diamond.png';
import Card from './Card';
import './index.css';

require('es6-promise').polyfill();
require('isomorphic-fetch');


const NextJustInArrow = (props) => {
  const { onClick } = props;
  return <i role="button" tabIndex="0" className="fas fa-angle-double-right just-in-toggles just-in-toggle-right" onClick={onClick} onKeyPress={onClick} />;
};

const PrevJustInArrow = (props) => {
  const { onClick } = props;
  return <i role="button" tabIndex="0" className="fas fa-angle-double-left just-in-toggles just-in-toggle-left" onClick={onClick} onKeyPress={onClick} />;
};

class JustInCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    console.log(`${process.env.API_URL}/wp-json/just-in/posts`)
    fetch(`${process.env.API_URL}/wp-json/just-in/posts`)
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    const JustInSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <NextJustInArrow />,
      prevArrow: <PrevJustInArrow />,
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

    const { posts } = this.state;

    return (
      <div className="JustInCarousel d-block mx-auto">
        <Slider {...JustInSettings}>
          {
              (posts.length > 0) ? posts.map(val => (
                <Card
                  key={val.id}
                  date={val.date}
                  image={(val.image === false) ? noImg : val.image}
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
