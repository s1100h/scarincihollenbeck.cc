import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SiteLoader from 'components/site-loader';
import MultiSubHeader from 'layouts/multi-sub-header';
import ProfileImage from 'components/singleattorney/profile-image';
import SingleAttorneyInfoCard from 'components/singleattorney/info-card';
import ContactBtn from 'components/singleattorney/contact-btn';
import SidebarLinks from 'components/singleattorney/sidebar-links';
import ArticleCards from 'components/singleattorney/article-cards';
import SidebarInformationList from 'components/singleattorney/sidebar-information-list';
import SidebarInformationListObject from 'components/singleattorney/sidebar-information-list-object';
import { buildBusinessSchema } from 'utils/json-ld-schemas';

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

export default function AttorneyProfile({ bio, content, path }) {
  return (
    <>
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
      <MultiSubHeader
        profile={<ProfileImage image={bio.headerContent.profileImage} name={bio.headerContent.name} />}
        infoCard={(
          <SingleAttorneyInfoCard
            fullName={bio.headerContent.name}
            chair={bio.headerContent.chair}
            coChair={bio.headerContent.coChair}
            designation={bio.headerContent.title}
            pdf={bio.headerContent.pdf}
            vizibility={bio.headerContent.vizibility}
            services={bio.headerContent.practices}
            offices={bio.headerContent.offices}
          />
        )}
      />
      <Container className="mt-0 pt-0">
        <Row>
          <Col sm={12} md={{ offset: 9, span: 4 }} style={{ marginTop: '-70px' }}>
            <ContactBtn link={`${path}/contact`} name={bio.headerContent.name} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
            {content}
            <ArticleCards
              title="News & Events"
              articles={bio.mainPageContent.attorneyNewsEvents}
              type="articles"
              id="news-events"
            />
            <ArticleCards
              title="Blog Articles"
              articles={bio.mainPageContent.attorneyBlogs}
              type="articles"
              id="articles"
            />
            <Link href={`/library?term=${bio.headerContent.name.replace(/\s+/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase()}`}>
              <a className="btn btn-danger px-2 my-4 d-block" style={{ fontSize: '1.3rem', maxWidth: '200px' }}>
                More articles
              </a>
            </Link>
            {bio.mainPageContent.awards.length > 0 && (
              <ArticleCards
                title="Awards"
                articles={bio.mainPageContent.awards}
                type="awards"
              />
            )}
            {bio.mainPageContent.clients.length > 0 && (
              <>
                <ArticleCards
                  title="Clients"
                  articles={bio.mainPageContent.clients}
                  type="awards"
                />
                <Link href={`/attorney/${bio.headerContent.name.replace(/\s+/g, '-').replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase()}/content/clients`}>
                  <a className="btn btn-danger px-2 my-4 d-block" style={{ fontSize: '1.3rem', maxWidth: '200px' }}>
                    More Clients
                  </a>
                </Link>
              </>
            )}
            <SidebarInformationList
              title="Education"
              id="education"
              content={bio.mainPageContent.education}
            />
            <SidebarInformationList
              title="Bar Admissions"
              id="bar-admission"
              content={bio.mainPageContent.barAdmissions}
            />
            {bio.mainPageContent.additionalInformation.length > 0 && (
              <SidebarInformationListObject
                title="Additional Information"
                id="additional-information"
                content={bio.mainPageContent.additionalInformation}
              />
            )}
            {bio.mainPageContent.affiliations && (
            <SidebarInformationList
              title="Affiliations"
              id="affiliations"
              content={bio.mainPageContent.affiliations}
            />
            )}
          </Col>
          <Col sm={12} md={3}>
            <SidebarLinks links={bio.sidebarLinks} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
