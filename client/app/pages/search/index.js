import React, { useState, useEffect } from 'react';
import Head from 'next/head';
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

const request = require('superagent');

export default function SearchPage({
  slides, firmNews, firmEvents, firmInsights,
}) {
  const router = useRouter();
  const { q, page } = router.query;
  const [results, setResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const [body] = await Promise.all([
        fetch(`https://admin.scarincihollenbeck.com/wp-json/search/query/${q}/${page}`, { headers }).then((data) => data.json())
      ]);
      const { results, pages, term, posts } = body;

      setResults(results);
      setPages(pages);
      setTerm(term);
      setCurrentPage(page);
      setPosts(posts);      
    };

    if (q !== undefined && page !== undefined) {
      fetchData();
    }
  }, [q, page]);

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
              header={(<Breadcrumbs breadCrumb={[makeQueryTitle(term), currentPage]} categorySlug={term} />)}
              body={(
                <Body
                  results={results}
                  term={term}
                  pages={pages}
                  currentPage={currentPage}
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


export async function getStaticProps() {
  const [firmNews, firmEvents, firmInsights, slides] = await Promise.all([
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
    },
  };
}
