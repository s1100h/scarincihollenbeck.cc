import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import { headers, sortByKey } from 'utils/helpers';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import Error from 'pages/_error';
import Footer from 'components/footer';
import Selected from 'components/archiveattorneys/selected';
import Filters from 'components/archiveattorneys/filters';
import Results from 'components/archiveattorneys/results';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import {
  attorneySearch,
  allLocations,
  allPractices,
} from 'queries/attorney-archive';

export default function Attorneys() {
  const router = useRouter();
  console.log('router');
  console.log(router);
  const { data: results, error: resultsError } = useSWR(
    attorneySearch(router.query),
    (query) => request('https://wp.scarincihollenbeck.com/graphql', query),
  );

  if (results) return <ErrorMessage />;
  if (!resultsError) return <SiteLoader />;

  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  return (
    <>
      <NextSeo
        title="Find an Attorney | Scarinci Hollenbeck, LLC"
        description="In Scarinci Hollenbeck's attorneys archive, you can find one of our skillful attorneys who can service your business legal needs."
        canonical="http://scarincihollenbeck.com/attorneys"
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
          Well get back to filers
          {/* <Filters
            practices={sPractices}
            alphabet={alphabet}
            locations={locations}
            designation={designations}
            userInput={userInput}
            handleChange={handleChange}
            onSelect={onSelect}
            letterClick={letterClick}
            clearAll={clearAll}
          /> */}
          {/** End of Filters */}
          {/** Results */}
          <div className="w-100 border mt-sm-6 mt-md-0">
            {/* <Selected select={select} clearQuery={clearQuery} userInput={userInput} />
            {(attorneys.length > 0) &&} */}
            {/* <Results attorneys={attorneys} userInput={userInput} select={select} /> */}
            Well get back to results
          </div>
          {/** End of Results */}
        </div>
      </FullWidth>
      <Footer />
    </>
  );
}
