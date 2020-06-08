/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ArchiveHead from '../../components/Head/archive';
import Search from '../../components/Search';
import ErrorBoundary from '../../components/ErrorBoundary';
import FullWidth from '../../layouts/FullWidth';
import LargeSidebar from '../../layouts/LargeSidebar';
import Breadcrumbs from './Breadcrumbs';
import CategoryHeader from './CategoryHeader';
import SliderContent from './SliderContent';
import ColumnContent from './ColumnContent';
import FeaturedArticle from './FeaturedArticle';
import MainSidebarContent from './MainSidebarContent';
import { makeTitle, sortByKey, headers } from '../../utils/helpers';

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

  async componentDidMount() {
    const { match } = this.props;
    const { category } = match.params;
    const categorySlug = category;
    const categoryResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/category/posts/${categorySlug}`, { headers });
    const categoryJson = await categoryResponse.json();
    const {
      archives,
      authors,
      latest,
      main,
      practices,
      seo,
      description,
    } = categoryJson;

    const sortedAuthors = sortByKey(authors, 'lastName');

    this.setState({
      categorySlug: category,
      breadCrumb: [category],
      archives,
      authors: sortedAuthors.filter(author => author.name !== 'Scarinci Hollenbeck'),
      latest,
      main,
      practices,
      seo,
      description,
    });

    if(practices.length === 0) {
      const firmInsightsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/category/firm-insights-children`, { headers });
      const firmInsightsJson = await firmInsightsResponse.json();
      this.setState({fiCategories: firmInsightsJson});
    }


    if (categorySlug === 'firm-news' || categorySlug === 'firm-events') {
      const practicesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, { headers });
      const firmInsightsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/category/firm-insights-children`, { headers });
      const practicesJson = await practicesResponse.json();
      const firmInsightsJson = await firmInsightsResponse.json();

      const corePractices = practicesJson.map((cp) => ({
        name: cp.title,
        link: cp.slug,
      }));

      this.setState({ corePractices, fiCategories: firmInsightsJson });
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
      <ErrorBoundary>
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
          ) : (
            <ColumnContent
              colOneTitle="More from our attorneys"
              colOneContent={authors}
              colTwoTitle={(practices.length > 0) ? "More about our areas of law": "Firm Insight's Categories" }
              colTwoContent={(practices.length > 0) ? practices : fiCategories }
            />
          )}
          { practices.map((val) => (val.name !== 'Uncategorized') && (
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
      </ErrorBoundary>
    );
  }
}

export default CategoryBody;
