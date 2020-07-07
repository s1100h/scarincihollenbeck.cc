import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from 'components/footer';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import Body from 'components/archives/body';
import Sidebar from 'components/archives/sidebar';
import { headers, makeQueryTitle } from 'utils/helpers';

const request = require('superagent');

export default function Archive({
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
      const fetchQuery = request.get(`https://admin.scarincihollenbeck.com/wp-json/archive/query/${q}/${page}`)
        .set(headers)
        .then((res) => ({
          status: res.status,
          body: JSON.parse(res.text),
        }))
        .catch((err) => err);

      fetchQuery.then((results) => {
        const { status, body } = results;

        if (status === 200) {
          const {
            results, pages, term, posts,
          } = body;

          setResults(results);
          setPages(pages);
          setTerm(term);
          setCurrentPage(page);
          setPosts(posts);
        }
      });
    };

    if (q !== undefined && page !== undefined) {
      fetchData();
    }
  }, [q, page]);


  return (
    <>
      {(results.length === 0 && slides === undefined) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>
      ) : (
        <div id="archives">
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
                pathname="/archives"
                q={q}
              />
            )}
            sidebar={(<Sidebar trending={posts} />)}
          />
        </div>
      )}
      <Footer slides={slides} />
    </>
  );
}


export async function getStaticProps() {
  const [articleJson, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/latest-articles`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  const { firmNews, firmEvents, firmInsights } = articleJson;


  return {
    props: {
      slides,
      firmNews,
      firmEvents,
      firmInsights,
    },
  };
}
