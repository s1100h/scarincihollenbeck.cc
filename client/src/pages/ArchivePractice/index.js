/* eslint-disable max-len */
/* eslint class-methods-use-this: "error" */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import { sortByKey } from '../../utils/helpers';
import { getPracticePortalContent } from './utils/api';
import { sortPracticeCategorys } from './utils/helpers';
import SingleSubHeader from '../../components/SingleSubHeader';
import FullWidth from '../../components/FullWidth';
import BlockList from './Lists/BlockList';
import SimpleList from './Lists/SimpleList';
import pracArchiveBckGround from './citybackground.jpg';
import './index.scss';

class PracticePortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      core: [],
      additional: [],
      business: [],
      seo: [],
      spinner: false,
    };
  }

  componentDidMount() {
    this.setState({ spinner:true });
    getPracticePortalContent().then((data) => {
      const results = sortPracticeCategorys(data.practices);
      const seo = data.seo;
      const { core, additional, business } = results;
      this.setState({
        core,
        additional,
        business,
        seo,
        spinner: false,
      });
    });
  }


  render() {
    const {
      core,
      additional,
      business,
      seo,
      spinner,
    } = this.state;

    const sortedCore = sortByKey(core, 'title');
    const sortedAdditional = sortByKey(additional, 'title');
    const sortedBusiness = sortByKey(business, 'title');

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
          title="Scarinci Hollenbeck Legal Practices"
          subtitle="Scarinci Hollenbeck attorneys at law provide a fully scaled platform of law practices for today&apos;s businesses. Recognizing the complexity of the law practices, we have staffed each practice group with lawyers experienced in the particular area of your need."
          image={pracArchiveBckGround}
        />
        <FullWidth>
         {(!spinner) ? (
           <div>
             <p className="text-muted lead text-center w-100">
              As you scroll through the law practices and locate the sub-practice groups that most closely identifies with your need, feel free to contact any of the attorneys identified within the sub-practice group. Feel free to contact any of the Section Chiefs identified under each of the named law practices. They will be happy to assist you and guide you to the appropriate attorney for resolution of your issue.
            </p>
            <div className="mt-4 px-0">
              <div className="line-header">
                <h3>CORE PRACTICES</h3>
              </div>
            </div>
            <BlockList list={sortedCore} id={28270}/>
            <div className="mt-4 px-0">
              <div className="line-header">
                <h3>ADDITIONAL PRACTICES</h3>
              </div>
            </div>
            <BlockList list={sortedAdditional} id={28270}/>
          <div className="mt-4 px-0">
            <div className="line-header">
              <h3>BUSINESS RELATED LEGAL SERVICES</h3>
            </div>
          </div>
          <SimpleList list={sortedBusiness} />
        </div>
         ) : <PulseLoader color="#D02422" loading={spinner} />
        }
        </FullWidth>
      </div>
    );
  }
}

export default PracticePortal;
