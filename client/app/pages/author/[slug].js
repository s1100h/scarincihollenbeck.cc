import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from 'components/footer';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import Body from 'components/author/body';
import Sidebar from 'components/author/sidebar';
import { headers } from 'utils/helpers';

export default function Author({
  slides, authorJson, firmNews, firmEvents, firmInsights,
}) {
  const router = useRouter();
  const { page } = router.query;
  const [results, setResults] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      // fetch query results
      let currentPage = 1;

      if (page !== undefined) {
        currentPage = page;
      }

      const [response] = await Promise.all([
        fetch(`https://admin.scarincihollenbeck.com/wp-json/author/posts/${authorJson.currentUser}/${currentPage}`, { headers }).then((data) => data.json())
      ]);

      const { pages, results } = response;
      setResults(results);
      setPages(pages);
      setCurrentPage(currentPage);          
    };

    fetchData();
  }, [page]);

  return (
    <>
      {(authorJson === undefined && results.length <= 0 && slides === undefined) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>
      ) : (
        <>
          <div id="authors">
            <NextSeo nofollow />
            <ArchiveLayout
              header={(<Breadcrumbs breadCrumb={[authorJson.currentUser, currentPage]} categorySlug={authorJson.currentUser} />)}
              body={(
                <Body
                  results={results}
                  term={authorJson.currentUser}
                  pages={pages}
                  currentPage={currentPage}
                  news={firmNews}
                  events={firmEvents}
                  insight={firmInsights}
                />
              )}
              sidebar={(<Sidebar bio={authorJson.bio} practices={authorJson.practices} />)}
            />
          </div>
          <Footer slides={slides} />
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const [authorJson, firmNews, firmInsights, firmEvents, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/author/bio/${params.slug}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/firm-news`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/firm-events`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/law-firm-insights`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  return {
    props: {
      slides,
      authorJson,
      firmNews: firmNews.latest || [],
      firmEvents: firmEvents.latest || [],
      firmInsights: firmInsights.latest || [],
    },
  };
}
