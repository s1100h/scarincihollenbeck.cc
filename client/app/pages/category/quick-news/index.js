import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import QuickNewsBody from 'components/quick-news-body';
import Sidebar from 'components/archives/sidebar';
import Footer from 'components/footer';
import { headers } from 'utils/helpers';

const request = require('superagent');

export default function QuickNews({
  firmNews, firmEvents, firmInsights, slides,
}) {
  const router = useRouter();
  const { page } = router.query;
  const [results, setResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {

      const [body] = await Promise.all([
        fetch(`https://admin.scarincihollenbeck.com/wp-json/archive/query/quick-news/${page}`, { headers }).then((data) => data.json())
      ]);

      const { results, pages, term, posts } = body;
      setResults(results);
      setPages(pages);
      setTerm(term);
      setCurrentPage(page);
      setPosts(posts);
    };

    if (page !== undefined) {
      fetchData();
    }
  }, [page]);

  const seo = {
    title: 'Scarinci Hollenbeck Laywers News & Media Appearances',
    metaDescription: 'The Scarinci Hollenbeck attorneys have their finger on the pulse of the latest legal issues that affect businesses through New York & New Jersey.',
    canonicalLink: 'category/quick-news',
  };

  return (
    <>
      {(results.length === 0) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>

      ) : (
        <>
          <NextSeo
            title={seo.title || ''}
            description={seo.metaDescription || ''}
            canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
          />
          <div id="quick-news">
            <ArchiveLayout
              header={(<Breadcrumbs breadCrumb={[term, 1]} categorySlug={term} />)}
              body={(
                <QuickNewsBody
                  results={results}
                  term={term}
                  pages={pages}
                  currentPage={currentPage}
                  news={firmNews}
                  events={firmEvents}
                  insight={firmInsights}
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

export async function getStaticProps({ params }) {
  const [articles, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/latest-articles`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  const { firmNews, firmEvents, firmInsights } = articles;


  return {
    props: {
      firmNews,
      firmEvents,
      firmInsights,
      slides,
    },
  };
}
