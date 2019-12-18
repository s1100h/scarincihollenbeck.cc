import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import { makeTitle } from '../../utils/helpers';
import ArchiveLayout from '../../layouts/ArchiveLayout';
import ArchiveHead from '../../components/Head/archive';
import BreadCrumbs from './BreadCrumbs';
import Sidebar from './Sidebar/';
import Body from './Body';
import './index.scss';

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
      term: '',
      currentPage: '',     
      breadCrumb: [],
      categorySlug: '',     
      spinner: false,
    };

    this.getPosts = this.getPosts.bind(this);
  }

  
  componentDidMount() {
    const { author, pageNum } = this.props.match.params;
    let page = 1;
    let breadCrumb = [author, 1];

    if(pageNum !== undefined) {
      page = pageNum;
      breadCrumb[1] = pageNum;
    };
    console.log(`${process.env.API_URL}/wp-json/author/posts/${author}/${page}`)
    this.setState({ breadCrumb, categorySlug: author, currentPage: page, spinner: true }, () => {
      this.getPosts(`${process.env.API_URL}/wp-json/author/posts/${author}/${page}`, author);
    });
  }

  getPosts(url, authorName) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const { pages, results, term } = data;
        this.setState({ term, results, spinner: false });
        const pageNums = [];
        for (let i = 1; i <= pages; i += 1) {
          pageNums.push(i);
        }
        this.setState({ pageNums });
      })
      .then(() => {
        fetch(`${process.env.API_URL}/wp-json/author/bio/${authorName}`)
          .then(res => res.json())
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
      pageNums,
      breadCrumb,
      categorySlug,
      currentPage,
      term,
      bio,
      practices,
      spinner,
    } = this.state;

    // pagination set up
    const prev = (currentPage > 2) ? currentPage - 1 : 1;
    const next = (currentPage < pageNums.length) ? parseInt(currentPage, 10) + 1 : pageNums.length;
    const cp = window.location.href.split('/').filter(a => a !== '');
    const active = (typeof cp[cp.length - 1] === 'number') ? cp[cp.length - 1] : 1;

    const seo = {
      title: `Attorney ${(bio.length > 0) ? bio[0].name : ''} Blog Posts & Articles`,
      metaDescription: `Welcome to Scarinci Hollenbeck here you will find the latest articles from the author ${(bio.length > 0) ? bio[0].name : ''}. `,
      canonicalLinks: window.location.href,
    };

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

export default Author;
