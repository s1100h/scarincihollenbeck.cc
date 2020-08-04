import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from 'components/footer';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import Body from 'components/archives/body';
import Sidebar from 'components/archives/sidebar';
import { headers, urlify, makeQueryTitle } from 'utils/helpers';

export default function SearchPage({
  slides,
  firmNews,
  firmEvents,
  firmInsights,
  results,
  posts,
  pages,
  term,
  page,
  q
}) {

  return (
    <> 
      {(results.length <= 0) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>
      ) : (
        <>
          <div id="search">
            <NextSeo nofollow />
            <ArchiveLayout
              header={(<Breadcrumbs breadCrumb={[makeQueryTitle(term), page]} categorySlug={term} />)}
              body={(
                <Body
                  results={results}
                  term={term}
                  pages={pages}
                  currentPage={page}
                  news={firmNews}
                  events={firmEvents}
                  insight={firmInsights}
                  pathname="/search"
                  q={q}
                />
              )}
              sidebar={(<Sidebar trending={posts} />)}
            />
          </div>
          <Footer slides={slides} />
        </>
      )}
    </>
  );
}


export async function getServerSideProps({ query }) {
  const [response, firmNews, firmEvents, firmInsights, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/search/query/${query.q}/${query.page}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/firm-news`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/firm-events`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/law-firm-insights`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);


  return {
    props: {
      slides,
      firmNews: firmNews.latest || [],
      firmEvents: firmEvents.latest || [],
      firmInsights: firmInsights.latest || [],
      results: response.results || [],
      pages: response.pages || 0,
      term: response.term || '',
      posts: response.posts || [],
      page: query.page || 1,
      q: query.q || ''
    },
  };
}
