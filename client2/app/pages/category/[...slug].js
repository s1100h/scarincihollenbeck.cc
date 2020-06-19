import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FullWidth from '../../layouts/full-width';
import LargeSidebar from '../../layouts/large-sidebar';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Search from '../../components/search';
import Breadcrumbs from '../../components/category/breadcrumbs';
import MainArticlesContainer from '../../components/category/main-articles-container';
import MainSidebarContent from '../../components/category/main-sidebar-content';
import CategoryHeader from '../../components/category/category-header';
import CategorySliderContainer from '../../components/category/category-slider-container';
import ColumnContent from '../../components/category/column-content';
import { headers, makeTitle, sortByKey, formatCorePractices, urlify } from '../../utils/helpers';
import { singleCityBackgroundJPG } from '../../utils/next-gen-images';

const request = require('superagent');

export default function Category({slides, category, current }) {
  const [firmCategories, setFirmCategories ] = useState([]);
  const [corePractices, setCorePractices ] = useState([]);
  const router = useRouter();

  // get page term
  const categorySlug = router.asPath.split('/');
  const categoryTitle = categorySlug[categorySlug.length -1];

  useEffect(() => {
    const fetchData = async () => {
      // get firm insight categories
      const requestFirmCategories = request.get('http://localhost:8400/wp-json/category/firm-insights-children')
        .set(headers)
        .then((res) => ({
          status: res.status,
          body: JSON.parse(res.text),
        }))
        .catch((err) => err);

      requestFirmCategories.then((results) => {
        const { status, body } = results;
        if(status === 200) {
          setFirmCategories(body);
        }
      });

      const requestCorePractices = request.get('http://localhost:8200/cached/core-practices')
        .set(headers)
        .then((res) => ({
          status: res.status,
          body: JSON.parse(res.text),
        }))
        .catch((err) => err);

        requestCorePractices.then((results) => {
          const { status, body } = results;

          if(status === 200) {
            const formattedPractices = body.map(item => formatCorePractices(item));
            setCorePractices(formattedPractices);
          }
      });


    };

    fetchData();
    
  }, []);
 
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
            <link rel="canonical" href={`https://scarincihollenbeck.com/category/${category.seo.canonicalLink}`} />
          </Head>
          <div id="category">
            <FullWidth>
              <Breadcrumbs
                category={category}
              />
            </FullWidth>
            <LargeSidebar
              body={(<CategoryHeader title={categoryTitle} content={category.description} />)}
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
            <LargeSidebar
              body={(<MainArticlesContainer main={category.main} />)}
              sidebar={(<MainSidebarContent latest={category.latest} />)}
            />
            <FullWidth>
              <CategorySliderContainer title="MOST RECENT" slides={category.archives} />
            </FullWidth>
            <FullWidth>
              <div className="line-header">
                <h3>DISCOVER</h3>
              </div>
            </FullWidth>
            { (category.current_category.slug === 'firm-events' || category.current_category.slug === 'firm-news') ? (
                <ColumnContent
                  colOneTitle="Scarinci Hollenbeck Core Practices"
                  colOneContent={corePractices}
                  colTwoTitle="Firm Insight's Categories"
                  colTwoContent={firmCategories}
                />
              ) : (
                <ColumnContent
                  colOneTitle="More from our attorneys"
                  colOneContent={sortByKey(category.authors, 'lastName')}
                  colTwoTitle={(category.practices.length > 0) ? "More about our areas of law": "Firm Insight's Categories" }
                  colTwoContent={(category.practices.length > 0) ? category.practices : firmCategories }
                />
              )}
              {category.practices.map((val) => (val.name !== 'Uncategorized') && (
                <FullWidth className="col-sm-12 mt-5" key={val.id}>
                  <CategorySliderContainer title={val.name} slides={val.posts} />
                </FullWidth>
              ))}
              <FullWidth className="border-top mt-5">
                <p className="text-center lead mt-4">
                  <small>
                    <em>Looking for something specific, feel free to search our archives.</em>
                  </small>
                </p>
                <p className="text-center">
                    <a className="red-title" href={`/archives?q=${urlify(categoryTitle)}&page=1`}>                      
                      <u>Site Archives &gt;&gt;</u>
                    </a>
                </p>
              </FullWidth>
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
    paths: allCategoryJson.map(category => `/category${category.link}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const categoryResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/${params.slug}`, { headers });
  const categoryJson = await categoryResponse.json();
  const slides = await sliderResponse.json();
  const category = categoryJson;

  return {
    props: {
      slides,      
      category,
      current: params.slug
    },
  }
}