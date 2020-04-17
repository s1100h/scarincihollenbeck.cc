/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ArchiveHead from '../../components/Head/archive';
import Search from '../../components/Search';
import FullWidth from '../../layouts/FullWidth';
import LargeSidebar from '../../layouts/LargeSidebar';
import Breadcrumbs from './Breadcrumbs';
import CategoryHeader from './CategoryHeader';
import SliderContent from './SliderContent';
import ColumnContent from './ColumnContent';
import FeaturedArticle from './FeaturedArticle';
import MainSidebarContent from './MainSidebarContent';
import { makeTitle, sortByKey } from '../../utils/helpers';

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
    });

    fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/category/posts/${categorySlug}`, {
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip',
        'Accept-Encoding': 'gzip',
      },
    })
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

        const sortedAuthors = sortByKey(authors, 'lastName')

        this.setState({
          archives,
          authors: sortedAuthors,
          latest,
          main,
          practices,
          seo,
          description,
        });
      });

    if (categorySlug === 'firm-news' || categorySlug === 'firm-events') {
      // get core practices
      fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, {
        headers: {
          'Content-Type': 'application/json',
          'Content-Encoding': 'gzip',
          'Accept-Encoding': 'gzip',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const corePractices = data.map((cp) => ({
            name: cp.title,
            link: cp.slug,
          }));
          this.setState({ corePractices });
        });
      
      // get firm insights categories
      fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/category/firm-insights-children`, {
        headers: {
          'Content-Type': 'application/json',
          'Content-Encoding': 'gzip',
          'Accept-Encoding': 'gzip',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.setState({ fiCategories: data });
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
      corePractices,
      fiCategories,
      seo,
      description,
    } = this.state;


    return (
      <div>
        <ArchiveHead seo={seo} />
        <div id="category">
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
              colTwoTitle="More about our areas of law"
              colTwoContent={practices}
            />
          ) : ''}
          { practices.map((val) => (
            <FullWidth className="col-sm-12 mt-5" key={val.id}>
              <SliderContent title={val.name} slides={val.posts} />              
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
      </div>
    );
  }
}

export default CategoryBody;
