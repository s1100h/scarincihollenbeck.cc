import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import { makeTitle } from '../../utils/helpers';
import ArchiveLayout from '../../layouts/ArchiveLayout';
import ArchiveHead from '../../components/Head/archive';
import BreadCrumbs from './BreadCrumbs';
import Sidebar from './Sidebar/';
import Body from './Body';
import './index.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      results: [0],
      news: [],
      events: [],
      insight: [],
      trending: [],
      pageNums: [],
      currentPage: '',
      breadCrumb: [],
      categorySlug: '',
    };

    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    let categorySlug, page, breadCrumb;
    const path = this.props.location.search;

    if (path.indexOf('/page/') > -1) {
      page = path.split('/page/').pop().replace('/', '');
      categorySlug = path.split('?=').pop().split('/page/')[0];
      breadCrumb = [categorySlug, page];
    } else {
      categorySlug = path.split('?=').pop();
      page = 1;
      breadCrumb = [categorySlug, page];
    }
        
    this.setState({ breadCrumb, categorySlug, currentPage: page }, () => {
      this.getPosts(`${process.env.API_URL}/wp-json/search/query/${categorySlug}/${page}`);
    });
  }

  getPosts(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const {
          pages, results, posts, term,
        } = data;
        this.setState({ results, trending: posts, term });
        const pageNums = [];
        for (let i = 1; i <= pages; i += 1) {
          pageNums.push(i);
        }
        this.setState({ pageNums });
      })
      .then(() => {
        // news
        fetch(`${process.env.API_URL}/wp-json/category/posts/firm-news`)
          .then(res => res.json())
          .then((data) => {
            const news = [...data.latest, ...data.archives];
            this.setState({ news });
          });
      })
      .then(() => {
        // events
        fetch(`${process.env.API_URL}/wp-json/category/posts/firm-events`)
          .then(res => res.json())
          .then((data) => {
            const events = [...data.latest, ...data.archives];
            this.setState({ events });
          });
      })

      .then(() => {
        // insights
        fetch(`${process.env.API_URL}/wp-json/category/posts/law-firm-insights`)
          .then(res => res.json())
          .then((data) => {
            const insight = [...data.latest, ...data.archives];
            this.setState({ insight });
          });
      });
  }

  render() {
    const {
      results,
      news,
      events,
      insight,
      trending,
      pageNums,
      breadCrumb,
      categorySlug,
      currentPage,
      term,
    } = this.state;

    // pagination set up
    const prev = (currentPage > 2) ? currentPage - 1 : 1;
    const next = (currentPage < pageNums.length) ? parseInt(currentPage, 10) + 1 : pageNums.length;
    const cp = window.location.href.split('/').filter(a => a !== '');
    const active = (typeof cp[cp.length - 1] === 'number') ? cp[cp.length - 1] : 1;


    return (
      <div>
        <ArchiveHead seo={seo} />
        {
          (!spinner) ? (
            <ArchiveLayout
              header={(<BreadCrumbs breadCrumb={breadCrumb} categorySlug={categorySlug} />)}
              body={(<Body
                results={results}
                categorySlug={categorySlug}
                next={next}
                prev={prev}
                pageNums={pageNums}
                news={news}
                events={events}
                insight={insight}
                active={active}
                /> )}
              sidebar={(<Sidebar
                bio={bio}
                practices={practices}
              />)}
            />
          ) : <PulseLoader color="#D02422" loading={spinner} />
        }      
      </div>
    );
  }
}

export default Search;
