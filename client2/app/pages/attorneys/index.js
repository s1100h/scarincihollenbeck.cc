import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import { headers, sortByKey } from '../../utils/helpers';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Selected from './selected';
import Filters from '../../components/attorneyarchives/filters';
import Results from '../../components/attorneyarchives/results';
import SingleSubHeader from '../../layouts/single-sub-header';
import FullWidth from '../../layouts/full-width';
import { attorneyArchiveHeaderJPG } from '../../utils/next-gen-images';

function Attorneys({slides, seo, locations, designations, practices, attorneys, loading, router}) {
  const [userInput, setUserInput] = useState('');
  const [select, setSelect] = useState([]);
  const [attorneyList, setAttorneyList ] = useState([]);

  let load = true;
  load = loading;

  /* Click Events */
  function onSelect(e, input) {
    const selected = input;
    const key = e.target.name;
    const results = { selected, key };
    const s = select.filter((a) => a.key !== key);
    const concatResults = s.concat(results);

    // set new results[] to state select
    setSelect(concatResults);

  }

  function onMobileSelect(e) {
    const selected = e.target.value;
    const key = e.target.name;
    const results = { selected, key };
    const s = select.filter((a) => a.key !== key);
    const concatResults = s.concat(results);

    // set new results[] to state select
    setSelect(concatResults);
  }

  /* Letter Click Event */
  function letterClick(e) {
    const selected = e.target.innerHTML;
    const key = 'letter';
    const results = { selected, key };
    const s = select.filter((a) => a.key !== key);
    const concatResults = s.concat(results);
    
    // set new results[] to state select
    setSelect(concatResults);
  }

  /* Handle User Input Event */
  function handleChange(e) {
    const input = e.target.value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    const results = { selected: userInput, key: 'query' };
    const concatResults = select.concat(results);
    setUserInput(input);
    setSelect(concatResults);
  }

  /** Clear user query */
  function clearQuery(key) {
    const rQuery = select.filter((a) => a.key !== key);

    setUserInput('');
    setSelect(rQuery);
  }

  /** Clear all queries */
  function clearAll() {
    setUserInput('');
    setSelect([]);
  }

  // sort practices, designations, location
  const sPractices = sortByKey(practices, 'title');
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${router.pathname}/${seo.canonicalLink}`} />
      </Head>
      <NavBar />
      <SingleSubHeader
        title="Attorneys"        
        image={attorneyArchiveHeaderJPG}
        subtitle="Our team of attorneys have a diverse set of legal expertise, please feel free to search our directory to find the right attorney for your business needs."
        height="330px"
      />
      <FullWidth>
        <div id="attorney-archive" className="mb-5">
          {/** Filters */}
          <Filters
            practices={sPractices}
            alphabet={alphabet}
            locations={locations}
            designation={designations}
            userInput={userInput}
            handleChange={handleChange}
            onSelect={onSelect}
            letterClick={letterClick}
            clearAll={clearAll}
            onMobileSelect={onMobileSelect}
          />
          {/** End of Filters */}
          {/** Results */}
          <div className="w-100 border mt-sm-6 mt-md-0">
            <Selected select={select} clearQuery={clearQuery} userInput={userInput} />
            { (load === false && attorneys.length > 0) ? (
                <Results attorneys={attorneys} userInput={userInput} select={select} />
              ) : ( 
                <div className="w-100 my-5">
                  <h3 className="text-center red-title">Loading attorney list...</h3>
                </div>
            )}
          </div>
          {/** End of Results */}
        </div>
      </FullWidth>
      <Footer slides={slides} />

    </>
  )

}

export async function getStaticProps() {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const attorneyResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/attorney-search/attorneys/`, { headers });
  const filterResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/attorney-filters`, { headers });
  const seoResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/attorney-search/meta`, { headers });
  const slides = await sliderResponse.json();
  const attorneys = await attorneyResponse.json();
  const filters = await filterResponse.json();
  const seo = await seoResponse.json();
  const { locations, designations, practices } = filters;
  const loading = false;

  return {
    props: {
      slides,
      seo,
      locations,
      designations,
      practices,
      attorneys,
      loading
    },
  }
}

export default withRouter(Attorneys)