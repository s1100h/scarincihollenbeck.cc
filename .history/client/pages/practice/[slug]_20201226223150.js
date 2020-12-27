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
import SidebarContent from 'components/singlepractice/sidebar';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import { urlify } from 'utils/helpers';
import client from 'utils/graphql-client';
import { getAllPractices, getPracticeBySlug } from 'queries/practices';
import tabStyle from 'styles/BigButtonTabs.module.css';
import lineStyles from 'styles/LineHeader.module.css';

export default function PracticeSingle({ practice }) {
  const router = useRouter();
  console.log(practice);

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
              {/** related attorneys */}
              <RelatedAttorneys
                members={practice.practicesIncluded.includeAttorney}
                chair={practice.practicesIncluded.sectionChief}
                handleLink={handleLink}
                title="Chair"
              />
              {practice.practicesIncluded.highlightScroller.length > 0 && (
                <>
                  <div className={`${lineStyles.lineHeader} my-4`}>
                    <h3>Representative Clients</h3>
                  </div>
                  <PracticeClientSlider content={practice.practicesIncluded.highlightScroller} />
                </>
              )}
              {practice.practicesIncluded.highlightScroller.length > 0 && (
                <>
                  <div className={`${lineStyles.lineHeader} my-4`}>
                    <h3>Latest News & Articles</h3>
                  </div>
                  <CarouselsSimpleNews slides={practice.practicesIncluded.relatedBlogCategory[0].posts.nodes} />
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
                      width={250}
                      height={250}
                      alt="NJSBA 2020 event"
                    />
                  </div>
                  <Link href="https://virtualworkshop.njsba.org/en/" target="_blank" rel="noreferrer">
                    <a>
                      <Button
                        variant="danger"
                      >
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
              <SimpleSearch />
              <SubscriptionMessage />
            </Col>
          </Row>
        </Container>
      </TabContainer>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const res = await client.query(getAllPractices, {});

  return {
    paths: res.data.practices.nodes.map((a) => `/practice/${a.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const practicePageContent = await client.query(
    getPracticeBySlug(params.slug),
    {},
  );

  if (practicePageContent.data.practices.nodes.length <= 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      practice: practicePageContent.data.practices.nodes[0],
    },
    revalidate: 1,
  };
}
