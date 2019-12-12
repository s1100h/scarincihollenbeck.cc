/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import FullWidth from '../../components/FullWidth';
import LargeSidebar from '../../components/LargeSidebar';
import Breadcrumbs from './Breadcrumbs';
import FeaturedArticle from './FeaturedArticle';
import MainSidebarContent from './MainSidebarContent';
import SubscriptionForm from './SubscriptionForm';
import { makeTitle } from '../../utils/helpers';
import './index.scss';

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
    } = this.state;

    const seo = {
      title: `${makeTitle(categorySlug)}`,
      metaDescription: `stuff`
    }

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
                <BreadCrumbs breadCrumb={breadCrumb} categorySlug={categorySlug} />
              </FullWidth>
              <LargeSidebar
                body={(<FeaturedArticle main={main} />)}
                sidebar={(<MainSidebarContent latest={latest} />)}
                />
                <FullWidth>
                  <SlideContent title="MOST RECENT" slides={archives} />
                </FullWidth>
                <FullWidth>
                  <div className="line-header">
                    <h3>DISCOVER</h3>
                  </div>
                </FullWidth>
                {
                  (categorySlug === 'firm-events' || categorySlug === 'firm-news' ) ? (
                    <ColumnContent
                      colOneTitle
                      colOneContent
                      colTwoTitle
                      colTwoContent
                    />
                  ) : ''
                }
                <ColumnContent />
                {
                  /**
                   * FullWidth -- Content Slider
                   * Column Content
                   * Practice Slider
                   * FullWidth -- archive links
                   */
                }
            </div>

          ) : <PulseLoader color="#D02422" loading={spinner} />
        }
          {
            (categorySlug === 'law-firm-insights') ? (
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
            (categorySlug === 'firm-events' || categorySlug === 'firm-news') ? (
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
                    <a href={`${process.env.API_URL}/practices/public-law/`} className="blue-title proxima-bold mb-0">Government & Public Law</a>
                  </li>
                </ul>
              </div>
            ) : ''
          }
          {
            (categorySlug === 'law-firm-insights') ? (
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
                    <a href={`${process.env.API_URL}/category/law-firm-insights/litigation/`} className="blue-title proxima-bold mb-0">Public Law</a>
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
              <a href={`${window.location.origin}/archives/${categorySlug}`} className="red-title">
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
