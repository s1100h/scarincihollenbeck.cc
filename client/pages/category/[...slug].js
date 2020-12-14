import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FullWidth from 'layouts/full-width';
import LargeSidebar from 'layouts/large-sidebar';
import Search from 'components/search';
import BreadCrumbs from 'components/Breadcrumbs'
import MainArticlesContainer from 'components/category/main-articles-container';
import MainSidebarContent from 'components/category/main-sidebar-content';
import CategoryHeader from 'components/category/header';
import CategorySliderContainer from 'components/category/slider-container';
import ColumnContent from 'components/category/column-content';
import Footer from 'components/footer';
import {
  sortByKey,
  urlify,
} from 'utils/helpers';
import client from 'utils/graphql-client';
import { getAllCategories, getFirst10PostsFromSlug } from 'queries/category';

export default function CategoryLandingPage({
  posts, description, name, seo, uri, children
}) {

  console.log({
    posts, description, name, seo, uri, children
  });
  return (
    <>
      <NextSeo
        title={
          seo.title || `${name} Legal Blog | Scarinci Hollenbeck`
        }
        description={seo.metaDesc || ''}
        canonical={`http://scarincihollenbeck.com${seo.uri}`}
      />
      <FullWidth>
        <BreadCrumbs />
      </FullWidth>
      <LargeSidebar
        body={(
          <CategoryHeader
            title={name}
            content={description}
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
        body={<MainArticlesContainer main={[]} />}
        sidebar={<MainSidebarContent latest={[]} />}
      />
      We'll get there...
      {/* {router.isFallback ? (
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

          <div id="category">
            <FullWidth>
              <Breadcrumbs category={category} />
            </FullWidth>

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
          </div> */}
      {/* <Footer />
        </>
      )} */}
    </>
  );
}
export async function getStaticPaths() {
  const res = await client.query(getAllCategories, {});

  return {
    paths:
      res.data.categories.nodes.map((a) => a.uri)
      || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const categoryFromUrl = params.slug[params.slug.length - 1];
  const res = await client.query(getFirst10PostsFromSlug(categoryFromUrl), {});
  console.log('res')
  console.log(res.data.categories.nodes)
  return {
    props: {
      name: res.data.categories.nodes[0].name,
      description: res.data.categories.nodes[0].description,
      posts: res.data.categories.nodes[0].posts.edges,
      seo: res.data.categories.nodes[0].seo,
      uri: res.data.categories.nodes[0].uri,
      children: res.data.categories.nodes[0].children.nodes
    },
    revalidate: 1
  };
}
