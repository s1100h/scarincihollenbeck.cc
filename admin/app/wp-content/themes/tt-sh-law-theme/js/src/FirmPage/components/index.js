/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import RelatedAttorneys from './RelatedAttorneys';
import Sidebar from './Sidebar';
import NewsScroller from './NewsScroller';
import {
  createMarkup, splitUrl, splitUrlPreview, sortByKey,
} from '../../utils/helpers';
import './index.scss';

class FirmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: [],
      members: [],
      relatedPages: [],
      searchTerm: 'What are you looking for...',
      currentTab: '',
      attorneysMentioned: [],
    };
    this.handleLink = this.handleLink.bind(this);
    this.onChange = this.onChange.bind(this);
    this.tabClick = this.tabClick.bind(this);
  }

  componentDidMount() {
    const currentUrl = window.location.pathname.replace(/\//g, '');
    let page = 'diversity-group';

    if (!(currentUrl.indexOf('firm-page-index') > -1)) {
      // check for dev theme env
      if (currentUrl.indexOf('shlaw.dev.cc') > -1) {
        page = currentUrl.split('/shlaw.dev.cc/').pop();
      } else {
        page = currentUrl;
      }
    }

    fetch(`${process.env.API_URL}/wp-json/firm-page/page/${page}`)
      .then(res => res.json())
      .then((data) => {
        const {
          title,
          tabs,
          members,
          relatedPages,
          description,
          attorneysMentioned,
        } = data;

        const content = tabs;

        this.setState({
          title,
          content,
          members,
          relatedPages,
          description,
          currentTab: content[0].title,
          attorneysMentioned,
        });
      });
  }

  onChange(event) {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
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
      title,
      content,
      members,
      relatedPages,
      searchTerm,
      currentTab,
      description,
      attorneysMentioned,
    } = this.state;
    

    const { member, chair } = members;

    const sortedMembers = sortByKey(member, 'lastName');

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
            <div className="col-sm-12">
              <div className="line-header" id="nav-tab" role="tablist">
                {
                 (content.length > 0) ? (
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
                 ) : ''
                 }
                {
                  content.map((v, i) => ((i > 0) ? (
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
                  ) : ''))
                }
                {
                  (Object.keys(members).length > 0) ? (
                    <h3
                      id="nav-home-tab"
                      className={(currentTab === 'members') ? 'active' : ''}
                      data-toggle="tab"
                      href="#members"
                      role="tab"
                      onClick={() => this.tabClick('members')}
                      onKeyPress={() => this.tabClick('members')}
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Members
                    </h3>
                  ) : ''
                }
              </div>
            </div>
            <div className="col-sm-12 col-md-9">
              {
                 (content.length > 0) ? (
                   <div className="tab-content">
                     <div className={(currentTab === content[0].title) ? 'tab-pane active article-container mt-4' : 'tab-pane article-container mt-4'} id={`#${content[0].title}`} role="tabpanel" aria-labelledby="nav-home-tab" dangerouslySetInnerHTML={createMarkup(content[0].content)} />
                     {
                        content.map((v, i) => ((i > 0) ? (
                          <div
                            key={v.title}
                            id={`#${v.title}`}
                            className={(currentTab === v.title) ? 'tab-pane active article-container mt-4' : 'tab-pane article-container mt-4'}
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                            dangerouslySetInnerHTML={createMarkup(v.content)}
                          />
                        ) : ''))
                      }
                     <div id="team" className={(currentTab === 'members') ? 'tab-pane active mt-4' : 'tab-pane mt-4'} role="tabpanel" aria-labelledby="nav-home-tab">
                       <RelatedAttorneys
                         members={sortedMembers}
                         chair={chair}
                         handleLink={this.handleLink}
                       />
                     </div>
                   </div>
                 ) : ''
               }
              <NewsScroller attorneysMentioned={attorneysMentioned} title={title} />
            </div>
            <div className="col-sm-12 col-md-3">
              {
                (relatedPages.length > 0) ? (
                  <Sidebar
                    searchTerm={searchTerm}
                    relatedPages={relatedPages}
                    onChange={this.onChange}
                  />
                ) : ''
              }
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default FirmPage;
