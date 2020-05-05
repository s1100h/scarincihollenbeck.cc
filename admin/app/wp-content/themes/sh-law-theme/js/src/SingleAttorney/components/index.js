/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import MenuItem from './MenuItem';
import Biography from './Biography';
import Matters from './Matters';
import Table from './Table';
import Articles from './Articles';
import VideoContent from './VideoContent';
import BasicContent from './BasicContent';
import FeaturedSlider from './FeaturedSlider';
import RelatedArticles from './RelatedArticles';
import Sidebar from './Sidebar';
import {
  splitUrl,
  splitUrlPreview,
  addRandomKey,
  sortByDateKey,
  urlify,
} from '../../utils/helpers';
import './index.scss';

class AttorneyBiography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: [],
      loading: false,
      currentTab: 'biography',
      matterTab: '',
      readMore: false,
    };

    this.fetchPostData = this.fetchPostData.bind(this);
    this.tabClick = this.tabClick.bind(this);
    this.matterClick = this.matterClick.bind(this);
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  componentDidMount() {
    let currentURL = window.location.href;

    if (currentURL.indexOf('?preview_id') > -1) {
      currentURL = currentURL.substring(0, '?preview_id');
    }

    // ?post_type=attorneys&p=28047&preview=true
    const postUrl = 'john-m-scagnelli';

    if (currentURL.indexOf('single-attorney-index') > -1) {
      currentURL = `${process.env.API_URL}/attorney/${postUrl}`;
    }

    if (currentURL.indexOf('p=') > -1) {
      // preview url
      let prevURL = splitUrlPreview(currentURL, 'p=');
      prevURL = prevURL.replace('=', '');
      this.fetchPostData(`${process.env.API_URL}/wp-json/preview/attorney/${prevURL}`);
    } else {
      // published production url
      const attorneyName = splitUrl(currentURL, 'attorneys');
      this.fetchPostData(`${process.env.API_URL}/wp-json/individual-attorney/attorney/${attorneyName[attorneyName.length - 1]}`);
    }
  }

  fetchPostData(url) {
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then((bio) => {
        let matterTab = '';
        if (bio.representativeMatters[0] !== undefined) {
          const firstMatterTab = bio.representativeMatters[0].title;
          matterTab = firstMatterTab;
        }

        this.setState({ matterTab, bio }, () => this.setState({ loading: false }));
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

  toggleReadMore() {
    this.setState(prevState => ({
      readMore: !prevState.readMore,
    }));
  }

  render() {
    const {
      bio,
      loading,
      currentTab,
      matterTab,
      readMore,
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
      additionalInforamtion,
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
    } = bio;


    // combine education, bar admissions, and additional info
    // into one array
    let ai;

    if (additionalInforamtion !== undefined) {
      const ed = {
        title: 'Education',
        content: education,
      };

      const ad = {
        title: 'Bar Admissions',
        content: barAdmissions,
      };

      ai = [ed, ad, ...additionalInforamtion];
    }

    // combine and sort news articles & events articles
    let newsEventArticles = [];

    if (newsPosts !== undefined && eventPosts !== undefined) {
      newsEventArticles = [...newsPosts, ...eventPosts];
    }

    // combine and sort blog articles
    const sortedBlogArticles = sortByDateKey(blogPosts, 'date');

    let filterHeaders;
    let filterBody;
    // filter empty tabs
    if (tabs !== undefined) {
      const { headers, body } = tabs;
      filterHeaders = headers.filter(a => typeof a !== 'number');
      filterBody = body.filter(a => a[1] !== '');
    }

    return (
      <span className="d-block h-100">
        {
          (bio !== undefined) ? (
            <span>
              <div className="jumbotron jumbotron-fluid city-background">
                <div className="container animated fadeInUp fast mt--1 max-width-container">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 mb-3 mr-4 mh-325">
                      <img src={profileImage} alt={fullName} className="img-fluid white-transparent-border" />
                    </div>
                    <div className="col-sm-12 col-md-7 bg-black ">
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12 mt-3">
                            <span id="red-block" />
                            <h1 className="text-white">
                              {
                                (fullName) ? `${fullName} ` : ''
                              }
                              {
                                (chair !== undefined && chair.length > 0) ? (
                                  <span className=" h5 text-white">
                                    -
                                    {` ${designation}`}
                                  </span>
                                ) : ''
                              }
                            </h1>
                            <span id="white-border" />
                          </div>
                          {
                            (chair !== undefined && chair.length > 0) ? (
                              <div className="col-sm-12 my-3">
                                {
                                  chair.map(ch => (
                                    <span key={ch.title} className="text-white h5">
                                      <strong>Chair: </strong>
                                      <a href={ch.link} className="text-white chair-link h5">
                                        {ch.title}
                                        {' '}
                                        Practice
                                      </a>
                                      <br />
                                    </span>
                                  ))
                                }
                              </div>
                            ) : (
                              <div className="col-sm-12 mt-3">
                                <h4 className="text-white">{designation}</h4>
                              </div>
                            )
                          }
                          <div className="col-sm-12 col-md-6">

                            <ul className="text-white no-dots mt-2 ml-0">
                              {
                                (phoneNumber) ? <li className="mb-1"><h5><i className="fas fa-phone text-white"><span className="proxima-regular ft-18">{`  ${phoneNumber}`}</span></i></h5></li> : ''
                              }
                              {
                                (fax) ? <li className="mb-1"><h5><i className="fas fa-fax text-white"><span className="proxima-regular ft-18">{`  ${fax}`}</span></i></h5></li> : ''
                              }
                              {
                                (email) ? <li className="mb-1"><h5><i className="fas fa-envelope"><a href={`mailto:${email}`} className="text-white proxima-regular mail-link ft-18">{` ${email}`}</a></i></h5></li> : ''
                              }
                            </ul>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            {
                              (socialMediaLinks) ? (
                                <span>
                                  <ul className="ml-0 mt-2">
                                    {
                                      socialMediaLinks.map(v => (
                                        <li key={v.channel} className="mb-0 lh-1">
                                          <h5>
                                            <i className={`fab text-white fa-${v.channel.toLowerCase()}`}>
                                              <a href={v.url} className="text-white mail-link proxima-regular ft-18 position-relative icon">
                                                <strong>{`  Connect on ${v.channel}`}</strong>
                                              </a>
                                            </i>
                                          </h5>
                                        </li>
                                      ))
                                    }
                                    {
                                      (pdf)
                                        ? (
                                          <li className="mb-0 lh-1">
                                            <h5>
                                              <i className="fas fa-file-alt text-white">
                                                <a href={pdf} className="text-white mail-link proxima-regular ft-18 position-relative icon">
                                                  {' Download Biography'}
                                                </a>
                                              </i>
                                            </h5>
                                          </li>
                                        ) : ''
                                    }
                                    {
                                      (vizibility)
                                        ? (
                                          <li className="mb-0 lh-1">
                                            <h5>
                                              <i className="fas fa-address-book text-white">
                                                <a href={vizibility} className="text-white mail-link proxima-regular ft-18 position-relative icon">
                                                  {' Download Contact'}
                                                </a>
                                              </i>
                                            </h5>
                                          </li>
                                        ) : ''
                                    }

                                  </ul>
                                </span>
                              ) : ''
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="line-header" id="nav-tab" role="tablist">
                      <MenuItem currentTab={currentTab} tabTitle="biography" tabClick={this.tabClick} title="Biography" />
                      {
                        (representativeMatters) ? <MenuItem currentTab={currentTab} tabTitle="representative-matters" tabClick={this.tabClick} title="Representative Matters" /> : ''
                      }
                      {
                        (representativeClients) ? <MenuItem currentTab={currentTab} tabTitle="representative-clients" tabClick={this.tabClick} title="Representative Clients" /> : ''
                      }
                      {
                        (presentations) ? <MenuItem currentTab={currentTab} tabTitle="presentations" tabClick={this.tabClick} title="Presentations" /> : ''
                      }
                      {
                        (publications) ? <MenuItem currentTab={currentTab} tabTitle="publications" tabClick={this.tabClick} title="Publications" /> : ''
                      }
                      {
                        (media) ? <MenuItem currentTab={currentTab} tabTitle="media" tabClick={this.tabClick} title="Media" /> : ''
                      }
                      {
                        (blogPosts) ? <MenuItem currentTab={currentTab} tabTitle="blogs" tabClick={this.tabClick} title="Articles" /> : ''
                      }
                      {
                        (newsEventArticles.length > 0) ? (newsEventArticles !== undefined) ? <MenuItem currentTab={currentTab} tabTitle="newsevents" tabClick={this.tabClick} title="News &amp; Events" /> : '' : ''
                      }
                      {
                        (videos) ? <MenuItem currentTab={currentTab} tabTitle="videos" tabClick={this.tabClick} title="Videos" /> : ''
                      }
                      {
                        (tabs) ? filterHeaders.map(value => <MenuItem key={value} currentTab={currentTab} tabTitle={urlify(value)} tabClick={this.tabClick} title={value} />) : ''}
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-9 mt-5">
                    <div className="tab-content">
                      {
                        (biography) ? <Biography currentTab={currentTab} tabTitle="biography" title="Biography" content={biography} readMore={readMore} toggleReadMore={this.toggleReadMore} /> : ''
                      }
                      {
                        (representativeMatters) ? <Matters currentTab={currentTab} matterClick={this.matterClick} matterTab={matterTab} tabTitle="representative-matters" title="Representative Matters" content={representativeMatters} /> : ''
                      }
                      {
                        (representativeClients) ? <Matters currentTab={currentTab} matterTab={matterTab} tabTitle="representative-clients" title="Representative Clients" content={representativeClients} /> : ''
                      }
                      {
                        (presentations) ? <Table currentTab={currentTab} tabTitle="presentations" title="Presentations" content={presentations} /> : ''
                      }
                      {
                        (publications) ? <Table currentTab={currentTab} tabTitle="publications" title="Publications" content={publications} /> : ''
                      }
                      {
                        (media) ? <Table currentTab={currentTab} tabTitle="media" title="Media" content={media} /> : ''
                      }
                      {
                        (blogPosts) ? <Articles currentTab={currentTab} tabTitle="blogs" title="Articles" content={sortedBlogArticles} /> : ''
                      }
                      {
                        (newsEventArticles.length > 0) ? (newsEventArticles !== undefined) ? <Articles currentTab={currentTab} tabTitle="newsevents" title="News &amp; Events" content={newsEventArticles} /> : '' : ''
                      }
                      {
                        (videos) ? <VideoContent title="Videos" content={videos} currentTab={currentTab} tabTitle="videos" /> : ''
                      }
                      {
                        (tabs) ? filterBody.map(b => <BasicContent key={addRandomKey(b[1])} title={b[1]} content={b[2]} currentTab={currentTab} tabTitle={urlify(b[1])} />) : ''
                      }
                    </div>
                    {
                      (clients) ? (clients.length > 0) ? <FeaturedSlider content={clients} title="Clients" /> : '' : ''
                    }
                    {
                      (awards) ? (awards.length > 0) ? <FeaturedSlider content={awards} title="Awards" /> : '' : ''
                    }
                    {
                      (newsEventArticles.length > 0) ? <RelatedArticles title="News & Events" content={newsEventArticles} /> : ''
                    }
                    {
                      (blogPosts) ? <RelatedArticles title="Recent Articles" content={sortedBlogArticles} /> : ''
                    }
                  </div>
                  <div className="col-sm-12 col-md-3 mt-5">
                    <Sidebar title="Related Practices" content={relatedPractices} collapsed="collapse show" />
                    <br />
                    <Sidebar title="Additional Information" content={ai} collapsed="collapse hide" />
                  </div>
                </div>
              </div>
            </span>
          ) : <PulseLoader color="#D02422" loading={loading} />
        }
      </span>
    );
  }
}

export default AttorneyBiography;
