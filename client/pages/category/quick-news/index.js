import { NextSeo } from 'next-seo';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Breadcrumbs from 'components/breadcrumbs';
import ArchiveLayout from 'layouts/archive-layout';
import QuickNewsBody from 'components/quick-news-body';
import Sidebar from 'components/archives/sidebar';
import Footer from 'components/footer';
import { headers } from 'utils/helpers';

export default function CategoryQuickNews({
  firmNews,
  firmEvents,
  firmInsights,
  results,
  posts,
  pages,
  term,
  page,
}) {
  return (
    <>
      {results.length === 0 ? (
        <Container>
          <Row
            id="page-loader-container"
            className="justify-content-center align-self-center"
          >
            <BarLoader color="#DB2220" />
          </Row>
        </Container>
      ) : (
        <>
          <NextSeo nofollow />
          <div id="quick-news">
            <ArchiveLayout
              header={
                <Breadcrumbs breadCrumb={[term, page]} categorySlug={term} />
              }
              body={(
                <QuickNewsBody
                  results={results}
                  term={term}
                  pages={pages}
                  currentPage={page}
                  news={firmNews}
                  events={firmEvents}
                  insight={firmInsights}
                />
              )}
              sidebar={<Sidebar trending={posts} />}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ query }) {
  const [response, firmNews, firmEvents, firmInsights] = await Promise.all([
    fetch(
      `${process.env.REACT_APP_WP_BACKEND}/wp-json/archive/query/quick-news/${query.page}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/firm-news`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/firm-events`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/law-firm-insights`,
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    props: {
      firmNews: firmNews.latest || [],
      firmEvents: firmEvents.latest || [],
      firmInsights: firmInsights.latest || [],
      results: response.results || [],
      pages: response.pages || 0,
      term: response.term || '',
      posts: response.posts || [],
      page: query.page || 1,
    },
  };
}
