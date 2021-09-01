import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteLoader from 'components/site-loader';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import SidebarContent from 'components/singlepractice/sidebar';
import PageArticleHero from 'components/pages/page-article-hero';
import SingleSubHeader from 'layouts/single-sub-header';
import { headers, createMarkup } from 'utils/helpers';
import { FIRM_PAGES, FIRM_BLOG_PAGES } from 'utils/constants';
import lineHeaderStyles from 'styles/LineHeader.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function FirmPages({ page, relatedPages, currentPage }) {
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

  const canonicalUrl = `http://scarincihollenbeck.com/${currentPage}`;

  return (
    <>
      <NextSeo title={page.seo.title} description={page.seo.metaDesc} canonical={canonicalUrl} />
      <SingleSubHeader title={page.title} subtitle={page.description} span={6} offset={0} isBlog />
      <Container>
        <Row>
          <Col sm={12} md={9}>
            {page.tabs.map((tab) => (
              <div key={tab.title}>
                <h4 className={`${grayTitleStyles.title} text-capitalize w-100`}>{tab.title}</h4>
                <div dangerouslySetInnerHTML={createMarkup(tab.content)} />
              </div>
            ))}
            {page.attorneysMentioned.length > 0 && (
              <>
                <div className={lineHeaderStyles.lineHeader}>
                  <h3>Recent from the firm</h3>
                </div>
                <div className="my-5">
                  <PageArticleHero
                    link={page.title.replace(/\s+/g, '-').toLowerCase()}
                    content={page.attorneysMentioned}
                  />
                </div>
              </>
            )}
          </Col>
          <Col sm={12} md={3} style={{ marginTop: '-1.5em' }}>
            <SimpleSearch />
            <hr />
            <SubscriptionMessage />
            <hr />
            <SidebarContent title="Firm Library" content={FIRM_BLOG_PAGES} tabKey={2} />
            <hr />
            <SidebarContent title="Diversity" content={relatedPages} tabKey={2} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const urls = FIRM_PAGES.map((a) => `/firm-pages${a.slug}`);

  return {
    paths: urls || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const restResponse = await fetch(
    `https://wp.scarincihollenbeck.com/wp-json/firm-page/page/${params.slug}`,
    { headers },
  ).then((data) => data.json());

  const relatedPages = FIRM_PAGES.filter((a) => a.slug.replace('/', '') !== params.slug);

  return {
    props: {
      page: restResponse,
      relatedPages,
      currentPage: params.slug,
    },
    revalidate: 1,
  };
}
