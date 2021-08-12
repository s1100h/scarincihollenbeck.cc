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
import lineHeaderStyles from 'styles/LineHeader.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

const pages = [
  {
    id: 'WF7jMpVJP3PTnuP',
    title: 'Pro Bono',
    slug: 'pro-bono',
  },
  {
    id: 'vehm0rQb7cpMH92',
    title: 'Women Lead',
    slug: 'women-lead',
  },
  {
    id: 'SjveurE3BK1R1l2',
    title: 'Community Involvement',
    slug: 'community-involvement',
  },
  {
    id: 'SjveurE7BK1R1l2',
    title: 'Diversity Group',
    slug: 'diversity-group',
  },
];

export default function FirmPages({ page, relatedPages }) {
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

  return (
    <>
      <NextSeo
        title={page.seo.title}
        description={page.seo.metaDesc}
        canonical="http://scarincihollenbeck.com/community-involvement"
      />
      <SingleSubHeader
        title={page.title}
        subtitle={page.description}
        span={6}
        offset={0}
        isBlog
      />

      <Container>
        <Row>
          <Col sm={12} md={9}>
            {page.tabs.map((tab) => (
              <div key={tab.title}>
                <h4
                  className={`${grayTitleStyles.title} text-capitalize w-100`}
                >
                  {tab.title}
                </h4>
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
            <SidebarContent
              title="Diversity"
              content={relatedPages}
              tabKey={2}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: pages.map((a) => `/firm-pages/${a.slug}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const restResponse = await fetch(
    `https://wp.scarincihollenbeck.com/wp-json/firm-page/page/${params.slug}`,
    { headers },
  ).then((data) => data.json());

  return {
    props: {
      page: restResponse,
      relatedPages: pages.filter((a) => a.slug !== params.slug),
    },
    revalidate: 1,
  };
}
