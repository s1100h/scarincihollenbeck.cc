import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import FullWidth from 'layouts/full-width';
import SingleSubHeader from 'layouts/single-sub-header';
import CareerSection from 'components/careers/career';
import EEOpportunityContent from 'components/careers/equal-opportunity-content';
import { headers } from 'utils/helpers';

export default function Careers({ slides, careers, seo }) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [sort, setSort] = useState('title');
  const [career, setCareer] = useState('');

  function filterTerm(e) {
    const keyword = e.target.value;
    setKeyword(keyword);
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
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
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
      <Footer slides={slides} />
    </>
  );
}

export async function getServerSideProps() {
  const [careerJson, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/career-portal/careers`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);
  const { seo, careers } = careerJson;


  return {
    props: {
      slides,
      seo,
      careers: careerJson.hasOwnProperty('careers') ? careerJson.careers : [],
    },
  };
}
