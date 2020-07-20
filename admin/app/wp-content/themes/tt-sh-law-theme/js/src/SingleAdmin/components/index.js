import React, { Component } from 'react';
import {
  splitUrl,
  createMarkup,
  splitUrlPreview,
  addRandomKey,
} from '../../utils/helpers';
import './index.scss';

class AdminBiography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: [],
    };
    this.fetchPostData = this.fetchPostData.bind(this);
  }

  componentDidMount() {
    // create during integration
    let currentURL = window.location.href;

    if (currentURL.indexOf('?preview_id')) {
      currentURL = currentURL.substring(0, '?preview_id');
    }

    if (currentURL.indexOf('single-admin.html') > -1) {
      const postUrl = 'russell-s-ascher';
      this.fetchPostData(`${process.env.API_URL}/wp-json/individual-admin/admin/${postUrl}`);
    } else {
      const x = window.location.pathname;
      const urlSplit = x.split('/');
      const filtered = urlSplit.filter(a => a !== '');
      const adminTerm = filtered[filtered.length - 1];
      this.fetchPostData(`${process.env.API_URL}/wp-json/individual-admin/admin/${adminTerm}`);
    }
  }

  fetchPostData(url) {
    fetch(url)
      .then(res => res.json())
      .then(admin => this.setState({ admin }));
  }

  render() {
    const { admin } = this.state;
    const {
      Title,
      biography,
      email,
      image,
      name,
      social_media_links,
      vizibility,
      phone_extension,
    } = admin;

    console.log('admin data');
    console.log(admin);

    return (
      <span>
        <div className="jumbotron jumbotron-fluid city-background">
          <div className="container animated fadeInUp fast mt--1 max-width-container">
            <div className="row">
              <div className="col-sm-12 col-md-4 mb-3 mr-4 mh-325">
                {
                  (Object.keys(admin).length > 0) ? <img src={image.url} alt={name} className="img-fluid white-transparent-border" /> : ''
                }
              </div>
              <div className="col-sm-12 col-md-7 bg-black">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 my-3">
                      <span id="red-block" />
                      <h1 className="text-white">{name}</h1>
                      <span id="white-border" />
                    </div>
                    <div className="col-sm-12 my-2 mx-0">
                      <h5 className="text-white">
                        {Title}
                      </h5>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <ul className="text-white no-dots ml-0">
                        <li className="mb-1">
                          <h5>
                            <i className="fas fa-phone text-white">
                              <span className="proxima-regular ft-18">
                                {' '}
                                201-896-4100
                                {' '}
                                {`  ${phone_extension}`}
                              </span>
                            </i>
                          </h5>
                        </li>
                        <li className="mb-1">
                          <h5>
                            <i className="fas fa-envelope text-white">
                              <a href={`mailto:${email}`} className="text-white proxima-regular mail-link ft-18">
                                {' '}
                                {email}
                              </a>
                            </i>
                          </h5>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      {
                        (social_media_links) ? (
                          <span>
                            <ul className="ml-0 mt-2">
                              {
                                social_media_links.map(v => (
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
              <div className="line-header">
                <h3>Biography</h3>
              </div>
            </div>
            <div className="col-sm-12 mt-5">
              <div dangerouslySetInnerHTML={createMarkup(biography)} />
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default AdminBiography;
