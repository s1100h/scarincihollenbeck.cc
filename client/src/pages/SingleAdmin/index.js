import React, { Component } from 'react';
import styled from 'styled-components';
import {
  splitUrl,
  createMarkup,
  splitUrlPreview,
  addRandomKey,
} from '../../utils/helpers';
import './index.scss';
import attorneyHeader from './attorney-header.jpg';


const HeaderBackground = styled.div`
  background: linear-gradient(rgba(0,0,0,.45),rgba(0,0,0,.45)),url(${attorneyHeader}) no-repeat 50%;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0);
`;

const BgBlack = styled.div`
  background-color: rgba(0,0,0, .50);
  border-radius: 4px;
  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);
  clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 1% 90%, 0 0);
`;


class AdminBiography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: [],
    };
    this.fetchPostData = this.fetchPostData.bind(this);
  }

  componentDidMount() {
    const { admin } = this.props.match.params;
    this.fetchPostData(`${process.env.API_URL}/wp-json/individual-admin/admin/${admin}`);
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

    return (
      <div>
        <HeaderBackground className="jumbotron jumbotron-fluid">
          <div className="container animated fadeInUp fast mt--1 max-width-container">
            <div className="row">
              <div className="col-sm-12 col-md-4 mb-3 mr-4 mh-325">
                {
                  (Object.keys(admin).length > 0) ? <img src={image.url} alt={name} className="img-fluid white-transparent-border" /> : ''
                }
              </div>
              <BgBlack className="col-sm-12 col-md-7">
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
              </BgBlack>
            </div>
          </div>
        </HeaderBackground>
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
      </div>
    );
  }
}

export default AdminBiography;
