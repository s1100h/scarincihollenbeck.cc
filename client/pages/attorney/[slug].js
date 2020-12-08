import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { request } from 'graphql-request';
import { NextSeo } from 'next-seo';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Error from 'pages/_error';
import SiteLoader from 'components/site-loader'
import Footer from 'components/footer';
import MultiSubHeader from 'layouts/multi-sub-header';
import ProfileImage from 'components/singleattorney/profile-image';
import InfoCard from 'components/singleattorney/info-card';
import Biography from 'components/singleattorney/biography';
import Matters from 'components/singleattorney/matters';
import TableTab from 'components/singleattorney/table';
import Articles from 'components/singleattorney/articles';
import VideoTab from 'components/singleattorney/video-content';
import BasicContent from 'components/singleattorney/basic-content';
import SidebarContent from 'components/singleattorney/sidebar';
import FeaturedSlider from 'components/singleattorney/featured-slider';
import RelatedArticles from 'components/singleattorney/related-articles';
import ErrorMessage from 'components/error-message'
import { headers, reFormatExternalPosts } from 'utils/helpers';
import { buildBusinessSchema } from 'utils/json-ld-schemas';
import { singleAttorneyQuery, attorneysArticles } from 'queries/attorneys';
import client from 'utils/graphql-client';



// build out attorney profile schema
function buildAttorneyProfileSchema(name, url, imageUrl, socialMediaLinks, jobTitle) {
  let links; 

  if (socialMediaLinks.length > 0) {
    links = socialMediaLinks.map((link) => link.url);
  };

  if(socialMediaLinks.length === 0) {
    links = [
      "https://www.facebook.com/ScarinciHollenbeck/",
      "https://www.linkedin.com/company/scarinci-hollenbeck-llc"
    ];
  };

  return {
    "@graph": [{
      "@context": "https://schema.org/",
      "@type": "Person",
      "name": name,
      "url": url,
      "image": imageUrl,
      "sameAs": links,
      "jobTitle": jobTitle,
      "worksFor": {
        "@type": "Organization",
        "name": "Scarinci Hollenbceck"
      }  
    }]
  }
}

export default function Attorney({ bio, bioT }) {
  let blogs;
  const router = useRouter();
  const tabs = bioT.attorneyAdditionalTabs;
  blogs = bioT.attorneyAuthorId.authorId.posts.edges

  // console.log(bioT)
  const { data: attorneyNews, error: attorneyNewsErr } = useSWR(attorneysArticles("Firm News", bioT.title), (query) =>
    request('https://wp.scarincihollenbeck.com/graphql', query)
  );

  const { data: attorneyEvents, error: attorneyEventsErr } = useSWR(attorneysArticles("Firm Events", bioT.title), (query) =>
    request('https://wp.scarincihollenbeck.com/graphql', query)
  );


  if (attorneyEventsErr || attorneyNewsErr) return <ErrorMessage />
  if (!attorneyEvents || !attorneyNews) return (
    <div className="my-5 mx-5">
      <SiteLoader />
    </div>
  )


  if (bio.status === 404) {
    return <Error statusCode={404} />;
  }

  if(router.isFallback) {
    return (
      <div className="my-5 mx-5">
        <SiteLoader />
      </div>
    )
  }  
  const firmNewsAndEventsArr = [].concat(attorneyEvents.categories.nodes[0].posts.edges, attorneyNews.categories.nodes[0].posts.edges)
  
  return (
    <>
     <NextSeo
        title={bioT.seo.title}
        description={bioT.seo.metaDesc}
        canonical={`https://scarincihollenbeck.com${bioT.uri}`}
        openGraph={{
          url: `https://scarincihollenbeck.com${bioT.uri}`,
          title: 'Scarinci Hollenbeck',
          description: bioT.seo.metaDesc,
          images: [
            {
              url: bioT.attorneyMainInformation.profileImage.sourceUrl,
              width: 200,
              height: 220,
              alt: bioT.seo.title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: `https://scarincihollenbeck.com${bioT.uri}`,
          cardType: bioT.seo.metaDesc,
        }}
      />
    <Head>
      <script
        key="ScarinciHollenbeck"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBusinessSchema()) }}
      />
      <script
        key="ScarinciHollenbeck Bio Profile"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildAttorneyProfileSchema(
          bioT.title,
          `https://scarincihollenbeck.com/${bioT.uri}`,
          bioT.attorneyMainInformation.profileImage.sourceUrl,
          bioT.attorneyMainInformation.socialMediaLinks,
          bioT.attorneyMainInformation.designation))
        }}
      />
    </Head> 
      <div id="single-attorney">
        <MultiSubHeader
          image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-JPG.jpg"
          profile={(<ProfileImage
              image={bioT.attorneyMainInformation.profileImage.sourceUrl}
              name={bioT.title}
              width={330}
              height={350}
          />)}
          height="auto"
          infoCard={(
            <InfoCard
              fullName={bioT.title}
              chair={bio.chair}
              coChair={bio.coChair}
              designation={bioT.attorneyMainInformation.designation}
              phoneNumber={bioT.attorneyMainInformation.phoneNumber}
              fax={bioT.attorneyMainInformation.faxNumber}
              email={bioT.attorneyMainInformation.email}
              socialMediaLinks={bioT.attorneyMainInformation.socialMediaLinks}
              pdf={(bioT.attorneyMainInformation.pdfBio) ? bioT.attorneyMainInformation.pdfBio.sourceUrl : ''}
              vizibility={bioT.attorneyMainInformation.vizibility}
              offices={bioT.attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation}
            />
          )}
        />
        <TabContainer className="mb--1" id="nav-tab" defaultActiveKey="biography">
          <Container>
            <Row>
              <Col sm={12}>
                <Nav>
                  <Nav.Link eventKey="biography" className="main-tab">Biography</Nav.Link>
                  { (bioT.attorneyRepresentativeMatters.repMatters !== null) && <Nav.Link eventKey="representative-matters" className="main-tab">Representative Matters</Nav.Link> }
                  { (bioT.attorneyRepresentativeClients.repClients !== null) && <Nav.Link eventKey="represntative-clients" className="main-tab">Representative Clients</Nav.Link> }
                  { (bio.presentations) && <Nav.Link eventKey="presentations" className="main-tab">Presentations</Nav.Link> }
                  { (bio.publications) && <Nav.Link eventKey="publications" className="main-tab">Publications</Nav.Link> }
                  { (bio.media) && <Nav.Link eventKey="media" className="main-tab">Media</Nav.Link> }
                  { (blogs.length > 0) && <Nav.Link eventKey="blogs" className="main-tab">Articles</Nav.Link>}
                  { (firmNewsAndEventsArr.length > 0) && <Nav.Link eventKey="newsevents" className="main-tab">News &amp; Events</Nav.Link> }
                  { (bio.videos) && <Nav.Link eventKey="videos" className="main-tab">Videos</Nav.Link> }
                  {(tabs.tabHeader1 !== null) && <Nav.Link key={tabs.tabHeader1} eventKey={tabs.tabHeader1} className="main-tab">{tabs.tabHeader1}</Nav.Link>}
                  {(tabs.tabHeader2 !== null) && <Nav.Link key={tabs.tabHeader2} eventKey={tabs.tabHeader2} className="main-tab">{tabs.tabHeader2}</Nav.Link>}
                  {(tabs.tabHeader3 !== null) && <Nav.Link key={tabs.tabHeader3} eventKey={tabs.tabHeader3} className="main-tab">{tabs.tabHeader3}</Nav.Link>}
                  {(tabs.tabHeader4 !== null) && <Nav.Link key={tabs.tabHeader4} eventKey={tabs.tabHeader4} className="main-tab">{tabs.tabHeader4}</Nav.Link>}
                </Nav>
              </Col>
              <Col sm={12} md={9} className="mt-4">
                <TabContent>
                  <Biography tabTitle="biography" title="Biography" content={bio.biography} />
                </TabContent>
                {(bioT.attorneyRepresentativeMatters.repMatters !== null) && (
                  <TabContent>
                    <Matters
                      tabTitle="representative-matters"
                      title="Representative Matters"
                      content={bioT.attorneyRepresentativeMatters.repMatters}
                    />
                  </TabContent>
                )}
                {(bioT.attorneyRepresentativeClients.repClients !== null) && (
                  <TabContent>
                    <Matters
                      tabTitle="representative-clients"
                      title="Representative Clients"
                      content={bioT.attorneyRepresentativeClients.repClients}
                    />
                  </TabContent>
                )}
                {(bio.presentations) && (
                  <TabContent>
                    <TableTab
                      tabTitle="presentations"
                      title="Presentations"
                      content={bio.presentations}
                    />
                  </TabContent>
                )}
                {(bio.publications) && (
                  <TabContent>
                    <TableTab
                      tabTitle="publications"
                      title="Publications"
                      content={bio.publications}
                    />
                  </TabContent>
                )}
                {(bio.media) && (
                  <TabContent>
                    <TableTab
                      tabTitle="media"
                      title="Media"
                      content={bio.media}
                    />
                  </TabContent>
                )}
                {(blogs.length > 0) && (
                  <TabContent>
                    <Articles
                      tabTitle="blogs"
                      title="Articles"
                      content={blogs}
                    />
                  </TabContent>
                )}
                 {(firmNewsAndEventsArr.length > 0) && (
                  <TabContent>
                    <Articles tabTitle="newsevents" title="News &amp; Events" content={firmNewsAndEventsArr} />
                  </TabContent>
                )}
                {(bioT.attorneyAwardsClientsBlogsVideos.attorneyVideos) && (
                  <TabContent>
                    <VideoTab
                      title="Videos"
                      content={bioT.attorneyAwardsClientsBlogsVideos.attorneyVideos}
                      tabTitle="videos"
                    />
                  </TabContent>
                )}
              {(tabs.tabContent1 !== null) && <BasicContent title={tabs.tabHeader1} content={tabs.tabContent1} tabTitle={tabs.tabHeader1} />} 
              {(tabs.tabContent2 !== null) && <BasicContent title={tabs.tabHeader2} content={tabs.tabContent2} tabTitle={tabs.tabHeader2} />} 
              {(tabs.tabContent3 !== null) && <BasicContent title={tabs.tabHeader3} content={tabs.tabContent3} tabTitle={tabs.tabHeader3} />} 
              {(tabs.tabContent1 !== null) && <BasicContent title={tabs.tabHeader4} content={tabs.tabContent4} tabTitle={tabs.tabHeader4} />} 

                {/* { (bio.clients) && (bio.clients.length > 0) && <FeaturedSlider content={bio.clients} title="Clients" />}
                { (bio.awards) && (bio.awards.length > 0) && <FeaturedSlider content={bio.awards} title="Awards" />} */}
                { (firmNewsAndEventsArr.length > 0) && <RelatedArticles title="News & Events" content={firmNewsAndEventsArr} /> }
                { (blogs.length > 0) && <RelatedArticles title="Recent Articles" content={blogs} />}
              </Col>
              <Col sm={12} md={3} className="mt-4">
                <SidebarContent
                  title="Related Practices"
                  content={bio.relatedPractices}
                  itemKey={2}
                />
                <br />
                <SidebarContent
                  title="Additional Information"
                  content={bio.sidebar}
                  itemKey={1}
                />
              </Col>
            </Row>
          </Container>
        </TabContainer>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  let status = 200
  const [bio] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-attorney/attorney/${params.slug}`, { headers }).then((data) => data.json())
  ]);

  const attorneyBioContent = await client.query(singleAttorneyQuery(params.slug), {});


  if(bio.status === 404 && res) {
    res.statusCode = 404;
  }

  // manage external blog posts
  if(attorneyBioContent.data.attorneyProfiles.edges[0].node.attorneyAwardsClientsBlogsVideos.blogId !== null) {
    if(Object.values(attorneyBioContent.data.attorneyProfiles.edges[0].node.attorneyAwardsClientsBlogsVideos.blogId[0]).length > -1) {
      const externalBlogIdList = attorneyBioContent.data.attorneyProfiles.edges[0].node.attorneyAwardsClientsBlogsVideos.blogId[0]

      // request posts from con law
      if(externalBlogIdList.constitutionalLawReporter) {
        const clUrl = `https://constitutionallawreporter.com/wp-json/wp/v2/posts?author=${externalBlogIdList.constitutionalLawReporter}&per_page=10&orderby=date`;

        const [posts] = await Promise.all([
          fetch(clUrl, { headers }).then((data) => data.json())
        ]);
      
        const conLawReformattedPosts = await reFormatExternalPosts(posts)
        console.log(conLawReformattedPosts)    
      }

      // request posts from government&law
      if(externalBlogIdList.governmentLaw) {
        console.log(externalBlogIdList.governmentLaw)
      } 

      // request posts from musicEsq
      if(externalBlogIdList.musicEsq) {
        console.log(externalBlogIdList.musicEsq)
      }
    }
  }
  

  return {
    props: {
      bio,
      bioT:attorneyBioContent.data.attorneyProfiles.edges[0].node
    },
  };
}
