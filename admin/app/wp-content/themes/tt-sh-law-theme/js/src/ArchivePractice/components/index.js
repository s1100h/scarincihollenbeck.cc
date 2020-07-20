/* eslint-disable max-len */
/* eslint class-methods-use-this: "error" */

import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import { sortByKey } from '../../utils/helpers';
import { getPracticePortalContent } from '../utils/api';
import { sortPracticeCategorys } from '../utils/helpers';
import './index.scss';

class PracticePortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      core: [],
      additional: [],
      business: [],
      spinner: false,
    };
  }

  componentDidMount() {
    this.setState({ spinner: true });
    getPracticePortalContent().then((data) => {
      const results = sortPracticeCategorys(data);
      const { core, additional, business } = results;
      this.setState({
        core,
        additional,
        business,
        spinner: false,
      });
    });
  }


  render() {
    const {
      core,
      additional,
      business,
      spinner,
    } = this.state;

    const sortedCore = sortByKey(core, 'title');
    const sortedAdditional = sortByKey(additional, 'title');
    const sortedBusiness = sortByKey(business, 'title');

    return (
      <span>
        <div className="jumbotron jumbotron-fluid city-background">
          <div className="container bg-black animated fadeInUp fast mt--1 max-width-container">
            <div className="px-5 pt-4 pb-5">
              <span id="red-block" />
              <h1 className="text-white">Scarinci Hollenbeck Legal Practices</h1>
              <span id="white-border" />
              <h2 className="proxima-regular mt-3 mb-5">
                Scarinci Hollenbeck attorneys at law provide a fully scaled platform of law practices for today&apos;s businesses. Recognizing the complexity of the law practices, we have staffed each practice group with lawyers experienced in the particular area of your need.</h2>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12">
              <p className="text-muted lead text-center">
              As you browse the available law practices and discover the various sub-practice groups within them, feel welcome to contact any of the attorneys identified within each practice. Our attorneys will be happy to assist you.              </p>
            </div>
            <div className="col-sm-12 mt-4 px-0">
              <div className="line-header">
                <h3>CORE PRACTICES</h3>
              </div>
            </div>
            <div className="col-sm-12 mt-5">
              <ul className="practices row no-dots">
                {
                  (spinner) ? (<PulseLoader color="#D02422" loading={spinner} />) : (
                    sortedCore.map(v => (
                      <li className="col-sm-12 col-md-4 text-center m-0 mt-2" key={v.ID}>
                        <div className="dropdown-toggle practice-menu-box" id={`menu-item-dropdown-${v.ID}`}>
                          <a href={v.slug} className="practice-link">
                            {v.title}
                          </a>
                          {
                          (v.children.length > 0) ? (
                            <ul className="practice-dropdown dropdown-menu mx-0 w-100 px-0 no-dots mt-2">
                              {
                                v.children.map(vc => (
                                  <li key={vc.ID}>
                                    <a href={vc.slug} className="practice-dropdown-child dropdown-item">
                                      {vc.title}
                                    </a>
                                  </li>
                                ))
                              }
                            </ul>
                          ) : ''
                        }
                        </div>
                      </li>
                    ))
                  )
                }
              </ul>
            </div>
            <div className="col-sm-12 mt-4 px-0">
              <div className="line-header">
                <h3>ADDITIONAL PRACTICES</h3>
              </div>
            </div>
            <div className="col-sm-12 mt-5">
              <ul className="practices row no-dots">
                {
                  (spinner) ? (<PulseLoader color="#D02422" loading={spinner} />) : (
                    sortedAdditional.map(v => (
                      <li className="col-sm-12 col-md-4 text-center m-0 mt-2" key={v.ID}>
                        <div className="dropdown-toggle practice-menu-box" id={`menu-item-dropdown-${v.ID}`}>
                          <a href={v.slug} className="practice-link">
                            {v.title}
                          </a>
                          {
                          (v.children.length > 0) ? (
                            <ul className="practice-dropdown dropdown-menu mx-0 w-100 px-0 no-dots mt-2">
                              {
                                v.children.map(vc => (
                                  <li key={vc.ID}>
                                    <a href={vc.slug} className="practice-dropdown-child dropdown-item">
                                      {vc.title}
                                    </a>
                                  </li>
                                ))
                              }
                            </ul>
                          ) : ''
                        }
                        </div>
                      </li>
                    ))
                  )
                }
              </ul>
            </div>
            <div className="col-sm-12 mt-4 px-0">
              <div className="line-header">
                <h3>BUSINESS RELATED LEGAL SERVICES</h3>
              </div>
            </div>
            <div className="col-sm-12 mt-5">
              {
                  (spinner) ? (<PulseLoader color="#D02422" loading={spinner} />) : (
                    <ul className="blue-title column-list">
                      {
                        sortedBusiness.map(v => (
                          <li key={v.ID}>
                            <a href={v.slug} className="blue-title proxima-bold">{v.title}</a>
                          </li>
                        ))
                      }
                    </ul>
                  )
                }
            </div>
          </div>
        </div>
      </span>
    );
  }
}

export default PracticePortal;
