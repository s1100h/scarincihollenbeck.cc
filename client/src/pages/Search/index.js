import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import ArchiveLayout from '../../layouts/ArchiveLayout';
import ArchivehHead from '../../components/Head/archive';
import BreadCrumbs from './BreadCrumbs';
import SideBar from './SideBar';
import './index.scss';

// lazy load components
import Body from './Body';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      results: [],
      news: [],
      events: [],
      insight: [],
      trending: [],
      pageNums: [],
      currentPage: '',
      breadCrumb: [],
      categorySlug: '',
      spinner: false,
    };

    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    let categorySlug; let page; let
      breadCrumb;
    const path = location.search;

    if (path.indexOf('/page/') > -1) {
      page = path.split('/page/').pop().replace('/', '');
      categorySlug = path.split('?=').pop().split('/page/')[0];
      breadCrumb = [categorySlug, page];
    } else {
      categorySlug = path.split('?=').pop();
      page = 1;
      breadCrumb = [categorySlug, page];
    }
    this.setState({
      breadCrumb, categorySlug, currentPage: page, spinner: true,
    }, () => {
      this.getPosts(`${process.env.API_URL}/wp-json/search/query/${categorySlug}/${page}`);
    });
  }

  getPosts(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const {
          pages, results, posts, term,
        } = data;
        this.setState({
          results, trending: posts, term, spinner: false,
        });
        const pageNums = [];
        for (let i = 1; i <= pages; i += 1) {
          pageNums.push(i);
        }
        this.setState({ pageNums });
      })
      .then(() => {
        // news & insights & events
        fetch('https://api.scarincilies.com/cached/latest-articles')
        .then((res) => res.json())
        .then((data) => {
          const { firmNews, firmInsights, firmEvents } = data;
          this.setState({
            news: firmNews,
            events: firmEvents,
            insight: firmInsights
          });
        });
      })
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
      spinner,
    } = this.state;

    // pagination set up
    const prev = (currentPage > 2) ? currentPage - 1 : 1;
    const next = (currentPage < pageNums.length) ? parseInt(currentPage, 10) + 1 : pageNums.length;
    const cp = window.location.href.split('/').filter((a) => a !== '');
    const active = (typeof cp[cp.length - 1] === 'number') ? cp[cp.length - 1] : 1;

    const seo = {
      title: `You searched for ${categorySlug} | Scarinci Hollenbeck`,
    };


    return (
      <div>
        <ArchivehHead seo={seo} />
        {
          (!spinner) ? (
            <ArchiveLayout
              header={(<BreadCrumbs breadCrumb={breadCrumb} categorySlug={categorySlug} />)}
              body={(
                <Body
                  results={results}
                  categorySlug={categorySlug}
                  next={next}
                  prev={prev}
                  pageNums={pageNums}
                  news={news}
                  events={events}
                  insight={insight}
                  active={active}
                />
 )}
              sidebar={(
                <SideBar
                  trending={trending}
                />
)}
            />
          ) : <PulseLoader color="#D02422" loading={spinner} />
        }
      </div>
    );
  }
}

export default Search;
