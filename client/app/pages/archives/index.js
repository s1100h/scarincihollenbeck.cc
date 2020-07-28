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
      const [response] = await Promise.all([
        fetch(`https://admin.scarincihollenbeck.com/wp-json/search/query/${q}/${page}`, { headers }).then((data) => data.json())
      ]);
      const { results, pages, term, posts } = response;

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

export async function getServerSideProps() {
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
