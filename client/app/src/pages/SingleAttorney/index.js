/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import AttorneyHead from '../../components/Head/attorney';
import MultiSubHeader from '../../layouts/MultiSubHeader';
import NoHeaderMiniSidebar from '../../layouts/NoHeaderMiniSidebar';
import FullWidth from '../../layouts/FullWidth';
import ProfileImage from './ProfileImage';
import InfoCard from './InfoCard';
import MenuItem from './MenuItem';
import Sidebar from './Sidebar';
import { sortByDateKey, urlify } from '../../utils/helpers';
import attorneyHeader from './attorney-header.jpg';

// lazy load components
import Body from './Body';

class AttorneyBiography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: [],
      currentTab: 'biography',
      currentSidebarTab: 'Related Practices',
      matterTab: '',
      readMore: false,
      spinner: false,
    };

    this.fetchPostData = this.fetchPostData.bind(this);
    this.tabClick = this.tabClick.bind(this);
    this.matterClick = this.matterClick.bind(this);
    this.toggleReadMore = this.toggleReadMore.bind(this);
    this.setSideBarTab = this.setSideBarTab.bind(this);
  }

  componentDidMount() {
    const { attorney } = this.props.match.params;
    this.fetchPostData(`${process.env.ADMIN_SITE}/wp-json/individual-attorney/attorney/${attorney}`);
  }


  fetchPostData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((bio) => {
        let matterTab = '';
        if (bio.representativeMatters[0] !== undefined) {
          const firstMatterTab = bio.representativeMatters[0].title;
          matterTab = firstMatterTab;
        }

        this.setState({ matterTab, bio, spinner: false });
      });
  }

  tabClick(e) {
    const currentTab = e;
    this.setState({ currentTab });
  }

  matterClick(e) {
    const matterTab = e;
    this.setState({ matterTab });
  }

  setSideBarTab(e) {
    const currentSidebarTab = e;
    this.setState({ currentSidebarTab });
  }

  toggleReadMore() {
    this.setState((prevState) => ({
      readMore: !prevState.readMore,
    }));
  }

  render() {
    const {
      bio,
      currentTab,
      matterTab,
      readMore,
      spinner,
      currentSidebarTab,
    } = this.state;

    const {
      fullName,
      designation,
      profileImage,
      phoneNumber,
      email,
      biography,
      fax,
      clients,
      socialMediaLinks,
      representativeMatters,
      representativeClients,
      relatedPractices,
      additionalInformation,
      education,
      barAdmissions,
      eventPosts,
      newsPosts,
      blogPosts,
      awards,
      presentations,
      publications,
      media,
      videos,
      tabs,
      chair,
      pdf,
      vizibility,
      seo,
    } = bio;

    let ai;
    const ed = {
      title: 'Education',
      content: education,
    };

    const ad = {
      title: 'Bar Admissions',
      content: barAdmissions,
    };

    if (additionalInformation !== undefined && additionalInformation !== false) {
      ai = [ed, ad, ...additionalInformation];
    }

    ai = [ed, ad];

    // combine and sort news articles & events articles
    let newsEventArticles = [];

    if (newsPosts !== undefined && eventPosts !== undefined) {
      newsEventArticles = [...newsPosts, ...eventPosts];
    }

    // sort tab content
    let filterHeaders;
    let filterBody;
    // filter empty tabs
    if (tabs !== undefined) {
      const { headers, body } = tabs;
      filterHeaders = headers.filter((a) => typeof a !== 'number');
      filterBody = body.filter((a) => a[1] !== '');
    }


    return (
      <div id="single-attorney">
        <AttorneyHead seo={seo} />
        { (!spinner) && (
        <div>
          <MultiSubHeader
            image={attorneyHeader}
            profile={(
              <ProfileImage
                image={profileImage}
                name={fullName}
              />
                )}
            height="325px"
            infoCard={(
              <InfoCard
                fullName={fullName}
                chair={chair}
                designation={designation}
                phoneNumber={phoneNumber}
                fax={fax}
                email={email}
                socialMediaLinks={socialMediaLinks}
                pdf={pdf}
                vizibility={vizibility}
              />
                )}
          />
          <FullWidth>
            <div className="line-header" id="nav-tab" role="tablist">
              <MenuItem currentTab={currentTab} tabTitle="biography" tabClick={this.tabClick} title="Biography" />
              { (representativeMatters) && <MenuItem currentTab={currentTab} tabTitle="representative-matters" tabClick={this.tabClick} title="Representative Matters" /> }
              { (representativeClients) && <MenuItem currentTab={currentTab} tabTitle="representative-clients" tabClick={this.tabClick} title="Representative Clients" /> }
              { (presentations) && <MenuItem currentTab={currentTab} tabTitle="presentations" tabClick={this.tabClick} title="Presentations" /> }
              { (publications) && <MenuItem currentTab={currentTab} tabTitle="publications" tabClick={this.tabClick} title="Publications" /> }
              { (media) && <MenuItem currentTab={currentTab} tabTitle="media" tabClick={this.tabClick} title="Media" /> }
              { (blogPosts) && <MenuItem currentTab={currentTab} tabTitle="blogs" tabClick={this.tabClick} title="Articles" /> }
              { (newsEventArticles.length > 0) && (newsEventArticles !== undefined) && <MenuItem currentTab={currentTab} tabTitle="newsevents" tabClick={this.tabClick} title="News &amp; Events" /> }
              { (videos) && <MenuItem currentTab={currentTab} tabTitle="videos" tabClick={this.tabClick} title="Videos" /> }
              { (tabs) && filterHeaders.map((value) => <MenuItem key={value} currentTab={currentTab} tabTitle={urlify(value)} tabClick={this.tabClick} title={value} />) }
            </div>
          </FullWidth>
          <NoHeaderMiniSidebar
            body={(
              <Body
                biography={biography}
                currentTab={currentTab}
                readMore={readMore}
                toggleReadMore={this.toggleReadMore}
                representativeMatters={representativeMatters}
                matterClick={this.matterClick}
                matterTab={matterTab}
                representativeClients={representativeClients}
                presentations={presentations}
                publications={publications}
                media={media}
                blogPosts={blogPosts}
                newsEventArticles={newsEventArticles}
                videos={videos}
                tabs={tabs}
                clients={clients}
                awards={awards}
                filterBody={filterBody}
              />
                )}
            sidebar={(
              <span>
                <Sidebar
                  title="Related Practices"
                  content={relatedPractices}
                  currentSidebarTab={currentSidebarTab}
                  setSideBarTab={this.setSideBarTab}
                  show={true}
                />
                <br />
                <Sidebar
                  title="Additional Information"
                  content={ai}
                  currentSidebarTab={currentSidebarTab}
                  setSideBarTab={this.setSideBarTab}
                  show={true}
                />
              </span>
                )}
          />
        </div>
        )}
      </div>
    );
  }
}

export default AttorneyBiography;
