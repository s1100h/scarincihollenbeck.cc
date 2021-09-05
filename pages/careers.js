import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import SiteLoader from 'components/shared/site-loader';
import FullWidth from 'layouts/full-width';
import SingleSubHeader from 'layouts/single-sub-header';
import ArchiveCareers from 'components/pages/careers';
import CareersEqualOpportunity from 'components/pages/careers/equal-opportunity';
import { headers } from 'utils/helpers';
import { BASE_API_URL, SITE_URL } from 'utils/constants';

const seo = {
  title: 'Careers & Positions | Scarinci Hollenbeck, LLC',
  metaDescription:
    "Scarinci Hollenbeck's commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys.",
  canonicalUrl: `${SITE_URL}/careers`,
};

const site = {
  title: 'Careers & Available Positions',
  description:
    'Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys.',
};
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

    const careerListFiltered = careers.filter(filterPostionType).filter(filterPositionLocation);

    setCareers(careerListFiltered);
  }

  return (
    <>
      <NextSeo title={seo.title} description={seo.metaDescription} canonical={seo.canonicalUrl} />
      <>
        <SingleSubHeader title={site.title} subtitle={site.description} offset={3} span={6} />
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
      </>
    </>
  );
}

export async function getStaticProps() {
  const request = await fetch(`${BASE_API_URL}/wp-json/career-portal/careers`, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);

  return {
    props: {
      careerList: request.careers,
      locations: ['Lyndhurst, NJ', 'Red Bank, NJ', 'New York, NY', 'Washington D.C.'],
      positionTypes: ['Administration', 'Attorney'],
    },
    revalidate: 1,
  };
}
