/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PracticeHead from '../../components/Head/practice';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import FullWidth from '../../layouts/FullWidth';
import NoHeaderMiniSidebar from '../../layouts/NoHeaderMiniSidebar';
import Page404 from '../page404';
import Sidebar from './Sidebar';
import Body from './Body';
import { headers } from '../../utils/helpers';
import { cityBackgroundJPG, cityBackgroundWebp } from '../../utils/next-gen-images';

class IndividualPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: [],
      chair: [],
      corePractices: [],
      practiceList: [],
      industryTopics: [],
      attorneyList: [],
      highlightReal: [],
      currentTab: '',
      error: false,
    };
    this.handleLink = this.handleLink.bind(this);
    this.tabClick = this.tabClick.bind(this);
  }

  async componentDidMount() {
    const { practice } = this.props.match.params;

    try {
      const practicesResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/individual-practices/practice/${practice}`, { headers });
      const corePracticesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, { headers });
      const practiceJson = await practicesResponse.json();
      const corePracticesJson = await corePracticesResponse.json();
  
      const corePractices = corePracticesJson.map((cp) => ({
        name: cp.title,
        link: cp.slug,
      }));
  
      const {
        chair,
        title,
        description,
        content,
        practiceList,
        industryTopics,
        attorneyList,
        highlightReal,
        seo,
      } = practiceJson;
  
 
      this.setState({
        chair,
        title,
        description,
        content,
        industryTopics,
        attorneyList,
        practiceList,
        highlightReal,
        seo,
        currentTab: content[0].title,
        corePractices,
      });

    } catch(err) {
      this.setState({ error: true });
    }
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
      newsPosts,
      highlightReal,
      seo,
      blogPosts,
      corePractices,
      error
    } = this.state;

    if(error) {
      return <Page404 />
    }
    return (
      <div>
        <PracticeHead seo={seo} />
        <div id="single-practice">
          <SingleSubHeader
            title={title}
            subtitle={description}
            imageWebp={cityBackgroundWebp}            
            imageJPG={cityBackgroundJPG}
            height=""
          />
          { (content.length > 0) && (
            <div>
              <FullWidth>
                <div className="tab-container mb--1" id="nav-tab" role="tablist">
                  <button
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
                  </button>
                  { content.map((v, i) => ((i > 0) && (
                    <button
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
                    </button>
                  )))}
                  { (industryTopics.length > 0) && (
                    <button
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
                    </button>
                  )}
                </div>
              </FullWidth>
              <NoHeaderMiniSidebar
                body={(
                  <Body
                    currentTab={currentTab}
                    content={content}
                    attorneyList={attorneyList}
                    chair={chair}
                    handleLink={this.handleLink}
                    industryTopics={industryTopics}
                    highlightReal={highlightReal}
                    title={title}
                  />
                  )}
                sidebar={(
                  <Sidebar
                    searchTerm={searchTerm}
                    practiceList={practiceList}
                    corePractices={corePractices}
                  />
                  )}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default IndividualPractice;
