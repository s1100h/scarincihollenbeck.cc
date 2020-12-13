import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import FullWidth from 'layouts/full-width';
import SingleSubHeader from 'layouts/single-sub-header';
import CareerSection from 'components/archivecareers';
import CareersEqualOpportunity from 'components/archivecareers/equal-opportunity';
import client from 'utils/graphql-client';
import { getAllCareers } from 'queries/careers';

export default function CareersPage({ careers }) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  function filterTerm(e) {
    const kw = e.target.value;
    setKeyword(kw);
  }

  function selectOption(e) {
    const { name, innerText } = e.target;

    if (name === 'location') {
      setLocation(innerText);
    }

    if (name === 'type') {
      setType(innerText);
    }
  }

  function clearFilter() {
    setKeyword('');
    setLocation('');
    setType('');
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
            careers={careers}
            keyword={keyword}
            type={type}
            location={location}
            selectOption={selectOption}
            filterTerm={filterTerm}
            clearFilter={clearFilter}
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

  // const [careerJson] = await Promise.all([
  //   fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/career-portal/careers`, {
  //     headers,
  //   }).then((data) => data.json()),
  // ]);
  // const { seo } = careerJson;

  return {
    props: {
      careers: res.data.careers.nodes,
    },
    revalidate: 1,
  };
}
