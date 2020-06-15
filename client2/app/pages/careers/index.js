import React, { useState } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import FullWidth from '../../layouts/full-width';
import SingleSubHeader from '../../layouts/single-sub-header';
import CareerSection from './career';
import EEOpportunityContent from './equal-opportunity-content';
import { headers } from '../../utils/helpers';
import { singleCityBackgroundJPG } from '../../utils/next-gen-images';


function Careers({slides, careers, seo, router}) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [sort, setSort] = useState('title');
  const [positions, setPositions] = useState([]);
  const [career, setCareer] = useState('');
  
  function filterTerm(e) {
    const keyword = e.target.value;
    setKeyword(keyword);
  }

  function selectOption(e) {   
    const { name, innerText } = e.target;
    console.log();

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
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${router.pathname}/${seo.canonicalLink}`} />
      </Head>
      <NavBar />
      <div id="careers">
        <SingleSubHeader
          image={singleCityBackgroundJPG}
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
  )
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const slides = await sliderResponse.json();
  const careerResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/career-portal/careers`, { headers });
  const careerJson = await careerResponse.json();
  const { seo, careers } = careerJson;
  

  return {
    props: {
      slides,
      seo,
      careers
    },
  }
}

export default withRouter(Careers);