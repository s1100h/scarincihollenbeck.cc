import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SiteLoader from 'components/site-loader';
import Footer from 'components/footer';
import MultiSubHeader from 'layouts/multi-sub-header';
import ProfileImage from 'components/singleattorney/profile-image';
import SingleAttorneyInfoCard from 'components/singleattorney/info-card';
import SingleAttorneyBiography from 'components/singleattorney/biography';
import SingleAttorneyMatters from 'components/singleattorney/matters';
import SingleAttorneyTableTab from 'components/singleattorney/table';
import SingleAttorneyArticles from 'components/singleattorney/articles';
import SingleAttorneyNonGraphQlArticles from 'components/singleattorney/non-graphql-articles';
import SingleAttorneyVideoTab from 'components/singleattorney/video-content';
import SingleAttorneyBasicContent from 'components/singleattorney/basic-content';
import SingleAttorneyClientSlider from 'components/singleattorney/client-slider';
import SingleAttorneyAwardSlider from 'components/singleattorney/award-slider';
import SingleAttorneySidebarPracticeList from 'components/singleattorney/sidebar-practice-list';
import SingleAttorneySidebarInformationList from 'components/singleattorney/sidebar-information-list';
import SingleAttorneyNonGraphQLSlider from 'components/singleattorney/non-graphql-slider';
import SingleAttorneyRelatedArticles from 'components/singleattorney/related-articles';
import { headers, sortByDateKey } from 'utils/helpers';
import { buildBusinessSchema } from 'utils/json-ld-schemas';
import tabStyle from 'styles/BigButtonTabs.module.css';

// build out attorney profile schema
function buildAttorneyProfileSchema(
  name,
  url,
  imageUrl,
  socialMediaLinks,
  jobTitle,
) {
  let links;

  if (socialMediaLinks) {
    links = socialMediaLinks.map((link) => link.url);

    if (socialMediaLinks.length === 0) {
      links = [
        'https://www.facebook.com/ScarinciHollenbeck/',
        'https://www.linkedin.com/company/scarinci-hollenbeck-llc',
      ];
    }
  }

  return {
    '@graph': [
      {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        name,
        url,
        image: imageUrl,
        sameAs: links,
        jobTitle,
        worksFor: {
          '@type': 'Organization',
          name: 'Scarinci Hollenbceck',
        },
      },
    ],
  };
}

export default function AttorneySingleBio({ bio, firmNewsAndEventsArr }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  return (
    <>
      {/** Bio head tag information -- start */}
      <NextSeo
        title={bio.seo.title}
        description={bio.seo.metaDescription}
        canonical={`https://scarincihollenbeck.com${bio.seo.canonicalLink}`}
        openGraph={{
          url: `https://scarincihollenbeck.com${bio.seo.canonicalLink}}`,
          title: 'Scarinci Hollenbeck',
          description: bio.seo.metaDescription,
          images: [
            {
              url: bio.profileImage,
              width: 743,
              height: 795,
              alt: bio.seo.title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: `https://scarincihollenbeck.com${bio.seo.canonicalLink}}`,
          cardType: bio.seo.metaDescription,
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
        <script
          key="ScarinciHollenbeck Bio Profile"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildAttorneyProfileSchema(
                bio.seo.title,
                `https://scarincihollenbeck.com${bio.seo.canonicalLink}}`,
                bio.profileImage,
                bio.socialMediaLinks,
                bio.designation,
              ),
            ),
          }}
        />
      </Head>
      {/** Bio head tag information -- end */}
      {/** Bio Image & Info Card  -- start */}
      <MultiSubHeader
        image="/images/Columns-1800x400-JPG.jpg"
        profile={(
          <ProfileImage
            image={bio.profileImage}
            name={bio.fullName}
          />
        )}
        height="auto"
        infoCard={(
          <SingleAttorneyInfoCard
            fullName={bio.fullName}
            chair={bio.chair}
            coChair={bio.coChair}
            designation={bio.designation}
            phoneNumber={bio.phoneNumber}
            fax={bio.faxNumber}
            email={bio.email}
            socialMediaLinks={bio.socialMediaLinks}
            pdf={bio.pdf}
            vizibility={bio.vizibility}
            offices={bio.offices}
          />
        )}
      />
      {/** Bio Image & Info Card  -- end */}
      {/** Start of body content -- start */}
      <TabContainer className="mb--1" id="nav-tab" defaultActiveKey="biography">
        <Container>
          <Row>
            {/** End of navigation -- start */}
            <Col sm={12}>
              <Nav>
                <Nav.Link eventKey="biography" className={tabStyle.tab}>
                  Biography
                </Nav.Link>
                {bio.representativeMatters && (
                  <Nav.Link
                    eventKey="representative-matters"
                    className={tabStyle.tab}
                  >
                    Representative Matters
                  </Nav.Link>
                )}
                {bio.reprsentativeClients && (
                  <Nav.Link
                    eventKey="represntative-clients"
                    className={tabStyle.tab}
                  >
                    Representative Clients
                  </Nav.Link>
                )}
                {bio.presentations && (
                  <Nav.Link eventKey="presentations" className={tabStyle.tab}>
                    Presentations
                  </Nav.Link>
                )}
                {bio.publications && (
                  <Nav.Link eventKey="publications" className={tabStyle.tab}>
                    Publications
                  </Nav.Link>
                )}
                {bio.media && (
                  <Nav.Link eventKey="media" className={tabStyle.tab}>
                    Media
                  </Nav.Link>
                )}
                {bio.blogPosts.length > 0 && (
                  <Nav.Link eventKey="blogs" className={tabStyle.tab}>
                    Articles
                  </Nav.Link>
                )}
                {firmNewsAndEventsArr.length > 0 && (
                  <Nav.Link eventKey="newsevents" className={tabStyle.tab}>
                    News &amp; Events
                  </Nav.Link>
                )}
                {bio.videos && (
                  <Nav.Link eventKey="videos" className={tabStyle.tab}>
                    Videos
                  </Nav.Link>
                )}
                {typeof bio.tabs.headers[0] === 'string' && (
                  <Nav.Link
                    key={bio.tabs.headers[0]}
                    eventKey={bio.tabs.headers[0]}
                    className={tabStyle.tab}
                  >
                    {bio.tabs.headers[0]}
                  </Nav.Link>
                )}
                {typeof bio.tabs.headers[1] === 'string' && (
                  <Nav.Link
                    key={bio.tabs.headers[1]}
                    eventKey={bio.tabs.headers[1]}
                    className={tabStyle.tab}
                  >
                    {bio.tabs.headers[1]}
                  </Nav.Link>
                )}
                {typeof bio.tabs.headers[2] === 'string' && (
                <Nav.Link
                  key={bio.tabs.headers[2]}
                  eventKey={bio.tabs.headers[2]}
                  className={tabStyle.tab}
                >
                  {bio.tabs.headers[2]}
                </Nav.Link>
                )}
                {typeof bio.tabs.headers[3] === 'string' && (
                <Nav.Link
                  key={bio.tabs.headers[3]}
                  eventKey={bio.tabs.headers[3]}
                  className={tabStyle.tab}
                >
                  {bio.tabs.headers[3]}
                </Nav.Link>
                )}
                {typeof bio.tabs.headers[4] === 'string' && (
                <Nav.Link
                  key={bio.tabs.headers[4]}
                  eventKey={bio.tabs.headers[4]}
                  className={tabStyle.tab}
                >
                  {bio.tabs.headers[4]}
                </Nav.Link>
                )}

              </Nav>
            </Col>
            {/** Navigation -- end */}
            {/** Body tab content -- start */}
            <Col sm={12} md={9} className="mt-4">
              <TabContent>
                <SingleAttorneyBiography
                  tabTitle="biography"
                  title="Biography"
                  content={bio.biography}
                />
              </TabContent>
              {bio.representativeMatters && (
                <TabContent>
                  <SingleAttorneyMatters
                    tabTitle="representative-matters"
                    title="Representative Matters"
                    content={bio.representativeMatters}
                  />
                </TabContent>
              )}
              {bio.representativeClients && (
                <TabContent>
                  <SingleAttorneyMatters
                    tabTitle="representative-clients"
                    title="Representative Clients"
                    content={bio.representativeClients}
                  />
                </TabContent>
              )}
              {bio.presentations && (
                <TabContent>
                  <SingleAttorneyTableTab
                    tabTitle="presentations"
                    title="Presentations"
                    content={bio.presentations}
                  />
                </TabContent>
              )}
              {bio.publications && (
                <TabContent>
                  <SingleAttorneyTableTab
                    tabTitle="publications"
                    title="Publications"
                    content={bio.publications}
                  />
                </TabContent>
              )}
              {bio.media && (
                <TabContent>
                  <SingleAttorneyTableTab
                    tabTitle="media"
                    title="Media"
                    content={bio.media}
                  />
                </TabContent>
              )}
              {bio.blogPosts.length > 0 && (
                <TabContent>
                  <SingleAttorneyNonGraphQlArticles
                    tabTitle="blogs"
                    title="Articles"
                    content={sortByDateKey(bio.blogPosts, 'date')}
                  />
                </TabContent>
              )}
              {firmNewsAndEventsArr.length > 0 && (
                <TabContent>
                  <SingleAttorneyArticles
                    tabTitle="newsevents"
                    title="News &amp; Events"
                    content={firmNewsAndEventsArr}
                  />
                </TabContent>
              )}
              {bio.videos && (
                <TabContent>
                  <SingleAttorneyVideoTab
                    title="Videos"
                    content={bio.videos}
                    tabTitle="videos"
                  />
                </TabContent>
              )}
              {bio.tabs.headers.length > 0 && bio.tabs.body.length > 0 && bio.tabs.body.map((tab) => (
                <TabContent key={tab[0]}>
                  <SingleAttorneyBasicContent
                    key={tab[0]}
                    title={tab[1]}
                    content={tab[2]}
                    tabTitle={tab[1]}
                  />
                </TabContent>
              ))}
              {/** start of bottom page carousels -- start */}
              {bio.awards.length > 0 && (
                <SingleAttorneyAwardSlider content={bio.awards} />
              )}
              {bio.clients.length > 0 && (
                <SingleAttorneyClientSlider
                  content={bio.clients}
                />
              )}
              {firmNewsAndEventsArr.length > 0
                && bio.fullName !== 'Donald Scarinci' && (
                  <SingleAttorneyRelatedArticles
                    title="News & Events"
                    content={firmNewsAndEventsArr}
                  />
              )}
              {bio.blogPosts && bio.blogPosts.length > 0 && (
                <SingleAttorneyNonGraphQLSlider
                  title="Recent Articles"
                  content={sortByDateKey(bio.blogPosts, 'date')}
                />
              )}
              {/** start of bottom page carousels -- end */}
            </Col>
            {/** Body tab content --end */}
            {/** Sidebar content -- start */}
            <Col sm={12} md={3} className="mt-4">
              <SingleAttorneySidebarPracticeList
                content={bio.relatedPractices}
                itemKey={2}
              />
              <br />
              <SingleAttorneySidebarInformationList
                itemKey={1}
                content={bio.sidebar}
              />
            </Col>
            {/** Sidebar content -- end */}
          </Row>
        </Container>
      </TabContainer>
      {/** End of body content -- end */}
      {/** Footer -- start */}
      <Footer />
      {/** Footer -- end */}
    </>
  );
}

export async function getStaticPaths() {
  const [res] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/attorney-search/attorneys',
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    paths: res.map((a) => `/attorney${a.link}`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // keep bio for presentations, publications & blogs
  const [bio] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/individual-attorney/attorney/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  if (bio.status === 404) {
    return {
      notFound: true,
    };
  }

  // concat all the firm events and firm news into a single array
  const firmNewsAndEventsArr = [].concat(bio.newsPosts, bio.eventPosts);

  return {
    props: {
      bio,
      firmNewsAndEventsArr,
    },
    revalidate: 1,
  };
}
