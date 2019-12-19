import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import { makeTitle } from '../../utils/helpers';
import ArchiveHead from '../../components/Head/archive';
import ArchiveLayout from '../../layouts/ArchiveLayout';
import BreadCrumbs from './BreadCrumbs';
import Sidebar from './Sidebar/';
import Body from './Body';
import './index.scss';

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
      spinner: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { categorySlug, pageNum } = this.props.match.params;
    let page = 1;
    let breadCrumb = [categorySlug, 1];

    if(pageNum !== undefined) {
      page = pageNum;
      breadCrumb[1] = pageNum;
    };

    this.setState({ breadCrumb, categorySlug, currentPage: page, spinner: false }, () => {
      this.getPosts(`${process.env.API_URL}/wp-json/archive/query/${categorySlug}/${page}`);
    });
  }


  onChange(event) {
    const { value, name } = event.target;
    const { t } = this.state;
    t[name] = value;
    this.setState({ t });
  }

  onSubmit() {
    const { t } = this.state;    
    window.location = sumbitSearchForm(t);
  }

  getPosts(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const { pages, results, posts, seo } = data;
        this.setState({ results, trending: posts, seo, spinner: false });
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
      spinner,
    } = this.state;

    // pagination set up
    const prev = (currentPage > 2) ? currentPage - 1 : 1;
    const next = (currentPage < pageNums.length) ? parseInt(currentPage, 10) + 1 : pageNums.length;
    const cp = window.location.href.split('/').filter(a => a !== '');
    const active = (typeof cp[cp.length - 1] === 'number') ? cp[cp.length - 1] : 1;
     const seo = {
       title : `Scarinci Hollenbeck - ${categorySlug} Content Archvies`,
       metaDescription: `Scarinci Hollenbeck contains a comprehensive archive of legal articles of blogs containing information on ${categorySlug}, please feel free to search Scarinci Hollenbeck archives for more information.`,
       canonicalLink: window.location.href,
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
                trending={trending}
              />)}
            />
          ) : <PulseLoader color="#D02422" loading={spinner} />
        }
      </div>
    );
  }
}

export default Archives;
