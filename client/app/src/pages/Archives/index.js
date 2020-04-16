import React, { Component } from 'react';
import ArchiveHead from '../../components/Head/archive';
import ArchiveLayout from '../../layouts/ArchiveLayout';
import BreadCrumbs from './BreadCrumbs';
import SideBar from './SideBar';
import Body from './Body';

class Archives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      news: [],
      events: [],
      insight: [],
      trending: [],
      pageNums: [],
      currentPage: '',
      breadCrumb: [],
      categorySlug: '',
      seo: {}
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { categorySlug, pageNum } = match.params;
    let page = 1;
    const breadCrumb = [categorySlug, 1];

    if (pageNum !== undefined) {
      page = pageNum;
      breadCrumb[1] = pageNum;
    }

    this.setState({
      breadCrumb, categorySlug, currentPage: page
    }, () => {
      this.getPosts(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/archive/query/${categorySlug}/${page}`);
    });
  }

  getPosts(url) {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip',
        'Accept-Encoding': 'gzip'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        const {
          pages, results, posts, seo,
        } = data;

        this.setState({
          results, trending: posts, seo
        });
        const pageNums = [];
        for (let i = 1; i <= pages; i += 1) {
          pageNums.push(i);
        }
        this.setState({ pageNums });
      })
      .then(() => {
        // news & insights & events
        fetch(`${process.env.REACT_APP_CACHED_API}/cached/latest-articles`, {
          headers: {
            'Content-Type': 'application/json',
            'Content-Encoding': 'gzip',
            'Accept-Encoding': 'gzip'
          }
        })
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
      seo,
    } = this.state;

    // pagination set up
    const prev = (currentPage > 2) ? currentPage - 1 : 1;
    const next = (currentPage < pageNums.length) ? parseInt(currentPage, 10) + 1 : pageNums.length;
    const cp = window.location.href.split('/').filter((a) => a !== '');
    const active = (typeof cp[cp.length - 1] === 'number') ? cp[cp.length - 1] : 1;

    return (
      <div>
        <ArchiveHead seo={seo} />
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
      </div>
    );
  }
}

export default Archives;
