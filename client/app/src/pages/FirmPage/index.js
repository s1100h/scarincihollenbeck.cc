/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PageHead from '../../components/Head/page';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import MiniSidebar from '../../layouts/MiniSidebar';
import { sortByKey, headers } from '../../utils/helpers';
import { cityBackgroundJPG, cityBackgroundWebp } from '../../utils/next-gen-images';
import Sidebar from './Sidebar';
import Tabs from './Tabs';
import TabContent from './TabContent';


class FirmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      content: [],
      members: [],
      seo: {},
      relatedPages: [],
      searchTerm: '',
      currentTab: '',
      attorneysMentioned: [],
    };
    this.handleLink = this.handleLink.bind(this);
    this.onChange = this.onChange.bind(this);
    this.tabClick = this.tabClick.bind(this);
  }

  async componentDidMount() {
    const { location } = this.props;
    const page = location.pathname;
    const request = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/firm-page/page${page}`, { headers });
    const json = await request.json();

    const {
      title,
      tabs,
      members,
      relatedPages,
      description,
      attorneysMentioned,
      seo,
    } = json;

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
    } = this.state;

    const { member, chair } = members;
    const sortedMembers = sortByKey(member, 'lastName');

    return (
      <div id="firm-page">
        <PageHead seo={seo} />
        <SingleSubHeader
          title={title}
          subtitle={description}
          imageWebp={cityBackgroundWebp}            
          imageJPG={cityBackgroundJPG}
          height="auto"
        />
        <MiniSidebar
          header={(
            <Tabs
              content={content}
              currentTab={currentTab}
              members={members}
              tabClick={this.tabClick}
            />
            )}
          body={(
            <TabContent
              content={content}
              sortedMembers={sortedMembers}
              chair={chair}
              handleLink={this.handleLink}
              currentTab={currentTab}
              attorneysMentioned={attorneysMentioned}
              title={title}
            />
)}
          sidebar={((relatedPages.length > 0) && (
          <Sidebar
            searchTerm={searchTerm}
            relatedPages={relatedPages}
            onChange={this.onChange}
          />
          ))}
        />
      </div>
    );
  }
}

export default FirmPage;
