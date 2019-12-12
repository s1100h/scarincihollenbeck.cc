/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import SingleSubHeader from '../../components/SingleSubHeader';
import MiniSidebar from '../../components/MiniSidebar';
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
      seo:[],
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
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.metaDescription}/>
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
          <link rel="canonical" href={window.location.href} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:site_name" content={seo.title} />
          <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
          <meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:width" content="750" />
          <meta property="og:image:height" content="350" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={seo.metaDescription} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:site" content="@S_H_Law" />
          <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta name="twitter:creator" content="@S_H_Law" /> 
        </Helmet>  
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
