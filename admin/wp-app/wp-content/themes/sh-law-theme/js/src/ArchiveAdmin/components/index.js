/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable no-else-return */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import Results from './Results';
import redBackground from '../../sunsetnyc.png';
import './index.scss';

class AdminArchive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      spinner: false,
    };
  }

  /* Fetch data events */
  componentDidMount() {
    // fetch admin list
    fetch(`${process.env.API_URL}/wp-json/admin-search/admin/`)
      .then(res => res.json())
      .then((admins) => {
        this.setState({ admins });
      });
  }

  render() {
    const {
      admins,
    } = this.state;

    return (
      <span>
        <div className="jumbotron jumbotron-fluid city-background">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-7 offset-md-3 text-white bg-black">
                <div className="p-3">
                  <span id="red-block" />
                  <h1 className="text-white proxima-bold">Administration</h1>
                  <span id="white-border" />
                  <h2 className="proxima-regular mt-3 mb-5">
                    In order to fulfill the varying needs of our clients, the firm's group of attorneys rely on the support of Scarinci Hollenbeck's Administration group.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 border">
              <div className="container p-3 pt-4">
                <div className="row">
                  {
                    admins.map(a => (
                      <div key={a.ID} className="col-sm-12 col-md-6 col-lg-4 mb-2">
                        <div className="attorney-card d-flex flex-row">
                          <a href={a.link}>
                            <img src={a.image.url} alt={a.name} className="mr-1" />
                          </a>
                          <div className="mt-3 ml-3">
                            <a href={a.link}>
                              <p className="text-uppercase red-title small-excerpt">
                                <strong>{a.name}</strong>
                              </p>
                              <p className="mb-1 small-excerpt">
                                <strong>
                                  {a.Title}
                                </strong>
                              </p>
                            </a>
                            <i className="fas fa-phone d-block small-excerpt">
                              {' '}
                              201-896-4100
                              {' '}
                              {a.phone_extension}
                            </i>
                            <i className="fas fa-envelope d-block small-excerpt">
                              {' '}
                              {a.email}
                            </i>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default AdminArchive;
