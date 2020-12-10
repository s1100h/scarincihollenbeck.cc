import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { headers, sortByKey } from 'utils/helpers';
import SiteLoader from 'components/site-loader';
import Error from 'pages/_error';
import Footer from 'components/footer';
import Selected from 'components/archiveattorneys/selected';
import Filters from 'components/archiveattorneys/filters';
import Results from 'components/archiveattorneys/results';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import { allAttorneys, allLocations, allPractices } from 'queries/attorney-archive';
import client from 'utils/graphql-client';

export default function Attorneys({
  seo, locations, designations, practices, attorneys,
}) {
  const router = useRouter();
  const [userInput, setUserInput] = useState('');
  const [select, setSelect] = useState([]);

  if(router.isFallback || !locations || !designations || !practices || !attorneys) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    )
  }

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
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <SingleSubHeader
        title="Attorneys"
        image="/images/attorney-archive-header-jpg.jpg"
        subtitle="Our team of attorneys have a diverse set of legal expertise, please feel free to search our directory to find the right attorney for your business needs."
        height="330px"
      />
      <FullWidth>
        <div className="mb-5">
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
          />
          {/** End of Filters */}
          {/** Results */}
          <div className="w-100 border mt-sm-6 mt-md-0">
            {/* <Selected select={select} clearQuery={clearQuery} userInput={userInput} />
            {(attorneys.length > 0) &&} */}
             <Results attorneys={attorneys} userInput={userInput} select={select} />
          </div>
          {/** End of Results */}
        </div>
      </FullWidth>
      <Footer />

    </>
  );
}

export async function getStaticProps() {
  // fetch attorney, location, and practice data
  const allAttorneysContent = await client.query(allAttorneys, {});
  const allLocationsContent = await client.query(allLocations, {});
  const allPracticesContent = await client.query(allPractices, {});

  // organize all practices by core practices
  const filterCorePractices = allPracticesContent.data.practices.nodes.filter((p) => {
    if(p.practicePortalPageContent.practicePortalCategories !== null) {
      return p.practicePortalPageContent.practicePortalCategories[0] === 'Core Practices'
    }
  });

  // sort the attorneys by their last name
  const sortedAttorneylist = allAttorneysContent.data.attorneyProfiles.nodes.sort((a, b) => {
    if (a.attorneyMainInformation.lastName > b.attorneyMainInformation.lastName) {
      return 1;
    }
    if (a.attorneyMainInformation.lastName < b.attorneyMainInformation.lastName) {
      return -1;
    }
    return 0;
  });


  return {
    props: {
      seo: {
        title: "Find an Attorney | Scarinci Hollenbeck, LLC",
        metaDescription:"In Scarinci Hollenbeck's attorneys archive, you can find one of our skillful attorneys who can service your business legal needs."
      },
      practices: filterCorePractices,
      locations:allLocationsContent.data.officeLocations.nodes,
      attorneys: sortedAttorneylist,
      designations : [
        "Associate",
        "Senior Associate",
        "Counsel",
        "Of Counsel",
        "Of Counsel/Partner Emeritus",
        "Partner",
        "Managing Partner",
        "NYC Managing Partner",
        "Washington, D.C. Managing Partner",
      ],
    },
    revalidate: 1
  };
}
