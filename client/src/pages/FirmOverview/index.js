/* eslint-disable max-len */
/* eslint class-methods-use-this: "error" */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import FullWidth from '../../layouts/FullWidth';
import { createMarkup } from '../../utils/helpers';
import Members from './Members';
import foHeaderBckGround from './citybackground.jpg';
import './index.scss';

class FirmOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainContent: '',
      mainTabs: [],
      additionalInfo: [],
      members: {},
      spinner:false,
    };
  }

  componentDidMount() {
    this.setState({spinner: true });
    fetch(`${process.env.API_URL}/wp-json/firm-overview/content`)
      .then(res => res.json())
      .then((data) => {
        const {
          mainTabs,
          additionalInfo,
          members,
          mainContent,
        } = data;

        this.setState({ mainTabs, additionalInfo, members, mainContent, spinner: false  });
      });
  }


  render() {
    const {
      mainTabs,
      additionalInfo,
      members,
      mainContent,
      spinner,
    } = this.state;

    const subHeaderContent = mainContent.match(/<h2(.*?)>(.*?)<\/h2>/g);
    const bodyContent = mainContent.replace(subHeaderContent, '');

    const seo = {
      title: 'Firm Overview - Scarinci Hollenbeck',
      metaDescription: 'With a growing practice of more than 65 experienced attorneys, Scarinci Hollenbeck is a regional alternative to a National 250 law firm.'
    };

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
          title="Firm Overview"
          subtitle={subHeaderContent}
          image={foHeaderBckGround}
          height="325px"
        />   
        <FullWidth>
          <div className="text-muted lead text-center" dangerouslySetInnerHTML={createMarkup(bodyContent)} />
          {
            (!spinner) ?  (
             <div>
               {
                  mainTabs.map(mt => (
                    <div className="w-100 mt-4 px-0" key={mt.title}>
                      <div className="line-header">
                        <h3>{mt.subTitle}</h3>
                      </div>
                      <div className="lead mt-4 text-center body-text" dangerouslySetInnerHTML={createMarkup(mt.content)} />
                    </div>
                  ))
               }
               <div className="border">
                <Members title="Managing Partners" members={members.managingPartners} />
                <Members title="Partners" members={members.partners} />
                <Members title="Directors" members={members.admin} />
              </div>
              {
                additionalInfo.map(ai => (
                  <div className="w-100 mt-4 px-0" key={ai.title}>
                    <h4 className="bg-light-gray">{ai.title}</h4>
                    <div className="lead mt-4 body-text" dangerouslySetInnerHTML={createMarkup(ai.content)} />
                  </div>
                ))
              }
             </div>
            ) : <PulseLoader color="#D02422" loading={spinner} />

        }          
        </FullWidth>
      </div>
    );
  }
}

export default FirmOverview;
