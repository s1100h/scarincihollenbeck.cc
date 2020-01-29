/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';
import Slider from 'react-slick';
import { PulseLoader } from 'react-spinners';
import loadable from '@loadable/component';
import ArchiveHead from '../../components/Head/archive';
import Search from '../../components/Search';
import FullWidth from '../../layouts/FullWidth';
import LargeSidebar from '../../layouts/LargeSidebar';
import Breadcrumbs from './Breadcrumbs';
import CategoryHeader from './CategoryHeader';

import { makeTitle } from '../../utils/helpers';
import noImg from '../../images/no-image-found-diamond.png';


// lazy load components
const SliderContent  = loadable(() => import('./SliderContent'));
const ColumnContent = loadable(() => import('./ColumnContent'));
const FeaturedArticle = loadable(() => import('./FeaturedArticle'));
const MainSidebarContent = loadable(() => import('./MainSidebarContent'));

import './index.scss';

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <FaAngleDoubleRight
      className="post-scroll post-scroll-right"
      role="button"
      tabIndex={0}
      onKeyDown={onClick}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FaAngleDoubleLeft
      className="post-scroll post-scroll-left"
      role="button"
      tabIndex={0}
      onKeyDown={onClick}
      onClick={onClick}
    />
  );
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
      corePractices: [],
      fiCategories: [],
      breadCrumb: [],
      categorySlug: '',
      description: '',
      spinner: false,
      seo: {},

    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { category } = match.params;
    const categorySlug = category;

    this.setState({
      categorySlug: category,
      breadCrumb: [category],
      spinner: true,
    });

    fetch(`${process.env.API_URL}/wp-json/category/posts/${categorySlug}`)
      .then((res) => res.json())
      .then((data) => {
        const {
          archives,
          authors,
          latest,
          main,
          practices,
          seo,
          description,
        } = data;

        this.setState({
          archives,
          authors,
          latest,
          main,
          practices,
          seo,
          description,
          spinner: false,
        });
      });

    if (categorySlug === 'firm-news' || categorySlug === 'firm-events') {
      // get core practices
      fetch(`${process.env.API_URL}/wp-json/practice-portal/page`)
        .then((res) => res.json())
        .then((data) => {
          const cPractices = data.filter((p) => p.category === 'Core Practices');
          const corePractices = cPractices.map((cp) => ({
            name: cp.title,
            link: cp.slug,
          }));
          this.setState({ corePractices });
        });
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
      seo,
      description,
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

    return (
      <div>
        <ArchiveHead seo={seo} />
        {
          (!spinner) ? (
            <div>
              <FullWidth>
                <Breadcrumbs
                  breadCrumb={breadCrumb}
                  categorySlug={categorySlug}
                />
              </FullWidth>
              <LargeSidebar
                body={(<CategoryHeader title={makeTitle(categorySlug)} content={description} />)}
                sidebar={
                  (
                    <div>
                      <small className="mb-3">
                        Not what you are looking for? Feel free to see search out site to find the right attorney for your business.
                      </small>
                      <Search />
                    </div>
                  )
                }
              />
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
              { (categorySlug === 'firm-events' || categorySlug === 'firm-news') ? (
                <ColumnContent
                  colOneTitle="Scarinci Hollenbeck Core Practices"
                  colOneContent={corePractices}
                  colTwoTitle="Firm Insight's Categories"
                  colTwoContent={fiCategories}
                />
              ) : ''}
              { (categorySlug === 'law-firm-insights') ? (
                <ColumnContent
                  colOneTitle="More from our attorneys"
                  colOneContent={authors}
                  colTwoTitle="More about our areas of law<"
                  colTwoContent={practices}
                />
              ) : ''}
              { practices.map((val) => (
                <FullWidth className="col-sm-12 mt-5" key={val.id}>
                  <div className="line-header">
                    <h3 className="text-uppercase">
                      {val.name}
                    </h3>
                  </div>
                  <Slider {...firmSettings}>
                    {val.posts.map((v) => (
                      <div key={v.title} className="px-3 pt-5 pb-2">
                        <a href={v.link}>
                          <img src={v.image ? v.image : noImg} className="img-fluid" alt={v.title} />
                          <h5 className="mt-3 mb-1">{v.title}</h5>
                          <p className="text-muted small-excerpt">
                            {v.excerpt}
                          </p>
                        </a>
                      </div>
                    ))}
                  </Slider>
                </FullWidth>
              ))}
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
