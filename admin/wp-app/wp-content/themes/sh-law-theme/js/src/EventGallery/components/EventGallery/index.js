/* eslint-disable react/prop-types */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import Slider from 'react-slick';
import SocialShare from './SocialShare';
import redBackground from '../../../sunsetnyc.png';
import './index.scss';

/* eslint-disable implicit-arrow-linebreak */
require('array.prototype.findindex');

const NextArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-right event-arrow event-arrow-right" tabIndex={0} role="button" onKeyDown={onClick} onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-left event-arrow event-arrow-left" tabIndex={0} role="button" onKeyDown={onClick} onClick={onClick} />;
};

class EventGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      title: '',
      pageNums: [],
      currentPage: 3,
      slug: '',
      url: '',
    };
  }

  componentWillMount() {
    const currentURL = window.location.pathname;
    let eventName = 'namm-2019';
    let page = 1;

    if (currentURL !== '/event-gallery-index.html') {
      const currentEvent = currentURL.split('/');
      const filtered = currentEvent.filter(el => el !== '' && el !== 'events' && el !== 'page');
      eventName = filtered[0];
      const cP = (filtered.length > 1) ? filtered[1] : 1;
      page = cP;
      this.setState({ currentPage: cP });
    }

    fetch(`${process.env.API_URL}/wp-json/events-gallery/event/${eventName}/${page}`)
      .then(res => res.json())
      .then((data) => {
        const {
          title,
          gallery,
          pages,
          slug,
        } = data;

        this.setState({ gallery });
        this.setState({ title });
        this.setState({ slug });
        const pageNums = [];
        for (let i = 1; i <= pages; i += 1) {
          pageNums.push(i);
        }
        this.setState({ pageNums });
        const keyword = window.location.hash.replace('#', '');
        const currentSlide = gallery.findIndex(x => x.title === keyword);
        const checkSlideIndex = (currentSlide === -1) ? 0 : currentSlide;
        this.setState({ url: gallery[checkSlideIndex].photo.thumbnail });
        this.slider.slickGoTo(checkSlideIndex);
      });
  }


  render() {
    const {
      title,
      gallery,
      pageNums,
      currentPage,
      slug,
      url,
    } = this.state;

    const prev = (currentPage > 2) ? currentPage - 1 : 1;
    const next = (currentPage < pageNums.length) ? currentPage + 1 : pageNums.length;

    const settings = {
      lazyRender: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      autoplay: true,
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 ml-5 mt-5">
            <div className="card-body">
              <div className="PhotoGrid">
                <div className="card PhotoGrid__title">
                  <img className="card-img img-fluid mh-125" src={redBackground} alt="red background" />
                  <div className="card-img-overlay">
                    <h1>{title.toUpperCase()}</h1>
                  </div>
                </div>
                <ul className="PhotoGrid__list d-flex flex-row flex-wrap justify-content-start">
                  {
                    gallery.map((val, index) => (
                      <li key={val.ID}>
                        <a
                          href={`#${val.title}`}
                          onClick={() => {
                            this.slider.slickGoTo(index);
                            this.setState({ url: val.photo.thumbnail });
                          }}
                        >
                          <img src={val.photo.thumbnail} alt={val.title} className="photo-width m-2" />
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="card-footer">
              {
                (pageNums.length > 0)
                  ? (
                    <nav aria-label="...">
                      <ul className="pagination">
                        <li className="page-item mr-2">
                          <a className="page-link" href={`${window.location.origin}/events/${slug}/${prev}`} tabIndex="-1">Previous</a>
                        </li>
                        {
                          pageNums.map(val => (
                            <li className="page-item mr-2" key={`page-${val}`}>
                              <a className="page-link" href={`${window.location.origin}/events/${slug}/page/${val}`}>{val}</a>
                            </li>
                          ))
                        }
                        <li className="page-item mr-2">
                          <a className="page-link" href={`${window.location.origin}/events/${slug}/page/${next}`}>Next</a>
                        </li>
                      </ul>
                    </nav>
                  )
                  : ''
              }
            </div>
          </div>
          <div className="col-md-5 ml-5 mt-5">
            <div className="mt-2">
              <SocialShare url={url} />
              <Slider ref={slider => (this.slider = slider)} {...settings} className="EventSlider">
                {
                  gallery.map(val => (
                    <div key={val.ID}>
                      <img src={val.photo.large} alt={val.title} className="img-fluid" />
                    </div>
                  ))
                }
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventGallery;
