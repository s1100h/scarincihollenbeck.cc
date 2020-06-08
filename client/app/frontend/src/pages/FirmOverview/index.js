/* eslint-disable max-len */
/* eslint class-methods-use-this: "error" */

import React, { Component } from 'react';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import PageHead from '../../components/Head/page';
import FullWidth from '../../layouts/FullWidth';
import { createMarkup, headers } from '../../utils/helpers';
import { cityBackgroundJPG, cityBackgroundWebp } from '../../utils/next-gen-images';
import Members from './Members';

class FirmOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainContent: '',
      mainTabs: [],
      additionalInfo: [],
      members: {},
      seo: {},
    };
  }

  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/firm-overview`, { headers });
    const json = await response.json();

    const {
      mainTabs,
      additionalInfo,
      members,
      mainContent,
      seo,
    } = json;

    this.setState({
      mainTabs, additionalInfo, members, seo, mainContent,
    });
  }


  render() {
    const {
      mainTabs,
      additionalInfo,
      members,
      mainContent,
      seo,
    } = this.state;

    const subHeaderContent = mainContent.match(/<h2(.*?)>(.*?)<\/h2>/g);
    const bodyContent = mainContent.replace(subHeaderContent, '');

    return (
      <div>
        <PageHead seo={seo} />
        <SingleSubHeader
          title="Firm Overview"
          subtitle={subHeaderContent}
          imageWebp={cityBackgroundWebp}            
          imageJPG={cityBackgroundJPG}
          height="325px"
        />
        <FullWidth id="firm-overview">
          <div className="text-muted lead text-center" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
          <div>
            { mainTabs.map((mt) => (
              <div className="w-100 mt-4 px-0" key={mt.title}>
                <div className="line-header">
                  <h3>{mt.subTitle}</h3>
                </div>
                <div className="lead mt-4 text-center body-text" dangerouslySetInnerHTML={createMarkup(mt.content)} />
              </div>
            ))}
            <div className="border">
              <Members title="Managing Partners" members={members.managingPartners} />
              <Members title="Partners" members={members.partners} />
              <Members title="Directors" members={members.admin} />
            </div>
            { additionalInfo.map((ai) => (
              <div className="w-100 mt-4 px-0" key={ai.title}>
                <h4 className="bg-light-gray">{ai.title}</h4>
                <div className="lead mt-4 body-text" dangerouslySetInnerHTML={createMarkup(ai.content)} />
              </div>
            ))}
          </div>
        </FullWidth>
      </div>
    );
  }
}

export default FirmOverview;
