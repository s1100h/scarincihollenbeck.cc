/* eslint-disable max-len */
/* eslint class-methods-use-this: "error" */

import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import PageHead from '../../components/Head/page';
import FullWidth from '../../layouts/FullWidth';
import { createMarkup } from '../../utils/helpers';
import foHeaderBckGround from './citybackground.jpg';
import './index.scss';

// lazy load components
import Memebers from './Members';


class FirmOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainContent: '',
      mainTabs: [],
      additionalInfo: [],
      members: {},
      seo: {},
      spinner: false,
    };
  }

  componentDidMount() {
    this.setState({ spinner: true });
    fetch('https://api.scarincilies.com/cached/firm-overview')
      .then((res) => res.json())
      .then((data) => {
        const {
          mainTabs,
          additionalInfo,
          members,
          mainContent,
          seo,
        } = data;

        this.setState({
          mainTabs, additionalInfo, members, seo, mainContent, spinner: false,
        });
      });
  }


  render() {
    const {
      mainTabs,
      additionalInfo,
      members,
      mainContent,
      spinner,
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
          image={foHeaderBckGround}
          height="325px"
        />
        <FullWidth>
          <div className="text-muted lead text-center" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
          {
            (!spinner) ? (
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
            ) : <PulseLoader color="#D02422" loading={spinner} />

        }
        </FullWidth>
      </div>
    );
  }
}

export default FirmOverview;
