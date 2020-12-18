import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import useSWR from 'swr';
import { request } from 'graphql-request';
import Footer from 'components/footer';
import FullWidth from 'layouts/full-width';
import SingleSubHeader from 'layouts/single-sub-header';
import CareerSection from 'components/archivecareers';
import CareersEqualOpportunity from 'components/archivecareers/equal-opportunity';
import SiteLoader from 'components/site-loader';
import ErrorMessage from 'components/error-message';
import { queryCareers } from 'queries/careers';

export default function CareersPage({ positionTypes, locations }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [positionType, setPositionType] = useState('');
  const [queryParams] = useState({});

  // fetch careers
  const { data: res, error: resError } = useSWR(
    queryCareers(JSON.stringify(queryParams)),
    (q) => request('https://wp.scarincihollenbeck.com/graphql', q),
  );

  if (resError) return <ErrorMessage />;
  if (!res) return <SiteLoader />;

  function executeSearch() {
    const dynamicQuery = {
      location,
      positionType,
      query,
    };

    Object.keys(dynamicQuery).forEach((key) => {
      if (dynamicQuery[key] === '') {
        delete dynamicQuery[key];
      }
    });

    router.push({
      pathname: '/careers',
      query: dynamicQuery,
    });
  }

  return (
    <>
      <NextSeo
        title="Careers & Positions | Scarinci Hollenbeck, LLC"
        description="Scarinci Hollenbeck's commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
        canonical="http://scarincihollenbeck.com/careers"
      />
      <div id="careers">
        <SingleSubHeader
          image="/images/Skyscrapers-up-1800x400-JPG.jpg"
          title="Careers & Available Positions"
          subtitle="Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
        />
        <FullWidth>
          <CareerSection
            careers={res.careers || res.searchWP}
            positionTypes={positionTypes}
            locations={locations}
            query={query}
            setQuery={setQuery}
            setLocation={setLocation}
            setPositionType={setPositionType}
            executeSearch={executeSearch}
          />
          <CareersEqualOpportunity />
        </FullWidth>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      locations: [
        'Lyndhurst, NJ',
        'Red Bank, NJ',
        'New York, NY',
        'Washington D.C.',
      ],
      positionTypes: ['Administration', 'Attorney'],
    },
    revalidate: 1,
  };
}
