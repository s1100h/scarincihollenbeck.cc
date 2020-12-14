import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import FullWidth from 'layouts/full-width';
import SingleSubHeader from 'layouts/single-sub-header';
import CareerSection from 'components/archivecareers';
import CareersEqualOpportunity from 'components/archivecareers/equal-opportunity';
import client from 'utils/graphql-client';
import { getAllCareers } from 'queries/careers';

export default function CareersPage({ careers, positionTypes, locations }) {
  const router = useRouter();
  const [parseCheck, setparseCheck] = useState(true);
  const [filteredCareers, setFilteredCareers] = useState([]);
  const [query, setQuery] = useState('');

  function executeSearch() {
    router.push({
      pathname: '/careers',
      query: { query },
    });
  }

  useEffect(() => {
    function parseSearchQuery(q) {
      if (Object.keys(q).length > 0) {
        console.log(q);
        console.log(careers);
        const parseCareersFromQuery = careers.filter((c) => {
          if (c.careerFields.positionLocation.indexOf(q.location)) {
            return c;
          }

          if (c.careerFields.positionType.indexOf(q.positionType)) {
            return c;
          }
          return c;
        });
        console.log('filtered');
        console.log(parseCareersFromQuery);
        setparseCheck(false);
      } else {
        setFilteredCareers(careers);
      }
    }

    if (parseCheck) {
      parseSearchQuery(router.query);
    }
  });

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
            careers={filteredCareers}
            postionType={positionTypes}
            location={locations}
            query={query}
            setQuery={setQuery}
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
  const res = await client.query(getAllCareers, {});

  return {
    props: {
      locations: [],
      careers: res.data.careers.nodes,
      positionTypes: [
        'Administration',
        'Attorney',
      ],
    },
    revalidate: 1,
  };
}
