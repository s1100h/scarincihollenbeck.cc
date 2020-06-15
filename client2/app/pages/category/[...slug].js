import React, { useState } from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FullWidth from '../../layouts/full-width';
import LargeSidebar from '../../layouts/large-sidebar';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Search from '../../components/search';
import Breadcrumbs from './breadcrumbs';
import CategoryHeader from './category-header';
import { headers, makeTitle } from '../../utils/helpers';
import { singleCityBackgroundJPG } from '../../utils/next-gen-images';


function Category({slides, category, router }) {
  // const sortedAuthors = sortByKey(authors, 'lastName');
  console.log(router);
  
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
            <link rel="canonical" href={`${router.pathname}/${category.seo.canonicalLink}`} />
          </Head>
          <div id="category">
            <FullWidth>
              <Breadcrumbs
                category={category}
              />
            </FullWidth>
            <LargeSidebar
              body={(<CategoryHeader title={router.asPath} content={category.description} />)}
              sidebar={
                (
                  <>
                    <small className="mb-3">
                      Not what you are looking for? Feel free to see search out site to find the right attorney for your business.
                    </small>
                    <Search />
                  </>
                )
              }
            />
            <Footer slides={slides} />
          </div>
        </>
      )}    
    </>
  );
}

export async function getStaticPaths() {
  const allCategoryResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/all`, { headers });
  const allCategoryJson = await allCategoryResponse.json();

  return  {
    paths: allCategoryJson.map(category => `/category/${category.link}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const categoryResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/${params.slug}`, { headers });
  const categoryJson = await categoryResponse.json();
  const slides = await sliderResponse.json();
  const category = categoryJson;
  

  // if practices are 0
  // if(categoryJson.practices.length === 0) {
  //   const firmInsightsResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/firm-insights-children`, { headers });
  //   const firmInsightsJson = await firmInsightsResponse.json();
  //   practiceResults = firmInsightsJson;
  // }

  // // if its firm events or firm news page 
  // // get different resources
  // if (params.slug === 'firm-news' || params.slug === 'firm-events') {
  //   const practicesResponse = await fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, { headers });
  //   const firmInsightsResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/firm-insights-children`, { headers });
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