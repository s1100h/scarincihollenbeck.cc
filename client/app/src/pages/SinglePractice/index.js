/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PracticeHead from '../../components/Head/practice';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import FullWidth from '../../layouts/FullWidth';
import NoHeaderMiniSidebar from '../../layouts/NoHeaderMiniSidebar';
import Sidebar from './Sidebar';
import Body from './Body';
import { headers } from '../../utils/helpers';

const cityBackground = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/citybackground-1.jpg';

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
      blogPosts: [],
      newsPosts: [],
      currentTab: '',
    };
    this.handleLink = this.handleLink.bind(this);
    this.tabClick = this.tabClick.bind(this);
  }

  async componentDidMount() {
    const { practice } = this.props.match.params;
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
      seo,
      currentTab: content[0].title,
      corePractices
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
      newsPosts,
      highlightReal,
      seo,
      blogPosts,
      corePractices,
    } = this.state;

    return (
      <div>
        <PracticeHead seo={seo} />
        <div id="single-practice">
          <SingleSubHeader
            title={title}
            subtitle={description}
            image={cityBackground}
            height=""
          />
          { (content.length > 0) ? (
            <div>
              <FullWidth>
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
                  { content.map((v, i) => ((i > 0) ? (
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
                  ) : ''))}
                  { (attorneyList.length > 0) ? (
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
                  ) : ''}
                  { (industryTopics.length > 0) ? (
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
                  ) : ''}
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
                    newPosts={newsPosts}
                    blogPosts={blogPosts}
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
          ) : '' }
        </div>
      </div>
    );
  }
}

export default IndividualPractice;
