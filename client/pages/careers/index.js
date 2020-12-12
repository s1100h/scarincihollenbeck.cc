import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import FullWidth from 'layouts/full-width';
import SingleSubHeader from 'layouts/single-sub-header';
import CareerSection from 'components/archivecareers';
import EEOpportunityContent from 'components/archivecareers/equal-opportunity';
import { headers } from 'utils/helpers';

export default function CareersPage({ careers, seo }) {
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
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/careers`}
      />
      <div id="careers">
        <SingleSubHeader
          image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg"
          title="Careers & Available Positions"
          subtitle="Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
        />
        <FullWidth>
          <CareerSection
            sort={sort}
            careers={careers}
            keyword={keyword}
            type={type}
            career={career}
            location={location}
            selectOption={selectOption}
            filterTerm={filterTerm}
            clearFilter={clearFilter}
          />
          <EEOpportunityContent />
        </FullWidth>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const [careerJson] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/career-portal/careers`, {
      headers,
    }).then((data) => data.json()),
  ]);
  const { seo } = careerJson;

  return {
    props: {
      seo,
      careers: careerJson.hasOwnProperty('careers') ? careerJson.careers : [],
    },
    revalidate: 1,
  };
}
