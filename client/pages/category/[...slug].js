import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import FullWidth from 'layouts/full-width';
import LargeSidebar from 'layouts/large-sidebar';
import Search from 'components/search';
import SiteLoader from 'components/site-loader';
import BasicBreadCrumbs from 'components/basic-breadcrumbs';
import MainArticlesContainer from 'components/category/main-articles-container';
import MainSidebarContent from 'components/category/main-sidebar-content';
import CategoryHeader from 'components/category/header';
import CategoryChildrenSlider from 'components/category/children-slider';
import ColumnContent from 'components/category/column-content';
import CategoryLawFirmInsightsColumnContent from 'components/category/firm-insights-column-content';
import { headers, makeTitle } from 'utils/helpers';
import Footer from 'components/footer';
import styles from 'styles/LineHeader.module.css';

export default function CategoryLandingPage({
  description,
  name,
  seo,
  children,
  uri,
  mainArticle,
  sideBarArticles,
  sliderArticles,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  // check if is event page
  const isEventPage = router.asPath.indexOf('firm-events') > 0;
  const isNewsPage = router.asPath.indexOf('firm-news') > 0;

  const removeLawFirmMarketingFromChildren = children.filter(
    (a) => a.name !== 'Law Firm Marketing',
  );

  return (
    <>
      <NextSeo
        title={seo.title || `${name} Legal Blog | Scarinci Hollenbeck`}
        description={seo.metaDesc || ''}
        canonical={`http://scarincihollenbeck.com${seo.uri}`}
      />
      <br />
      <FullWidth>
        <BasicBreadCrumbs />
      </FullWidth>
      <LargeSidebar
        body={<CategoryHeader title={name} content={description} />}
        sidebar={(
          <>
            <small className="mb-3">
              Not what you are looking for? Feel free to see search out site to
              find the right attorney for your business.
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
        <CategoryChildrenSlider title="MOST RECENT" slides={sliderArticles} />
      </FullWidth>
      <FullWidth>
        <div className={styles.lineHeader}>
          <h3>Discover</h3>
        </div>
      </FullWidth>
      {isEventPage || isNewsPage ? (
        <ColumnContent />
      ) : (
        <CategoryLawFirmInsightsColumnContent
          lawFirmInsightsCategoryChildren={removeLawFirmMarketingFromChildren}
        />
      )}
      {removeLawFirmMarketingFromChildren.map((child) => (
        <FullWidth key={child.name}>
          <div className="mt-5">
            <CategoryChildrenSlider
              title={child.name}
              slides={child.posts}
            />
          </div>
        </FullWidth>
      ))}
      <FullWidth className="border-top mt-5">
        <p className="text-center lead mt-4">
          <small>
            <em>
              Looking for something specific, feel free to search our archives.
            </em>
          </small>
        </p>
        <p className="text-center">
          <a
            className="red-title"
            href={`/archives?q=${uri.replace('/category/', '')}&page=1`}
          >
            <u>Site Archives &gt;&gt;</u>
          </a>
        </p>
      </FullWidth>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  // retrieve the authors for the post
  const [restResponse] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/category/posts/${params.slug[params.slug.length - 1]}`,
      { headers },
    )
      .then((data) => data.json())
      .catch((err) => err),
  ]);

  if (restResponse.status === 404) {
    res.statusCode = 404;
    return {
      notFound: true,
    };
  }

  return {
    props: {
      name: makeTitle(params.slug[params.slug.length - 1]),
      uri: restResponse.seo.canonicalLink || '',
      description: restResponse.description || '',
      mainArticle: restResponse.main[0] || {},
      sideBarArticles: restResponse.latest || [],
      sliderArticles: restResponse.archives || [],
      seo: restResponse.seo || {},
      children: restResponse.practices || [],
    },
  };
}
