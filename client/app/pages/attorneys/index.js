import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { headers, sortByKey } from '../../utils/helpers';
import Footer from '../../components/footer';
import Selected from '../../components/attorneyarchives/selected';
import Filters from '../../components/attorneyarchives/filters';
import Results from '../../components/attorneyarchives/results';
import SingleSubHeader from '../../layouts/single-sub-header';
import FullWidth from '../../layouts/full-width';
import { attorneyArchiveHeaderJPG } from '../../utils/next-gen-images';

export default function Attorneys({slides, seo, locations, designations, practices, attorneys}) {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
  const [select, setSelect] = useState([]);
  const [attorneyList, setAttorneyList ] = useState([]);

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
        <link rel="canonical" href={`https://scarincihollenbeck.com/${seo.canonicalLink}`} />
      </Head>
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
            {(attorneys.length > 0) && (
                <Results attorneys={attorneys} userInput={userInput} select={select} />
              )} 
              {(attorneys === undefined && router.isFallback) && ( 
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
  const [ attorneys, filters, seo, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/attorney-search/attorneys`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/attorney-filters`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/attorney-search/meta`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then(data => data.json())
  ]);

  const { locations, designations, practices } = filters;

  return {
    props: {
      slides,
      seo,
      locations,
      designations,
      practices,
      attorneys
    },
  }
}