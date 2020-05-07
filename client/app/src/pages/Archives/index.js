import React, { Component } from 'react';
import ArchiveHead from '../../components/Head/archive';
import ArchiveLayout from '../../layouts/ArchiveLayout';
import BreadCrumbs from '../../components/BreadCrumbs';
import SideBar from './SideBar';
import Body from './Body';
import { headers } from '../../utils/helpers';

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
      seo: {},
      loading: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { categorySlug, pageNum } = match.params;
    let page = 1;
    const breadCrumb = [categorySlug, 1];

    if (pageNum !== undefined) {
      page = pageNum;
      breadCrumb[1] = pageNum;
    }

    this.setState({ breadCrumb, categorySlug, currentPage: page, loading: true }, async () => {

      const postResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/archive/query/${categorySlug}/${page}`, { headers });
      const articlesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/latest-articles`, { headers });
      const postJson = await postResponse.json();
      const articleJson = await articlesResponse.json();
      const { pages, results, posts, seo } = postJson;
      const { firmNews, firmInsights, firmEvents } = articleJson;

      const pageNums = [];
      for (let i = 1; i <= pages; i += 1) {
        pageNums.push(i);
      }
  
      this.setState({
        results,
        seo,
        pageNums,
        trending: posts,
        news: firmNews,
        events: firmEvents,
        insight: firmInsights,
        loading: false
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
      seo,
      loading
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
              loading={loading}
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
