
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Error from 'pages/_error';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FullWidth from 'layouts/full-width';
import LargeSidebar from 'layouts/large-sidebar';
import Search from 'components/search';
import Breadcrumbs from 'components/category/breadcrumbs';
import MainArticlesContainer from 'components/category/main-articles-container';
import MainSidebarContent from 'components/category/main-sidebar-content';
import CategoryHeader from 'components/category/header';
import CategorySliderContainer from 'components/category/slider-container';
import ColumnContent from 'components/category/column-content';
import Footer from 'components/footer';
import {
  headers,
  sortByKey,
  urlify,
} from 'utils/helpers';

export default function CategoryLandingPage({
  category,
  seo,
  corePractices,
  firmCategories,
}) {
  const router = useRouter();
  const categorySlug = router.asPath.split('/');
  const categoryTitle = categorySlug[categorySlug.length - 1];

  if (category.status === 404) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
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
          <NextSeo
            title={
              seo.title || `${categoryTitle} Legal Blog | Scarinci Hollenbeck`
            }
            description={seo.metaDescription || ''}
            canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
          />
          <div id="category">
            <FullWidth>
              <Breadcrumbs category={category} />
            </FullWidth>
            <LargeSidebar
              body={(
                <CategoryHeader
                  title={categoryTitle}
                  content={category.description}
                />
              )}
              sidebar={(
                <>
                  <small className="mb-3">
                    Not what you are looking for? Feel free to see search out
                    site to find the right attorney for your business.
                  </small>
                  <Search />
                </>
              )}
            />
            <LargeSidebar
              body={<MainArticlesContainer main={category.main} />}
              sidebar={<MainSidebarContent latest={category.latest} />}
            />
            <FullWidth>
              <CategorySliderContainer
                title="MOST RECENT"
                slides={category.archives}
              />
            </FullWidth>
            <FullWidth>
              <div className="line-header">
                <h3>DISCOVER</h3>
              </div>
            </FullWidth>
            {category.current_category.slug === 'firm-events'
            || category.current_category.slug === 'firm-news' ? (
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
                  colTwoTitle={
                  category.practices.length > 0
                    ? 'More about our areas of law'
                    : "Firm Insight's Categories"
                }
                  colTwoContent={
                  category.practices.length > 0
                    ? category.practices
                    : firmCategories
                }
                />
              )}
            {category.practices.map(
              (val) => val.name !== 'Uncategorized' && (
              <FullWidth className="col-sm-12 mt-5" key={val.id}>
                <CategorySliderContainer
                  title={val.name}
                  slides={val.posts}
                />
              </FullWidth>
              ),
            )}
            <FullWidth className="border-top mt-5">
              <p className="text-center lead mt-4">
                <small>
                  <em>
                    Looking for something specific, feel free to search our
                    archives.
                  </em>
                </small>
              </p>
              <p className="text-center">
                <a
                  className="red-title"
                  href={`/archives?q=${urlify(categoryTitle)}&page=1`}
                >
                  <u>Site Archives &gt;&gt;</u>
                </a>
              </p>
            </FullWidth>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const [category, firmCategories, corePractices] = await Promise.all([
    fetch(
      `${process.env.REACT_APP_WP_BACKEND}/wp-json/category/posts/${
        params.slug[params.slug.length - 1]
      }`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `${process.env.REACT_APP_WP_BACKEND}/wp-json/category/firm-insights-children`,
      { headers },
    ).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/core-practices/list`, {
      headers,
    }).then((data) => data.json()),
  ]);

  if (category.status === 404 && res) {
    res.statusCode = 404;
  }

  return {
    props: {
      category,
      current: params.slug,
      seo: category.seo || {},
      firmCategories,
      corePractices,
    },
  };
}
