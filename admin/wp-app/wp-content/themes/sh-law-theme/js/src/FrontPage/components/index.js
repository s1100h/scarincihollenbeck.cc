/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Slider from 'react-slick';
import { sortByKey } from '../../utils/helpers';
import ShDiamond from '../../sh-mini-diamond.png';
import noImg from '../../no-image-found-diamond.png';
import Corona from './Corona';
import './index.scss';


const PostsNextArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-right post-scroll post-scroll-right" role="button" tabIndex={0} onKeyDown={onClick} onClick={onClick} />;
};

const PostsPrevArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-left post-scroll post-scroll-left" role="button" tabIndex={0} onKeyDown={onClick} onClick={onClick} />;
};

const LocationsNextArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-right post-scroll location-scroll-right" role="button" tabIndex={0} onKeyDown={onClick} onClick={onClick} />;
};

const LocationsPrevArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-left post-scroll location-scroll-left" role="button" tabIndex={0} onKeyDown={onClick} onClick={onClick} />;
};

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      posts: [],
      locations: [],
      coronaPosts: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onCategorySelection = this.onCategorySelection.bind(this);
  }

  componentDidMount() {
    // fetch latest firm news & firm event posts
    fetch(`${process.env.API_URL}/wp-json/category/posts/firm-news`)
      .then(res => res.json())
      .then((data) => {
        const posts = data.latest;
        this.setState({ posts });
      })
      .then(() => {
        fetch(`${process.env.API_URL}/wp-json/category/posts/firm-events`)
          .then(res => res.json())
          .then((data) => {
            const posts = data.latest;
            this.setState(prevState => ({ posts: prevState.posts.concat(posts) }));
          });
      });

    // fetch office locations
    fetch(`${process.env.API_URL}/wp-json/location-portal/offices`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ locations: data });
      });

    // fetch corona virus news
    fetch(`${process.env.API_URL}/wp-json/wp/v2/posts/?categories=20250`)
      .then(res => res.json())
      .then((data) => {
        const coronaPosts = [];

        data.forEach((post) => {
          coronaPosts.push({
            title: post.title.rendered,
            link: post.link,
            id: post.id,
          });
        });
        this.setState({ coronaPosts });
      });
  }

  onChange(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  }


  onCategorySelection(event) {
    window.location = event.target.value;
  }

  render() {
    const {
      searchTerm,
      posts,
      locations,
      coronaPosts,
    } = this.state;

    const sortedLocations = sortByKey(locations, 'id');
    const sortedPosts = sortByKey(posts, 'date');

    const postSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      className: 'fp-newsevent-slider',
      nextArrow: <PostsNextArrow />,
      prevArrow: <PostsPrevArrow />,
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

    const locationSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <LocationsNextArrow />,
      prevArrow: <LocationsPrevArrow />,
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
      <div>
        <div className="jumbotron jumbotron-fluid city-background">
          <div className="container bg-black animated fadeInUp fast mt-4">
            <div className="row">
              <div className="col-sm-12 col-md-6 border-right">
                <h1 className="text-white mx-5 mt-5 display-32 text--shadow animated fadeInUp fast">Scarinci Hollenbeck Covid-19 Crisis Management Group</h1>
                <p className="lead text-white text--shadow mx-5 animated fadeInUp slow">Scarinci Hollenbeck is 100% operational and ready to assist clients without any business disruption.</p>
                <div className="container mt-4 ml-4">
                  <div className="row">
                    <div className="col-sm-12 col-md-5 mb-3">
                      <a href={`${process.env.API_URL}/firm-news/client-alert/client-alert-covid-19/`} className="btn btn-danger p-2 ml-3 shadow lift ft-11 animated fadeInUp slow fnt-btn">
                        Client Message
                        <i className="fa fa-angle-double-right text-white ml-2" />
                      </a>
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <a href={`${process.env.API_URL}/covid-19-crisis-management-unit/`} className="btn btn-danger p-2 shadow lift ft-11 animated fadeInUp slow fnt-btn">
                        Resource Center
                        <i className="fa fa-angle-double-right text-white ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <img src={ShDiamond} alt="scarinci hollenbeck diamond" className="mt-3 p-2 animated fadeInUp slow mx-auto d-block" />
                <h2 className="text-white text-center display-32 text--shadow animated fadeInUp slow">How can we help?</h2>
                <form role="search" className="animated fadeInUp slow mx-3 mt-5 mb-5" method="GET" action={process.env.API_URL} onSubmit={this.onSubmit}>
                  <span className="screen-reader-text">Search for:</span>
                  <input name="s" type="search" aria-labelledby="searchbutton" placeholder="What are you searching for..." value={searchTerm} onChange={this.onChange} className="form-control mw-100 p-2 mx-auto d-block" />
                  <button type="submit" id="searchbutton" className="btn btn-danger mt-3 mx-auto d-block btn-lg animated fadeInUp slow fnt-btn">
                    Search
                    <i className="fa fa-angle-double-right text-white ml-2 animated fadeInUp slow" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 px-0">
              <div className="line-header"><h3>ABOUT OUR FIRM</h3></div>
            </div>
            <div className="col-sm-12 col-md-4 mt-5 border-right">
              <h5 className="red-title">Firm Overview</h5>
              <hr />
              <p className="text-muted">With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm. With offices in New Jersey, New York City, San Francisco, and the District of Columbia, we serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them.</p>
              <a href={`${process.env.API_URL}/firm-overview`} className="red-title proxima-bold">
                <u>
                  Read More &gt;&gt;
                </u>
              </a>
            </div>
            <div className="col-sm-12 col-md-4 mt-5 border-right">
              <h5 className="red-title">Core Practices</h5>
              <hr />
              <ul className="ml-4">
                <li className="blue-title">
                  <a href={`${process.env.API_URL}/practices/commercial-real-estate/`} className="blue-title proxima-bold">Commercial Real Estate</a>
                </li>
                <li className="blue-title">
                  <a href={`${process.env.API_URL}/practices/corporate-transactions-business/`} className="blue-title proxima-bold">Corporate Transactions & Business</a>
                </li>
                <li className="blue-title">
                  <a href={`${process.env.API_URL}/practices/environmental/`} className="blue-title proxima-bold">Environmental</a>
                </li>
                <li className="blue-title">
                  <a href={`${process.env.API_URL}/practices/intellectual-property/`} className="blue-title proxima-bold">Intellectual Property</a>
                </li>
                <li className="blue-title">
                  <a href={`${process.env.API_URL}/practices/labor-employment/`} className="blue-title proxima-bold">Labor & Employment</a>
                </li>
                <li className="blue-title">
                  <a href={`${process.env.API_URL}/practices/litigation/`} className="blue-title proxima-bold">Litigation</a>
                </li>
                <li className="blue-title">
                  <a href={`${process.env.API_URL}/practices/tax-trusts-estates/`} className="blue-title proxima-bold">Tax, Trust & Estates</a>
                </li>
                <li className="blue-title">
                  <a href={`${process.env.API_URL}/practices/public-law/`} className="blue-title proxima-bold">Government & Public Law</a>
                </li>
              </ul>
              <a href={`${process.env.API_URL}/practices`} className="red-title proxima-bold">
                <u>
                  All Practices &gt;&gt;
                </u>
              </a>
            </div>
            <div className="col-sm-12 col-md-4 mt-5">
              <h5 className="red-title">Firm Insights</h5>
              <hr />
              <p className="text-muted">Firm Insights is Scarinci Hollenbeck&apos;s library of articles written by our attorneys. It is our way of providing you with the most critical legal updates that could impact your business.</p>
              <form>
                <label>
                  <p className="text-muted">
                    Know what you&apos;re looking for? Select a category below:
                  </p>
                  <select className="home-select w-100 p-2" onChange={this.onCategorySelection}>
                    <option>Select Category</option>
                    <option value={`${[process.env.API_URL]}/category/law-firm-insights/commercial-real-estate/`}>Commercial Real Estate</option>
                    <option value={`${[process.env.API_URL]}/category/law-firm-insights/business-law/`}>Business Law</option>
                    <option value={`${process.env.API_URL}/category/law-firm-insights/cannabis-law/`}>Cannabis Law</option>
                    <option value={`${process.env.API_URL}/category/law-firm-insights/commercial-real-estate/`}>Commercial Real Estate</option>
                    <option value={`${process.env.API_URL}/category/law-firm-insights/entertainment-and-media/`}>Entertainment and Media</option>
                    <option value={`${process.env.API_URL}/category/law-firm-insights/environmental-land-use/`}>Environmental and Land Use</option>
                    <option value={`${process.env.API_URL}/category/law-firm-insights/intellectual-property/`}>Intellectual Property</option>
                    <option value={`${process.env.API_URL}/category/law-firm-insights/labor-employment/`}>Labor and Employment</option>
                    <option value={`${process.env.API_URL}/category/law-firm-insights/litigation/`}>Litigation</option>
                    <option value={`${process.env.API_URL}/category/law-firm-insights/public-law/`}>Public Law</option>
                    <option value={`${process.env.API_URL}/category/law-firm-insights/tax/`}>Tax</option>
                    <option value={`${process.env.API_URL}/category/law-firm-insights/technology/`}>Technology</option>
                  </select>
                </label>
              </form>
              <p className="my-3 small-excerpt mb-0">Not sure? Feel free to browse here.</p>
              <a href={`${process.env.API_URL}/category/law-firm-insights/`} className="red-title proxima-bold">
                <u>
                  Firm Insights &gt;&gt;
                </u>
              </a>
            </div>
            <div className="col-sm-12 mt-5 px-0">
              <div className="line-header"><h3>NEWS & EVENTS</h3></div>
            </div>
            <div className="col-sm-12 px-0">
              <Slider {...postSettings}>
                {
                sortedPosts.map(v => (
                  <div key={v.title} className="px-3 pt-5 pb-2">
                    <a href={v.link}>
                      <img src={v.image ? v.image : noImg} className="img-thumbnail mx-auto d-block" alt={v.title} />
                      <h5 className="mt-3 mb-2 text-center">{v.category}</h5>
                      <p className="text-muted small-excerpt text-center">
                        {v.title}
                      </p>
                    </a>
                  </div>
                ))
              }
              </Slider>
            </div>
            <div className="col-sm-12 mt-3 px-0">
              <div className="line-header"><h3>OUR OFFICES</h3></div>
            </div>
            <div className="col-sm-12 mt-5 px-0">
              <Slider {...locationSettings}>
                {
                sortedLocations.map(l => (
                  <div className="card w-95 mb-2" key={l.id}>
                    <a href={l.slug}>
                      <img src={l.featuredImg} alt={l.title} className="card-img-top" />
                      <p className="red-title m-3">
                        <strong>
                          {` ${l.title.toUpperCase()}`}
                        </strong>
                      </p>
                    </a>
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

export default FrontPage;