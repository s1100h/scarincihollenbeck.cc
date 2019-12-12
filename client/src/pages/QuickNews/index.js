import React, { Component } from 'react';
import { makeTitle, sumbitSearchForm } from '../../utils/helpers';
import NewsScroller from './NewsScroller';
import Sidebar from './Sidebar/';
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
      searchTerm: '',
      allPractices: [],
      allAttorneys: [],
      allCategories: [],
      breadCrumb: [],
      categorySlug: '',
      t: {
        keyword: '',
        attorney: '',
        practice: '',
        category: '',
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { pageNum } = this.props.match.params;
    const categorySlug = 'Quick News';
    let breadCrumb = ['quick-news', 1];
    let page = 1;

    if(pageNum !== undefined) {
      page = pageNum;
      breadCrumb[1] = pageNum;
    }

    this.setState({ breadCrumb, categorySlug, currentPage: page }, () => {
      this.getPosts(`${process.env.API_URL}/wp-json/quick-news/posts/${page}`);      
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
        const { pages, results, posts } = data;
        this.setState({ results, trending: posts });
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
      })
      .then(() => {
        // practices
        fetch(`${process.env.API_URL}/wp-json/attorney-search/practices`)
          .then(res => res.json())
          .then((data) => {
            this.setState({ allPractices: data });
          });
      })
      .then(() => {
        // attorneys
        fetch(`${process.env.API_URL}/wp-json/attorney-search/attorneys`)
          .then(res => res.json())
          .then((data) => {
            this.setState({ allAttorneys: data });
          });
      })
      .then(() => {
        // categories
        fetch(`${process.env.API_URL}/wp-json/wp/v2/categories?per_page=100`)
          .then(res => res.json())
          .then((data) => {
            this.setState({ allCategories: data });
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
      searchTerm,
      allPractices,
      allAttorneys,
      allCategories,
      breadCrumb,
      categorySlug,
      currentPage,
    } = this.state;

    // pagination set up
    const prev = (currentPage > 2) ? currentPage - 1 : 1;
    const next = (currentPage < pageNums.length) ? parseInt(currentPage, 10) + 1 : pageNums.length;
    const cp = window.location.href.split('/').filter(a => a !== '');
    const active = (typeof cp[cp.length - 1] === 'number') ? cp[cp.length - 1] : 1;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-0 mb-4">
            <h6>
              <span>
                <a href={`${window.location.origin}`} className="red-title proxima-bold">HOME</a>
              </span>
              <strong className="text-black mt-2 mx-2 proxima-bold">
                <i className="fas fa-caret-right" />
              </strong>
              {
                breadCrumb.map((val, indx) => ((indx < breadCrumb.length - 1)
                  ? (
                    <span key={val}>
                      <span>
                        <span className="red-title proxima-bold text-uppercase">
                          {
                            (val === categorySlug)
                              ? (<u>{categorySlug}</u>)
                              : `${categorySlug}`
                          }
                        </span>
                      </span>
                      <strong className="text-black mt-2 mx-2 proxima-bold">
                        <i className="fas fa-caret-right" />
                      </strong>
                    </span>
                  )
                  : (
                    <span key={val}>
                      <span className="red-title proxima-bold">
                        {
                          (val === categorySlug)
                            ? (<u>{val}</u>)
                            : `${val}`
                        }
                      </span>
                    </span>
                  )))
              }
            </h6>
          </div>
          <div className="col-sm-12 col-lg-8">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                {
                results.map((r, i) => ((i < 5) ? (
                  <div className="p-2" key={r.id}>
                    <a href={r.link} className="top-article">
                      <h5 className="mb-0">{r.title}</h5>
                      <p className="mt-0 mb-3 text-muted small-excerpt">{r.description}</p>
                    </a>
                  </div>
                ) : ''))
              }
              </div>
              <div className="col-sm-12 col-md-6">
                {
                results.map((r, i) => ((i > 5) ? (
                  <div className="p-2" key={r.id}>
                    <a href={r.link} className="top-article">
                      <h5 className="mb-0">{r.title}</h5>
                      <p className="mt-0 mb-3 text-muted small-excerpt">{r.description}</p>
                    </a>
                  </div>
                ) : ''))
              }
              </div>

            </div>
            <div className="w-100 mt-0 ml--1">
              {
                (results !== undefined && pageNums.length > 1)
                  ? (
                    <nav aria-label="pagination">
                      <ul className="d-flex flex-wrap no-dots lead">
                        <li className="mr-2">
                          <a className="text-dark" href={`${window.location.origin}/category/quick-news/page/${prev}/`} tabIndex="-1" aria-label="previous link">
                            <i className="fas fa-angle-double-left" aria-hidden="true" />
                          </a>
                        </li>
                        {/** Current / First Number */}
                        {
                          pageNums.map(val => ((active === val) ? (
                            <li className={(active === val) ? 'active mr-2' : 'mr-2'} key={`page-${val}`}>
                              <a className="text-dark mt-2" href={`${window.location.origin}/category/quick-news/page/${val}/`}>{val}</a>
                            </li>
                          ) : ''))
                        }
                        {/** ... */}
                        <li className="mx-1">
                          ...
                        </li>
                        {/** Last Number */}
                        {
                          pageNums.map(val => (((pageNums.length -1) === val) ? (
                            <li className={(active === val) ? 'active mr-2' : 'mr-2'} key={`page-${val}`}>
                              <a className="text-dark" href={`${window.location.origin}/category/quick-news/page/${val}/`}>{val}</a>
                            </li>
                          ) : ''))
                        }
                        <li className="ml-1">
                          <a className="text-dark" href={`${window.location.origin}/category/quick-news/page/${next}/`} aria-label="next link">
                            <i className="fas fa-angle-double-right" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  )
                  : ''
              }
            </div>
            <div className="w-100 d-block">
              <NewsScroller title="Firm News" articles={news} />
              <NewsScroller title="Firm Events" articles={events} />
              <NewsScroller title="Firm Insights" articles={insight} />
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <Sidebar
              searchTerm={searchTerm}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
              allPractices={allPractices}
              allAttorneys={allAttorneys}
              allCategories={allCategories}
              trending={trending}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Archives;
