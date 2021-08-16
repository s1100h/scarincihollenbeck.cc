import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PracticeLinks from 'components/singlepractice/links';
import PracticeContent from 'components/singlepractice/content';
import RelatedAttorneys from 'components/singlepractice/related-attorneys';
import PracticeClientSlider from 'components/singlepractice/client-slider';
import ArticleHeroPractice from 'components/singlepractice/practice-article-hero';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import CovidResourceBox from 'components/singlepractice/covid-resource-box';
import PracticeSidebar from 'components/singlepractice/sidebar';
import SiteLoader from 'components/site-loader';
import SingleSubHeader from 'layouts/single-sub-header';
import { urlify, headers, sortByKey } from 'utils/helpers';
import { buildBusinessSchema } from 'utils/json-ld-schemas';
import lineStyles from 'styles/LineHeader.module.css';
import textStyles from 'styles/Text.module.css';

export default function PracticeSingle({
  corePractices,
  practice,
  practiceChildren,
}) {
  const router = useRouter();
  const practiceUrl = router.asPath
    .replace('/practices/', '')
    .replace('/practice/', '');
  const canoncialUrl = `https://scarincihollenbeck.com/practice/${practice.slug}`;

  if (router.isFallback) {
    return <SiteLoader />;
  }

  function handleLink(e) {
    router.push(e.target.value);
  }

  return (
    <>
      <NextSeo
        title={practice.seo.title}
        description={practice.seo.metaDescription}
        canonical={canoncialUrl}
        openGraph={{
          type: 'website',
          url: canoncialUrl,
          title: practice.seo.title,
          description: practice.seo.metaDescription,
          images: [
            {
              url: 'https://scarincihollenbeck.com/images/no-image-found-diamond.png',
              width: 300,
              height: 140,
              alt: practice.seo.title,
            },
          ],
          site_name: canoncialUrl,
        }}
        twitter={{
          handle: '@S_H_Law',
          site: canoncialUrl,
          cardType: practice.seo.metaDescription,
        }}
      />
      <Head>
        <script
          key="ScarinciHollenbeck"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBusinessSchema()),
          }}
        />
      </Head>
      <SingleSubHeader
        title={practice.title}
        subtitle={practice.description}
        offset={0}
        span={8}
        isTabs
      />
      <TabContainer
        id="nav-tab"
        defaultActiveKey={urlify(practice.content[0].title)}
      >
        <Container>
          <Row>
            <Col sm={12}>
              <PracticeLinks links={practice} practiceUrl={practiceUrl} />
            </Col>
            <Col sm={12} md={9} style={{ position: 'relative', bottom: '2.5em' }}>
              {practice.content.length > 0
                && practice.content.map((item) => (
                  <TabContent key={item.title}>
                    <PracticeContent
                      tabTitle={urlify(item.title)}
                      title={item.title}
                      content={item.content}
                    />
                  </TabContent>
                ))}
              {practice.attorneyList.length > 0 && (
                <RelatedAttorneys
                  members={practice.attorneyList}
                  chair={practice.chair}
                  handleLink={handleLink}
                  title="Chair"
                />
              )}
              {practice.highlightReal.length > 0 && (
                <>
                  <div className={`${lineStyles.lineHeader} my-4`}>
                    <h3>Representative Clients</h3>
                  </div>
                  <PracticeClientSlider content={practice.highlightReal} />
                </>
              )}
              {practice.industryTopics.length > 0 && (
                <>
                  <div className={`${lineStyles.lineHeader} my-4`}>
                    <h3>Latest News & Articles</h3>
                  </div>
                  <ArticleHeroPractice
                    link={urlify(practiceUrl)}
                    content={practice.industryTopics}
                  />
                </>
              )}
            </Col>
            <Col sm={12} md={3} style={{ position: 'relative', bottom: '2.85em' }}>
              <SimpleSearch />
              <hr />
              {router.query.slug === 'education-law' && (
                <>
                  <div>
                    <div className="mx-auto d-block">
                      <Image
                        src="/images/1593501004logo-250x250.png"
                        width={200}
                        height={200}
                        alt="NJSBA 2020 event"
                      />
                    </div>
                    <h5>
                      <Link
                        href="https://virtualworkshop.njsba.org/en/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <a className={textStyles.redTitle}>
                          <strong>
                            <u>Visit our booth</u>
                          </strong>
                        </a>
                      </Link>
                    </h5>
                    <hr />
                  </div>
                  <CovidResourceBox
                    title="COVID-19 Response Team"
                    link="/government-education-covid-19-response-team"
                    message="Learn more about the Government & Education Law Practice's COVID-19 focused response team."
                  />
                  <hr />
                </>
              )}
              {router.query.slug === 'crisis-risk-management' && (
                <>
                  <CovidResourceBox
                    title="COVID-19 Crisis Management Unit"
                    link="/covid-19-crisis-management-unit"
                    message="Learn more about the Crisis & Risk Management Law Practice's COVID-19 Strategic Response Unit."
                  />
                  <hr />
                </>
              )}
              <SubscriptionMessage />
              <hr />
              <PracticeSidebar
                title="Core Practices"
                content={corePractices}
                tabKey={2}
              />
              {practiceChildren.length > 0 && (
                <>
                  <hr />
                  <PracticeSidebar
                    title="Related Practices"
                    content={practiceChildren}
                    tabKey={1}
                  />
                </>
              )}
            </Col>
          </Row>
        </Container>
      </TabContainer>
    </>
  );
}

export async function getStaticPaths() {
  const [res] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/practice-portal/all-links',
      { headers },
    ).then((data) => data.json()),
  ]);

  const fullPracticeList = res.map((slug) => `/practice/${slug}`);

  return {
    paths: fullPracticeList || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [res, practices] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/individual-practices/practice/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/practice-portal/page', {
      headers,
    }).then((data) => data.json()),
  ]);

  if (res.status === 404) {
    return {
      notFound: true,
    };
  }

  const corePractices = practices.practices.filter(
    (practice) => practice.category === 'Core Practices',
  );

  return {
    props: {
      practice: res,
      practiceChildren: res.children || [],
      corePractices: sortByKey(corePractices, 'title'),
    },
    revalidate: 1,
  };
}
