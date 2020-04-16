import React, { Component } from 'react';
import ArchiveLayout from '../../layouts/ArchiveLayout';
import ArchiveHead from '../../components/Head/archive';
import BreadCrumbs from '../../components/BreadCrumbs';
import SideBar from './SideBar';
import Body from './Body';

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      news: [],
      events: [],
      insight: [],
      bio: [],
      practices: [],
      pageNums: [],
      currentPage: '',
      breadCrumb: [],
      categorySlug: '',
      seo: {},
    };

    this.getPosts = this.getPosts.bind(this);
  }


  componentDidMount() {
    const { author, pageNum } = this.props.match.params;
    let page = 1;
    const breadCrumb = [author, 1];

    if (pageNum !== undefined) {
      page = pageNum;
      breadCrumb[1] = pageNum;
    }
    this.setState({
      breadCrumb, categorySlug: author, currentPage: page,
    }, () => {
      this.getPosts(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/author/posts/${author}/${page}`, author);
    });
  }

  getPosts(url, authorName) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const {
          pages, results, seo,
        } = data;

        this.setState({
          results, seo,
        });
        const pageNums = [];
        for (let i = 1; i <= pages; i += 1) {
          pageNums.push(i);
        }
        this.setState({ pageNums });
      })
      .then(() => {
        fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/author/bio/${authorName}`)
          .then((res) => res.json())
          .then((results) => {
            const { bio, practices } = results;

            const bioData = [bio];

            this.setState({
              bio: bioData,
              practices,
            });
          });
      })
      .then(() => {
        // news & insights & events
        fetch(`${process.env.REACT_APP_CACHED_API}/cached/latest-articles`)
          .then((res) => res.json())
          .then((data) => {
            const { firmNews, firmInsights, firmEvents } = data;
            this.setState({
              news: firmNews,
              events: firmEvents,
              insight: firmInsights,
            });
          });
      });
  }

  render() {
    const {
      results,
      news,
      events,
      insight,
      pageNums,
      breadCrumb,
      categorySlug,
      currentPage,
      bio,
      practices,
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
              bio={bio}
              practices={practices}
            />
)}
        />
      </div>
    );
  }
}

export default Author;
