import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import SiteLoader from 'components/site-loader';
import FullWidth from 'layouts/full-width';
import SingleSubHeader from 'layouts/single-sub-header';
import ArchiveCareers from 'components/archivecareers';
import CareersEqualOpportunity from 'components/archivecareers/equal-opportunity';
import { headers } from 'utils/helpers';

export default function CareersPage({ positionTypes, locations, careerList }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [positionType, setPositionType] = useState('');
  const [careers, setCareers] = useState([]);

  if (router.isFallback) {
    return <SiteLoader />;
  }

  useEffect(() => {
    setCareers(careerList);
  }, [careerList]);

  function executeSearch() {
    function filterPostionType(career) {
      if (positionType) {
        return career.positionType.indexOf(positionType) >= 0;
      }

      return career;
    }

    function filterPositionLocation(career) {
      if (location) {
        return career.positionLocation.indexOf(location) >= 0;
      }

      return career;
    }

    const careerListFiltered = careers
      .filter(filterPostionType)
      .filter(filterPositionLocation);

    setCareers(careerListFiltered);
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
          {careers && (
            <ArchiveCareers
              careers={careers}
              positionTypes={positionTypes}
              locations={locations}
              query={query}
              setQuery={setQuery}
              setLocation={setLocation}
              setPositionType={setPositionType}
              executeSearch={executeSearch}
            />
          )}
          <CareersEqualOpportunity />
        </FullWidth>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [res] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/career-portal/careers', {
      headers,
    }).then((data) => data.json()),
  ]);

  return {
    props: {
      careerList: res.careers,
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
