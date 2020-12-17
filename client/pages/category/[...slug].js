import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FullWidth from 'layouts/full-width';
import LargeSidebar from 'layouts/large-sidebar';
import Search from 'components/search';
import BreadCrumbs from 'components/Breadcrumbs';
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
import styles from 'styles/LineHeader.module.css'

export default function CategoryLandingPage({
  posts, description, name, seo, uri, children,
}) {
  const router = useRouter()
  console.log({
    posts, description, name, seo, uri, children,
  });

  // main articles
  const mainArticle = posts[0];
  const sideBarArticles = posts.filter((_, index) => index > 0 && index <= 3);
  const sliderArticles = posts.filter((_, index) => index >= 4);
  
  // check if is event page
  const isEventPage = router.asPath.indexOf('firm-events') > 0
  const isNewsPage = router.asPath.indexOf('firm-news') > 0

  return (
    <>
      <NextSeo
        title={
          seo.title || `${name} Legal Blog | Scarinci Hollenbeck`
        }
        description={seo.metaDesc || ''}
        canonical={`http://scarincihollenbeck.com${seo.uri}`}
      />
      <br />
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
        body={<MainArticlesContainer main={mainArticle} />}
        sidebar={<MainSidebarContent latest={sideBarArticles} />}
      />
      <FullWidth>
        <CategorySliderContainer
          title="MOST RECENT"
          slides={sliderArticles}
        />
      </FullWidth>
      <FullWidth>
        <div className={styles.lineHeader}>
          <h3>Discover</h3>
        </div>
      </FullWidth>
      {/** We'll wrap this in a condition for event and news pages */}
      <ColumnContent
        colOneTitle="Scarinci Hollenbeck Core Practices"
        colOneContent={[]}
        colTwoTitle="Firm Insight's Categories"
        colTwoContent={[]}
      />
      {/*
        <>   
          {isEventPage || isFirmPage ? (
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

  return {
    props: {
      name: res.data.categories.nodes[0].name,
      description: res.data.categories.nodes[0].description,
      posts: res.data.categories.nodes[0].posts.edges,
      seo: res.data.categories.nodes[0].seo,
      uri: res.data.categories.nodes[0].uri,
      children: res.data.categories.nodes[0].children.nodes,
    },
    revalidate: 1,
  };
}
