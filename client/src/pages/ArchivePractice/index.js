/* eslint-disable max-len */
/* eslint class-methods-use-this: "error" */

import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import { sortByKey } from '../../utils/helpers';
import { getPracticePortalContent } from './utils/api';
import { sortPracticeCategorys } from './utils/helpers';
import ArchiveHead from '../../components/Head/archive';
import SingleSubHeader from '../../layouts/SingleSubHeader';
import FullWidth from '../../layouts/FullWidth';
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
      seo: {},
      spinner: false,
    };
  }

  componentDidMount() {
    this.setState({ spinner: true });
    getPracticePortalContent().then((data) => {
      const results = sortPracticeCategorys(data.practices);
      const { seo } = data;
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
        <ArchiveHead seo={seo} />
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
              <BlockList list={sortedCore} id={28270} />
              <div className="mt-4 px-0">
                <div className="line-header">
                  <h3>ADDITIONAL PRACTICES</h3>
                </div>
              </div>
              <BlockList list={sortedAdditional} id={28270} />
              <div className="mt-4 px-0">
                <div className="line-header">
                  <h3>BUSINESS RELATED LEGAL SERVICES</h3>
                </div>
              </div>
              <SimpleList list={sortedBusiness} />
            </div>
          ) : <PulseLoader color="#D02422" loading={spinner} />}
        </FullWidth>
      </div>
    );
  }
}

export default PracticePortal;
