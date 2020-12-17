import React from 'react';
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
  results,
  page,
  pages,
  authorJson,
  firmNews,
  firmEvents,
  firmInsights,
}) {
  return (
    <>
      {(authorJson === undefined && results.length <= 0) ? (
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
              header={(<Breadcrumbs breadCrumb={[authorJson.currentUser, page]} categorySlug={authorJson.currentUser} />)}
              body={(
                <Body
                  results={results}
                  term={authorJson.currentUser}
                  pages={pages}
                  currentPage={page}
                  news={firmNews}
                  events={firmEvents}
                  insight={firmInsights}
                />
              )}
              sidebar={(<Sidebar bio={authorJson.bio} practices={authorJson.practices} />)}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ params, query }) {
  const [response, authorJson, firmNews, firmInsights, firmEvents] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/author/posts/${params.slug}/${query.page || 1}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/author/bio/${params.slug}`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/firm-news`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/firm-events`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/law-firm-insights`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then((data) => data.json()),
  ]);

  return {
    props: {
      page: query.page || 1,
      pages: response.pages || 1,
      results: response.results || [],
      authorJson,
      firmNews: firmNews.latest || [],
      firmEvents: firmEvents.latest || [],
      firmInsights: firmInsights.latest || [],
    },
  };
}
