/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Slider from 'react-slick';
import SubscriptionForm from './SubscriptionForm';
import { makeTitle, sortByKey } from '../../utils/helpers';
import noImg from '../../no-image-found-diamond.png';
import './index.scss';

const NextArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-right post-scroll post-scroll-right" role="button" tabIndex={0} onKeyDown={onClick} onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return <i className="fas fa-angle-double-left post-scroll post-scroll-left" role="button" tabIndex={0} onKeyDown={onClick} onClick={onClick} />;
};

class CategoryBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archives: [],
      authors: [],
      latest: [],
      main: [],
      practices: [],
      breadCrumb: [],
      categorySlug: '',

    };
  }

  componentDidMount() {
    const currentURL = window.location.href;
    let categorySlug = 'business-law';

    if (currentURL !== 'http://localhost:9000/category-index.html') {
      const urlSplit = currentURL.split('/');
      const filtered = urlSplit.filter(a => a !== '');
      categorySlug = filtered[filtered.length - 1];

      // find current breadcrumbs
      const breadCrumb = filtered.splice(filtered.indexOf('category') + 1, currentURL.length);
      this.setState({ breadCrumb });
      this.setState({ categorySlug });
    } else {
      this.setState({ categorySlug });
      this.setState({ breadCrumb: [categorySlug] });
    }

    fetch(`${process.env.API_URL}/wp-json/category/posts/${categorySlug}`)
      .then(res => res.json())
      .then((data) => {
        const {
          archives,
          authors,
          latest,
          main,
          practices,
        } = data;

        const sortedAuthors = sortByKey(authors, 'lastName');

        this.setState({
          archives,
          authors: sortedAuthors,
          latest,
          main,
          practices,
        });
      });
  }

  render() {
    const {
      archives,
      authors,
      latest,
      main,
      practices,
      breadCrumb,
      categorySlug,
    } = this.state;

    const firmSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const firmInsightsBreadCrumbUrl = breadCrumb.map(bc => bc);

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-0 mb-4">
            <h6>
              <span>
                <a href={`${window.location.origin}`} className="red-title proxima-bold">HOME</a>
                <strong className="text-black mt-2 mx-2 proxima-bold">
                  <i className="fas fa-caret-right" />
                </strong>
              </span>
              {
                ((categorySlug !== 'firm-events') && (categorySlug !== 'firm-news') && !(firmInsightsBreadCrumbUrl.indexOf('law-firm-insights') > -1)) ? (
                  <span>
                    <a href={`${window.location.origin}/category/law-firm-insights`} className="red-title proxima-bold">LAW FIRM INSIGHTS</a>
                    <strong className="text-black mt-2 mx-2 proxima-bold">
                      <i className="fas fa-caret-right" />
                    </strong>
                  </span>
                ) : ''
              }

              {
                breadCrumb.map((val, indx) => ((indx < breadCrumb.length - 1)
                  ? (
                    <span key={val}>
                      <span>
                        <a href={`${window.location.origin}/category/${val}`} className="red-title proxima-bold">
                          {
                            (val === categorySlug)
                              ? (<u>{makeTitle(val)}</u>)
                              : `${makeTitle(val)}`
                          }
                        </a>
                      </span>
                      <strong className="text-black mt-2 mx-2 proxima-bold">
                        <i className="fas fa-caret-right" />
                      </strong>
                    </span>
                  )
                  : (
                    <span key={val}>
                      <a href={`${window.location.origin}/category/${val}`} className="red-title proxima-bold">
                        {
                          (val === categorySlug)
                            ? (<u>{makeTitle(val)}</u>)
                            : `${makeTitle(val)}`
                        }
                      </a>
                    </span>
                  )))
              }
            </h6>
          </div>
          <div className="col-lg-8 col-sm-12 border-right">
            <article>
              {
                main.map(val => (
                  <div className="main" key={val.title}>
                    <a href={val.link}>
                      <img src={val.image ? val.image : noImg} className="img-fluid" alt={val.title} />
                    </a>
                    <p className="mt-5 mb-4">
                      <a href={val.category.link} className="text-muted ft-01 text-uppercase">
                        {val.category.name}
                      </a>
                    </p>
                    <h1 className="mb-4 mt-3 display-4">
                      <a href={val.link}>
                        {val.title}
                      </a>
                    </h1>
                    <p className="text-muted mt-4 mb-4 mr-4">
                      {val.excerpt}
                    </p>
                    <hr />
                    <p className="mt-4 mb-4 ft-13">
                      <span className="text-black">BY </span>
                      {
                        val.author.map((a, indx) => (
                          (indx < val.author.length - 1)
                            ? (
                              <a key={a.name} href={a.link} className="text-black text-uppercase">
                                <u>{`${a.name},`}</u>
                                {' '}
                              </a>
                            )
                            : (
                              <a key={a.name} href={a.link} className="text-black text-uppercase">
                                <u>{a.name}</u>
                              </a>
                            )
                        ))
                      }
                    </p>
                  </div>
                ))
              }
            </article>
          </div>
          <div className="col-lg-4 col-sm-12 border-right">
            <ul className="no-dots mx-3 mt-0">
              {
                latest.map(val => (
                  <li key={val.title} className="w-100 mb-5">
                    <a href={val.link}>
                      <img src={val.image ? val.image : noImg} className="img-fluid" alt={val.title} />
                      <h5 className="mt-3 mb-1">{val.title}</h5>
                      <p className="text-muted small-excerpt">
                        {val.excerpt}
                      </p>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="col-sm-12 mt-5">
            <div className="line-header">
              <h3>MOST RECENT</h3>
            </div>
            <Slider {...firmSettings}>
              {
                archives.map(val => (
                  <div key={val.title} className="px-3 pt-5 pb-2">
                    <a href={val.link}>
                      <img src={val.image ? val.image : noImg} className="img-fluid" alt={val.title} />
                      <h5 className="mt-3 mb-1">{val.title}</h5>
                      <p className="text-muted small-excerpt">
                        {val.excerpt}
                      </p>
                    </a>
                  </div>
                ))
              }
            </Slider>
          </div>
          <div className="col-sm-12 mt-5">
            <div className="line-header">
              <h3>DISCOVER</h3>
            </div>
          </div>
          {
            (categorySlug !== 'firm-events' && categorySlug !== 'firm-news') ? (
              <div className="col-sm-12 col-md-3 mt-5 border-right">
                <h5 className="red-title">More from our attorneys</h5>
                <hr />
                <ul className="ml-0 mh-75">
                  {
                    authors.map(val => (
                      <li key={val.name} className="blue-title ml-3">
                        <a href={val.link} className="blue-title proxima-bold mb-0">{val.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ) : ''
          }
          {
            (categorySlug === 'firm-events' || categorySlug === 'firm-news' || practices.length === 0) ? (
              <div className="col-sm-12 col-md-3 mt-5 border-right">
                <h5 className="red-title">Scarinci Hollenbeck Core Practices</h5>
                <hr />
                <ul className="ml-0">
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/practices/commercial-real-estate/`} className="blue-title proxima-bold mb-0">Commercial Real Estate</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/practices/corporate-transactions-business/`} className="blue-title proxima-bold mb-0">Corporate Transactions & Business</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/practices/environmental-and-land-use/`} className="blue-title proxima-bold mb-0">Environmental & Land Use</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/practices/intellectual-property/`} className="blue-title proxima-bold mb-0">Intellectual Property</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/practices/labor-employment/`} className="blue-title proxima-bold mb-0">Labor & Employment</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/practices/litigation/`} className="blue-title proxima-bold mb-0">Litigation</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/practices/tax-trusts-estates/`} className="blue-title proxima-bold mb-0">Tax, Trust & Estates</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/practices/public-law/`} className="blue-title proxima-bold mb-0">Government & Law</a>
                  </li>
                </ul>
              </div>
            ) : ''
          }
          {
            (categorySlug !== 'firm-events' && categorySlug !== 'firm-news' && practices.length > 0) ? (
              <div className="col-sm-12 col-md-4 mt-5 border-right">
                <h5 className="red-title">More about our areas of law</h5>
                <hr />
                <ul className="ml-0">
                  {
                    practices.map(val => (
                      <li key={val.name} className="blue-title ml-3">
                        <a href={val.link} className="blue-title proxima-bold mb-0">{val.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ) : ''
          }
          {
            (categorySlug === 'firm-news' || categorySlug === 'firm-events') ? (
              <div className="col-sm-12 col-md-4 mt-5 border-right">
                <h5 className="red-title">Firm Insight's Categories</h5>
                <hr />
                <ul className="ml-0">
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/category/law-firm-insights/business-law/`} className="blue-title proxima-bold mb-0">Business Law</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/category/law-firm-insights/cannabis-law/`} className="blue-title proxima-bold mb-0">Cannabis Law</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/category/law-firm-insights/commercial-real-estate/`} className="blue-title proxima-bold mb-0">Commercial Real Estate</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/law-firm-insights/entertainment-and-media/`} className="blue-title proxima-bold mb-0">Entertainment and Media</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/law-firm-insights/environmental-land-use/`} className="blue-title proxima-bold mb-0">Environmental and Land Use</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/category/law-firm-insights/intellectual-property/`} className="blue-title proxima-bold mb-0">Intellectual Property</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/category/law-firm-insights/labor-employment/`} className="blue-title proxima-bold mb-0">Labor and Employment</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/category/law-firm-insights/litigation/`} className="blue-title proxima-bold mb-0">Litigation</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/category/law-firm-insights/public-law/`} className="blue-title proxima-bold mb-0">Public Law</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/category/law-firm-insights/tax/`} className="blue-title proxima-bold mb-0">Tax</a>
                  </li>
                  <li className="blue-title ml-3">
                    <a href={`${process.env.API_URL}/category/law-firm-insights/technology/`} className="blue-title proxima-bold mb-0">Technology</a>
                  </li>
                </ul>
              </div>
            ) : ''
          }
          <div className="col-sm-12 col-md-5 mt-5">
            <h5 className="red-title">Join our mailing list!</h5>
            <hr />
            <div className="ModalForm-main">
              <p className="text-center text-muted small-excerpt">Enter your email and select a category(s) below.</p>
              <SubscriptionForm />
            </div>
          </div>
          {
            practices.map(val => (
              <div className="col-sm-12 mt-5" key={val.id}>
                <div className="line-header">
                  <h3 className="text-uppercase">
                    {val.name}
                  </h3>
                </div>
                <Slider {...firmSettings}>
                  {
                  val.posts.map(v => (
                    <div key={v.title} className="px-3 pt-5 pb-2">
                      <a href={v.link}>
                        <img src={v.image ? v.image : noImg} className="img-fluid" alt={v.title} />
                        <h5 className="mt-3 mb-1">{v.title}</h5>
                        <p className="text-muted small-excerpt">
                          {v.excerpt}
                        </p>
                      </a>
                    </div>
                  ))
                }
                </Slider>
              </div>
            ))
          }
          <div className="col-sm-12 border-top mt-5">
            <p className="text-center lead mt-4">
              <small>
                <em>Looking for something specific, feel free to search our archives.</em>
              </small>
            </p>
            <p className="text-center">
              <a href={`${window.location.origin}/archive/${categorySlug}`} className="red-title">
                <u>Site Archives &gt;&gt;</u>
              </a>
            </p>
          </div>
        </div>

      </div>
    );
  }
}

export default CategoryBody;
