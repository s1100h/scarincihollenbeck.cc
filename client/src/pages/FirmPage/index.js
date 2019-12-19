/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import MiniSidebar from '../../layouts/MiniSidebar';
import Sidebar from './Sidebar';
import Tabs from './Tabs';
import TabContent from './TabContent';
import NewsScroller from './NewsScroller';
import {
  createMarkup, splitUrl, splitUrlPreview, sortByKey,
} from '../../utils/helpers';
import fpHeaderBckGround from './citybackground.jpg';
import './index.scss';

class FirmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: [],
      members: [],
      seo:{},
      relatedPages: [],
      searchTerm: '',
      currentTab: '',
      attorneysMentioned: [],
      spinner: false,
    };
    this.handleLink = this.handleLink.bind(this);
    this.onChange = this.onChange.bind(this);
    this.tabClick = this.tabClick.bind(this);
  }

  componentDidMount() {
    const page = this.props.location.pathname;
    this.setState({ spinner: true });
    fetch(`${process.env.API_URL}/wp-json/firm-page/page${page}`)
      .then(res => res.json())
      .then((data) => {
        const {
          title,
          tabs,
          members,
          relatedPages,
          description,
          attorneysMentioned,
          seo,
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
          seo,
          spinner: false,
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
      seo,
      spinner,
    } = this.state;

    const { member, chair } = members;
    const sortedMembers = sortByKey(member, 'lastName');

    return (
      <div>
        <PageHead seo={seo} />
        <SingleSubHeader
          title={title}
          subtitle={description}
          image={fpHeaderBckGround}
          height={'auto'}
        />
        {
          (!spinner) ? (
            <MiniSidebar
            header={(<Tabs
              content={content}
              currentTab={currentTab}
              members={members} />
            )}
            body={(<TabContent
              content={content}
              sortedMembers={sortedMembers}
              chair={chair}
              handleLink={this.handleLink}
              currentTab={currentTab}
              attorneysMentioned={attorneysMentioned}
              title={title}
            />)}
            sidebar={((relatedPages.length > 0) ? 
              <Sidebar
                searchTerm={searchTerm}
                relatedPages={relatedPages}
                onChange={this.onChange}
              />
             : '')}
            />
          ) : <PulseLoader color="#D02422" loading={spinner} />
        }
      </div>
    )
  }
 
}

export default FirmPage;
