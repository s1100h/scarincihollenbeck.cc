/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Slider from 'react-slick';
import { PulseLoader } from 'react-spinners';
import FullWidth from '../../layouts/FullWidth';
import LargeSidebar from '../../layouts/LargeSidebar';
import BreadCrumbs from './BreadCrumbs';
import FeaturedArticle from './FeaturedArticle';
import MainSidebarContent from './MainSidebarContent';
import SliderContent from './SliderContent';
import ColumnContent from './ColumnContent';
import { makeTitle } from '../../utils/helpers';
import noImg from '../../images/no-image-found-diamond.png';
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
      corePractices:[],
      fiCategories:[],
      breadCrumb: [],
      categorySlug: '',
      spinner: false,

    };
  }

  componentDidMount() {
    const { category } = this.props.match.params;
    const categorySlug = category;
        
    this.setState({
      categorySlug: category,
      breadCrumb: [category],
      spinner: true,
    });

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

        this.setState({
          archives,
          authors,
          latest,
          main,
          practices,
          spinner: false,
        });
      });

      if(categorySlug === 'firm-news' || categorySlug === 'firm-events') {
        // get core practices
        // get firm insights categories 
        fetch(`${process.env.API_URL}/wp-json/practice-portal/page`)
          .then(res => res.json())
          .then((data) => {
            const cPractices = data.filter(p => p.category === 'Core Practices');
            const corePractices = cPractices.map(cp => {
              return {
                name: cp.title,
                link: cp.slug
              }
            });
            this.setState({ corePractices });
          })
      }
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
      spinner,
      corePractices,
      fiCategories,
    } = this.state;

    const seo = {
      title: `${makeTitle(categorySlug)}`,
      metaDescription: `stuff`
    }

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

    return (
      <div>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.metaDescription}/>
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
          <link rel="canonical" href={window.location.href} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:site_name" content={seo.title} />
          <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
          <meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:width" content="750" />
          <meta property="og:image:height" content="350" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={seo.metaDescription} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:site" content="@S_H_Law" />
          <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta name="twitter:creator" content="@S_H_Law" /> 
        </Helmet>
        {
          (!spinner) ? (
            <div>
              <FullWidth>
                <BreadCrumbs
                  breadCrumb={breadCrumb}
                  categorySlug={categorySlug}
                />
              </FullWidth>
              <LargeSidebar
                body={(<FeaturedArticle main={main} />)}
                sidebar={(<MainSidebarContent latest={latest} />)}
                />
                <FullWidth>
                  <SliderContent title="MOST RECENT" slides={archives} />
                </FullWidth>
                <FullWidth>
                  <div className="line-header">
                    <h3>DISCOVER</h3>
                  </div>
                </FullWidth>
                { (categorySlug === 'firm-events' || categorySlug === 'firm-news' ) ? (
                    <ColumnContent
                      colOneTitle="Scarinci Hollenbeck Core Practices"
                      colOneContent={corePractices}
                      colTwoTitle="Firm Insight's Categories"
                      colTwoContent={fiCategories}
                    />
                  ) : ''
                }
                { (categorySlug === 'law-firm-insights') ? (
                    <ColumnContent
                      colOneTitle="More from our attorneys"
                      colOneContent={authors}
                      colTwoTitle="More about our areas of law<"
                      colTwoContent={practices}
                    />
                  ) : ''
                }
                { practices.map(val => (
                  <FullWidth className="col-sm-12 mt-5" key={val.id}>
                    <div className="line-header">
                      <h3 className="text-uppercase">
                        {val.name}
                      </h3>
                    </div>
                    <Slider {...firmSettings}>
                      {val.posts.map(v => (
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
                  </FullWidth>
                ))
              }
              <FullWidth className="border-top mt-5">
                <p className="text-center lead mt-4">
                  <small>
                    <em>Looking for something specific, feel free to search our archives.</em>
                  </small>
                </p>
                <p className="text-center">
                  <a href={`${window.location.origin}/archives/${categorySlug}`} className="red-title">
                    <u>Site Archives &gt;&gt;</u>
                  </a>
                </p>
              </FullWidth>
            </div>

          ) : <PulseLoader color="#D02422" loading={spinner} />
        }
      </div>
    );
  }
}

export default CategoryBody;
