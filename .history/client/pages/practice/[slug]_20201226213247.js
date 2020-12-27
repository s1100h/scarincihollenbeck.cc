import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PracticeContent from 'components/singlepractice/content';
import RelatedArticlesTab from 'components/singlepractice/related-articles-tab';
import RelatedAttorneys from 'components/singlepractice/related-attorneys';
import FeaturedSlider from 'components/singlepractice/featured-slider';
import Footer from 'components/footer';
// import SimpleSearch from 'components/simple-search';
// import SubscriptionMessage from 'components/subscription-message';
// import CovidResourceBox from 'components/singlepractice/covid-resource-box';


// import SidebarContent from 'components/singlepractice/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import { urlify } from 'utils/helpers';
import client from 'utils/graphql-client';
import { getAllPractices, getPracticeBySlug } from 'queries/practices';
import tabStyle from 'styles/BigButtonTabs.module.css';

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
              {practice.highlightScroller.length > 0 && <FeaturedSlider content={practice.highlightReal} />}
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
