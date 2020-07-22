/* eslint-disable max-len */
/* eslint class-methods-use-this: "error" */

import React, { Component } from 'react';
import { createMarkup } from '../../utils/helpers';
import Members from './Members';
import './index.scss';

class FirmOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainContent: '',
      mainTabs: [],
      additionalInfo: [],
      members: {},
    };
  }

  componentDidMount() {
    fetch(`${process.env.API_URL}/wp-json/firm-overview/content`)
      .then(res => res.json())
      .then((data) => {
        const {
          mainTabs,
          additionalInfo,
          members,
          mainContent,
        } = data;

        this.setState({ mainTabs });
        this.setState({ additionalInfo });
        this.setState({ members });
        this.setState({ mainContent });
      });
  }


  render() {
    const {
      mainTabs,
      additionalInfo,
      members,
      mainContent,
    } = this.state;

    const subHeaderContent = mainContent.match(/<h2(.*?)>(.*?)<\/h2>/g);
    const bodyContent = mainContent.replace(subHeaderContent, '');

    return (
      <span>
        <div className="jumbotron jumbotron-fluid city-background">
          <div className="container bg-black animated fadeInUp fast mt--1 max-width-container">
            <div className="px-5 pt-4 pb-5">
              <span id="red-block" />
              <h1 className="text-white">Firm Overview</h1>
              <span id="white-border" />
              <h2 className="proxima-regular mt-3 mb-5" dangerouslySetInnerHTML={createMarkup(subHeaderContent)} />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-muted lead text-center" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
            </div>
            {
              mainTabs.map(mt => (
                <div className="col-sm-12 mt-4 px-0" key={mt.title}>
                  <div className="line-header">
                    <h3>{mt.subTitle}</h3>
                  </div>
                  <div className="lead mt-4 text-center body-text" dangerouslySetInnerHTML={createMarkup(mt.content)} />
                </div>
              ))
            }
            <Members title="Managing Partner" members={members.managingPartners} />
            <Members title="Partners" members={members.partners} />
            <Members title="Directors" members={members.admin} />
            {
              additionalInfo.map(ai => (
                <div className="col-sm-12 mt-4 px-0" key={ai.title}>
                  <h4 className="bg-light-gray">{ai.title}</h4>
                  <div className="lead mt-4 body-text" dangerouslySetInnerHTML={createMarkup(ai.content)} />
                </div>
              ))
            }
          </div>
        </div>
      </span>
    );
  }
}

export default FirmOverview;
