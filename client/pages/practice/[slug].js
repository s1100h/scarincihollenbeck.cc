import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import PracticeContent from 'components/singlepractice/content';
import RelatedArticlesTab from 'components/singlepractice/related-articles-tab';
import RelatedAttorneys from 'components/singlepractice/related-attorneys';
import PracticeClientSlider from 'components/singlepractice/client-slider';
import CarouselsSimpleNews from 'components/carousels/simple-news';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import CovidResourceBox from 'components/singlepractice/covid-resource-box';
import PracticeSidebar from 'components/singlepractice/sidebar';
import SiteLoader from 'components/site-loader';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import { urlify, sortByKey, headers } from 'utils/helpers';
import client from 'utils/graphql-client';
import {
  getPracticeBySlug,
  getPracticesByInput,
} from 'queries/practices';
import tabStyle from 'styles/BigButtonTabs.module.css';
import lineStyles from 'styles/LineHeader.module.css';

export default function PracticeSingle({
  practice,
  corePractices,
  practiceChildren,
}) {
  const router = useRouter();

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
        description={practice.seo.metaDesc}
        canonical={`http://scarincihollenbeck.com/${practice.slug}`}
      />
      <SingleSubHeader
        image="/images/City-Night-Background-1800x400-JPG.jpg"
        title={practice.title}
        subtitle={practice.practicesIncluded.description}
      />
      <TabContainer
        id="nav-tab"
        defaultActiveKey={urlify(
          practice.practicesIncluded.contentSection[0].title,
        )}
      >
        <Container>
          <Row>
            <Col sm={12}>
              <Nav id="practice-navigation">
                {practice.practicesIncluded.contentSection.length > 0
                  && practice.practicesIncluded.contentSection.map((item) => (
                    <Nav.Link
                      eventKey={urlify(item.title)}
                      className={tabStyle.tab}
                      key={item.title}
                    >
                      {item.title}
                    </Nav.Link>
                  ))}
                {practice.practicesIncluded.relatedBlogCategory[0].posts.nodes
                  .length > 0 && (
                  <Nav.Link eventKey="related-updates" className={tabStyle.tab}>
                    Related Updates
                  </Nav.Link>
                )}
              </Nav>
            </Col>
            <Col sm={12} md={9} className="mt-4">
              {practice.practicesIncluded.contentSection.length > 0
                && practice.practicesIncluded.contentSection.map((item) => (
                  <TabContent key={item.title}>
                    <PracticeContent
                      tabTitle={urlify(item.title)}
                      title={item.title}
                      content={item.content}
                    />
                  </TabContent>
                ))}
              {practice.practicesIncluded.relatedBlogCategory[0].posts.nodes
                .length > 0 && (
                <TabContent>
                  <RelatedArticlesTab
                    tabTitle="related-updates"
                    title="Related Updates"
                    content={
                      practice.practicesIncluded.relatedBlogCategory[0].posts
                        .nodes
                    }
                  />
                </TabContent>
              )}
              <RelatedAttorneys
                members={practice.practicesIncluded.includeAttorney}
                chair={practice.practicesIncluded.sectionChief}
                handleLink={handleLink}
                title="Chair"
              />
              {practice.practicesIncluded.highlightScroller && (
                <>
                  <div className={`${lineStyles.lineHeader} my-4`}>
                    <h3>Representative Clients</h3>
                  </div>
                  <PracticeClientSlider
                    content={practice.practicesIncluded.highlightScroller}
                  />
                </>
              )}
              {practice.practicesIncluded.relatedBlogCategory && (
                <>
                  <div className={`${lineStyles.lineHeader} my-4`}>
                    <h3>Latest News & Articles</h3>
                  </div>
                  <CarouselsSimpleNews
                    slides={
                      practice.practicesIncluded.relatedBlogCategory[0].posts
                        .nodes
                    }
                  />
                </>
              )}
            </Col>
            <Col sm={12} md={3}>
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
                    <Link
                      href="https://virtualworkshop.njsba.org/en/"
                      className="mb-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <a>
                        <Button variant="danger" className="mx-auto d-block">
                          Visit Our Booth
                        </Button>
                      </a>
                    </Link>
                  </div>
                  <CovidResourceBox
                    title="COVID-19 Response Team"
                    link="/government-education-covid-19-response-team"
                    message="Learn more about the Government & Education Law Practice's COVID-19 focused response team."
                  />
                </>
              )}
              {router.query.slug === 'crisis-risk-management' && (
                <>
                  <CovidResourceBox
                    title="COVID-19 Crisis Management Unit"
                    link="/covid-19-crisis-management-unit"
                    message="Learn more about the Crisis & Risk Management Law Practice's COVID-19 Strategic Response Unit."
                  />
                </>
              )}
              <SimpleSearch />
              <SubscriptionMessage />
              <PracticeSidebar
                title="Core Practices"
                content={corePractices}
                tabKey={2}
              />
              {practiceChildren.length > 0 && (
                <PracticeSidebar
                  title="Related Sub-Practices"
                  content={practiceChildren}
                  tabKey={1}
                />
              )}
            </Col>
          </Row>
        </Container>
      </TabContainer>
      <Footer />
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

  return {
    paths: res.map((slug) => `/practice/${slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const practicePageContent = await client.query(
    getPracticeBySlug(params.slug),
    {},
  );

  const firmCorePracticesContent = await client.query(
    getPracticesByInput('Core Practices'),
    {},
  );

  console.log('PRACTICE PAGE CONTENT');
  console.log(practicePageContent);
  console.log('FIRM CORE PRACTICES CONTENT');
  console.log(firmCorePracticesContent);

  if (practicePageContent.data.practices.nodes.length === 0) {
    return {
      notFound: true,
    };
  }

  if (firmCorePracticesContent.data.searchWP.nodes.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      practice: practicePageContent.data.practices.nodes[0],
      practiceChildren: practicePageContent.data.practices.nodes[0]
        .practicesIncluded.childPractice
        ? sortByKey(
          practicePageContent.data.practices.nodes[0].practicesIncluded
            .childPractice,
          'title',
        )
        : [],
      corePractices: sortByKey(
        firmCorePracticesContent.data.searchWP.nodes.filter(
          (value) => JSON.stringify(value) !== '{}',
        ),
        'title',
      ),
    },
    revalidate: 1,
  };
}
