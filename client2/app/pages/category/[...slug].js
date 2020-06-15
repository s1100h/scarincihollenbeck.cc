import React, { useState } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FullWidth from '../../layouts/full-width';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Breadcrumbs from './breadcrumbs';
import { headers } from '../../utils/helpers';
import { singleCityBackgroundJPG } from '../../utils/next-gen-images';


function Category({slides, category, router }) {
  // const sortedAuthors = sortByKey(authors, 'lastName');
  
  return (
    <>
      <NavBar />
      {(category === undefined) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color={"#DB2220"} />
          </Row>
        </Container>       
      ) : (
        <>
          <Head>
            <title>{category.seo.title}</title>
            <meta name="description" content={category.seo.metaDescription} />
            <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <link rel="canonical" href={`${router.pathname.origin}/${category.seo.canonicalLink}`} />
          </Head>
          <div id="category">
            <FullWidth>
              <Breadcrumbs
                category={category}
              />
            </FullWidth>
            <Footer slides={slides} />
          </div>
        </>
      )}    
    </>
  );
}

export async function getStaticPaths() {
  const allCategoryResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/category/all`, { headers });
  const allCategoryJson = await allCategoryResponse.json();

  return  {
    paths: allCategoryJson.map(category => `/category/${category.link}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/just-in/posts`, { headers });
  const categoryResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/category/posts/${params.slug}`, { headers });
  const categoryJson = await categoryResponse.json();
  const slides = await sliderResponse.json();
  const category = categoryJson;

  // if practices are 0
  // if(categoryJson.practices.length === 0) {
  //   const firmInsightsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/category/firm-insights-children`, { headers });
  //   const firmInsightsJson = await firmInsightsResponse.json();
  //   practiceResults = firmInsightsJson;
  // }

  // // if its firm events or firm news page 
  // // get different resources
  // if (params.slug === 'firm-news' || params.slug === 'firm-events') {
  //   const practicesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, { headers });
  //   const firmInsightsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/category/firm-insights-children`, { headers });
  //   const practicesJson = await practicesResponse.json();
  //   const firmInsightsJson = await firmInsightsResponse.json();

  //   const formattedCorePractices = practicesJson.map((cp) => ({
  //     name: cp.title,
  //     link: cp.slug,
  //   }));

  //   practiceResults = firmInsightsJson;
  //   corePractices = formattedCorePractices;
  // }  

  return {
    props: {
      slides,      
      category
    },
  }
}

export default withRouter(Category);