/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import RelatedAttorneys from './RelatedAttorneys';
import RelatedArticles from './RelatedArticles';
import FeaturedSlider from './FeaturedSlider';
import AwardScroller from './AwardScroller';
import { createMarkup, splitUrl, splitUrlPreview } from '../../utils/helpers';
import './index.scss';

class IndividualPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: [],
      chair: [],
      practiceList: [],
      industryTopics: [],
      blogPosts: [],
      newsPosts: [],
      attorneyList: [],
      highlightReal: [],
      searchTerm: 'What are you looking for...',
      currentTab: '',
    };
    this.handleLink = this.handleLink.bind(this);
    this.fetchPostData = this.fetchPostData.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.tabClick = this.tabClick.bind(this);
  }

  componentDidMount() {
    // create during integration
    let currentURL = window.location.href;

    if (currentURL.indexOf('?preview_id') > -1) {
      currentURL = currentURL.substring(0, '?preview_id');
    }

    // ?post_type=practices&p=198&preview=true
    const postUrl = 'commercial-real-estate';

    if (currentURL.indexOf('single-practice-index.html') > -1) {
      currentURL = `${process.env.API_URL}/wp-json/individual-practices/practice/${postUrl}`;
    }

    if (currentURL.indexOf('p=') > -1) {
      // preview url
      let prevURL = splitUrlPreview(currentURL, 'p=');
      prevURL = prevURL.replace('=', '');
      this.fetchPostData(`${process.env.API_URL}/wp-json/preview/practice/${prevURL}`);
    } else {
      // published production url
      let currentPractice = splitUrl(currentURL, 'practice');
      currentPractice = currentPractice[currentPractice.length - 1];
      this.fetchPostData(`${process.env.API_URL}/wp-json/individual-practices/practice/${currentPractice}`);
    }
  }

  onChange(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
  }

  onSubmit() {
    const { searchTerm } = this.state;
    fetch(`${process.env.API_URL}/wp-json/search/post`,
      {
        method: 'post',
        body: searchTerm,
      })
      .then(res => res.json());
  }

  fetchPostData(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const {
          chair,
          title,
          description,
          content,
          practiceList,
          industryTopics,
          attorneyList,
          highlightReal,
        } = data;

        const blogPosts = [];
        const newsPosts = [];

        // seperate out blog posts and news posts
        industryTopics.forEach((post) => {
          if (post.categoryParent === 599) {
            blogPosts.push(post);
          }

          if (post.categoryParent === 98 || post.categoryParent === 99) {
            newsPosts.push(post);
          }
        });

        this.setState({
          chair,
          title,
          description,
          content,
          industryTopics,
          attorneyList,
          practiceList,
          highlightReal,
          blogPosts,
          newsPosts,
          currentTab: content[0].title,
        });
      });
  }

  handleLink(e) {
    window.location = e.target.value;
  }

  tabClick(e) {
    const currentTab = e;
    this.setState({ currentTab });
  }

  render() {
    const {
      chair,
      title,
      description,
      content,
      practiceList,
      industryTopics,
      attorneyList,
      searchTerm,
      currentTab,
      highlightReal,
      blogPosts,
      newsPosts,
    } = this.state;
    return (
      <span>
        <div className="jumbotron jumbotron-fluid city-background">
          <div className="container animated fadeInUp fast mt--1 max-width-container">
            <div className="row">
              <div className="col-sm-12 col-md-9 offset-md-1 bg-black">
                <div className="px-2 mb-5 mt-4">
                  <span id="red-block" />
                  <h1 className="text-white">{title}</h1>
                  <span id="white-border" />
                  <h2 className="proxima-regular mt-3 mb-5" dangerouslySetInnerHTML={createMarkup(description)} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-3">
          <div className="row">
            {
              (content.length > 0) && (
                <div className="col-sm-12">
                  <div className="line-header" id="nav-tab" role="tablist">
                    <h3
                      className={(currentTab === content[0].title) ? 'active' : ''}
                      id="nav-home-tab"
                      data-toggle="tab"
                      onClick={() => this.tabClick(content[0].title)}
                      onKeyPress={() => this.tabClick(content[0].title)}
                      href={`#${content[0].title}`}
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      {content[0].title}
                    </h3>
                    {content.map((v, i) => ((i > 0) && (
                    <h3
                      key={v.title}
                      className={(currentTab === v.title) ? 'active' : ''}
                      data-toggle="tab"
                      href={`#${v.title}`}
                      role="tab"
                      onClick={() => this.tabClick(v.title)}
                      onKeyPress={() => this.tabClick(v.title)}
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      {v.title}
                    </h3>
                    )))
                    }
                    {
                      (attorneyList.length > 0) && (
                        <h3
                          id="nav-home-tab"
                          className={(currentTab === 'team') ? 'active' : ''}
                          data-toggle="tab"
                          href="#team"
                          role="tab"
                          onClick={() => this.tabClick('team')}
                          onKeyPress={() => this.tabClick('team')}
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Our Team
                        </h3>
                      )
                    }
                    {(industryTopics.length > 0) && (
                      <h3
                        id="nav-home-tab"
                        className={(currentTab === 'blogs') ? 'active' : ''}
                        data-toggle="tab"
                        href="#blogs"
                        role="tab"
                        onKeyPress={() => this.tabClick('blogs')}
                        onClick={() => this.tabClick('blogs')}
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                          Related Updates
                      </h3>
                    )
                    }
                  </div>
                </div>
              )
            }
          </div>
          <div className="mt-5">
            {
              (content.length > 0) && (
                <div className="row">
                  <div className="col-sm-12 col-md-9">
                    <div className="tab-content">
                      <div className={(currentTab === content[0].title) ? 'tab-pane active article-container' : 'tab-pane article-container'} id={`#${content[0].title}`} role="tabpanel" aria-labelledby="nav-home-tab" dangerouslySetInnerHTML={createMarkup(content[0].content)} />
                      { content.map((v, i) => ((i > 0) && (
                        <div
                          key={v.title}
                          id={`#${v.title}`}
                          className={(currentTab === v.title) ? 'tab-pane active article-container' : 'tab-pane article-container'}
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                          dangerouslySetInnerHTML={createMarkup(v.content)}
                        />
                      )))
                      }
                      <div id="team" className={(currentTab === 'team') ? 'tab-pane active' : 'tab-pane'} role="tabpanel" aria-labelledby="nav-home-tab">
                        <RelatedAttorneys
                          members={attorneyList}
                          chair={chair}
                          handleLink={this.handleLink}
                        />
                      </div>
                      <div id="blogs" className={(currentTab === 'blogs') ? 'tab-pane active' : 'tab-pane'} role="tabpanel" aria-labelledby="nav-home-tab">
                        <RelatedArticles articles={industryTopics} />
                      </div>
                    </div>
                    {/** Awards */}
                    {(highlightReal.length > 0) && <AwardScroller highlightReal={highlightReal} /> }
                    {/** Recent News Articles */}
                    {(newsPosts.length > 0) && (
                      <div className="w-100 d-block">
                        <h4 className="bg-light-gray">
                        Latest News on
                          {' '}
                          {title}
                        </h4>
                        <FeaturedSlider content={newsPosts} />
                      </div>
                    )}

                    {/** Recent Blog Articles */}
                    {(blogPosts.length > 0) && (
                      <div className="w-100 d-block">
                        <h4 className="bg-light-gray">
                        Latest Articles on
                          {' '}
                          {title}
                        </h4>
                        <FeaturedSlider content={blogPosts} />
                      </div>
                    )}

                  </div>
                  <div className="col-sm-12 col-md-3">
                    <div>
                      <form role="search" method="GET" action={process.env.API_URL} onSubmit={this.onSubmit}>
                        <label htmlFor="searchSite" className="w-100">
                          <input name="s" type="search" id="searchSite" value={searchTerm} onChange={this.onChange} className="form-control p-2" />
                          <span className="sr-only">Search For Attorney</span>
                        </label>
                      </form>
                    </div>
                    {/** Core Practices */}
                    <div className="my-3">
                      <a href="#core-practices" className="sidebar-title" data-toggle="collapse" aria-expanded="true">
                        Core Practices
                        <i className="text-white fas float-right mt-1" />
                      </a>
                      <div id="core-practices" className="collapse show">
                        <div className="off-white">
                          <ul className="pl-0 pb-1 pr-1 no-dots sidebar-content">
                            <li>
                              <a href={`${process.env.API_URL}/practices/commercial-real-estate`} className="small-excerpt">
                                Commercial Real Estate
                              </a>
                            </li>
                            <li>
                              <a href={`${process.env.API_URL}/practices/corporate-transactions-business`} className="small-excerpt">
                                Corporate Transactions &amp; Business
                              </a>
                            </li>
                            <li>
                              <a href={`${process.env.API_URL}/practices/environmental/`} className="small-excerpt">
                                Environmental
                              </a>
                            </li>
                            <li>
                              <a href={`${process.env.API_URL}/practices/intellectual-property/`} className="small-excerpt">
                                Intellectual Property
                              </a>
                            </li>
                            <li>
                              <a href={`${process.env.API_URL}/practices/labor-employment/`} className="small-excerpt">
                                Labor &amp; Employment
                              </a>
                            </li>
                            <li>
                              <a href={`${process.env.API_URL}/practices/litigation/`} className="small-excerpt">
                                Litigation
                              </a>
                            </li>
                            <li>
                              <a href={`${process.env.API_URL}/practices/tax-trusts-estates/`} className="small-excerpt">
                                Tax, Trust &amp; Estates
                              </a>
                            </li>
                            <li>
                              <a href={`${process.env.API_URL}/practices/public-law/`} className="small-excerpt">
                                Government &amp; Law
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/** Related Sub Practices */}
                    <div>
                      <a href="#related-practices" className="sidebar-title" data-toggle="collapse">
                        Related Sub-Practices
                        <i className="text-white fas float-right mt-1" />
                      </a>
                      <div id="related-practices" className="collapse hide">
                        <div className="off-white">
                          <ul className="pl-0 pb-1 pr-1 no-dots sidebar-content">
                            {practiceList.map(v => <li key={v.ID}><a href={v.slug} className={(v.title.length > 40) ? 'smaller-excerpt' : 'small-excerpt'}>{v.title}</a></li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </span>
    );
  }
}

export default IndividualPractice;
