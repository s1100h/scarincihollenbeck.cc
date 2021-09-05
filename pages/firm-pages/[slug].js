import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteLoader from 'components/shared/site-loader';
import SimpleSearch from 'components/shared/simple-search';
import SubscriptionMessage from 'components/shared/subscription-message';
import SidebarContent from 'components/pages/practice/sidebar';
import PageArticleHero from 'components/pages/page/page-article-hero';
import SingleSubHeader from 'layouts/single-sub-header';
import { createMarkup } from 'utils/helpers';
import { FIRM_PAGES, FIRM_BLOG_PAGES, SITE_URL } from 'utils/constants';
import { getFirmPagesContent } from 'utils/queries';
import lineHeaderStyles from 'styles/LineHeader.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function FirmPages({ page, relatedPages, currentPage }) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}/${currentPage}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  return (
    <>
      <NextSeo title={page.seo.title} description={page.seo.metaDesc} canonical={canonicalUrl} />
      <SingleSubHeader title={page.title} subtitle={page.description} span={6} offset={0} />
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
  const request = await getFirmPagesContent(params.slug);
  const relatedPages = FIRM_PAGES.filter((a) => a.slug.replace('/', '') !== params.slug);

  return {
    props: {
      page: request,
      relatedPages,
      currentPage: params.slug,
    },
    revalidate: 1,
  };
}
