import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyProfileHeader from 'components/singleattorney2/header';
import AttorneyBioLinks from 'components/singleattorney2/links';
import AttorneyProfileBody from 'components/singleattorney2/body';
import { buildBusinessSchema, buildAttorneyProfileSchema } from 'utils/json-ld-schemas';

export default function Attorney2Profile({
  head, header, body,
}) {
  const modHeaderLinks = body.bio.sidebarLinks.filter((l) => {
    if (l.label !== 'Education' && l.label !== 'Bar Admissions' && l.label !== 'Articles' && l.label !== 'Additional Information' && l.label !== 'News & Events') {
      return true;
    }

    return false;
  });

  const headerLinks = [
    ...modHeaderLinks,
    {
      label: 'Education & Admissions',
      link: '/content/education-admissions',
    },
    {
      label: 'News, Events & Articles',
      link: '/articles',
    },
  ].sort((a, b) => ((a.label > b.label) ? 1 : -1));

  return (
    <>
      <NextSeo
        title={head.title}
        description={head.metaDescription}
        canonical={`https://scarincihollenbeck.com${head.canonicalLink}`}
        openGraph={{
          url: `https://scarincihollenbeck.com${head.canonicalLink}}`,
          title: 'Scarinci Hollenbeck',
          description: head.metaDescription,
          images: [
            {
              url: header.image,
              width: 743,
              height: 795,
              alt: head.title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: `https://scarincihollenbeck.com${head.canonicalLink}}`,
          cardType: head.metaDescription,
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
                head.title,
                `https://scarincihollenbeck.com${head.canonicalLink}}`,
                header.image,
                body.bio.socialMediaLinks,
                header.profile.designation,
              ),
            ),
          }}
        />
      </Head>
      <AttorneyProfileHeader image={header.image} profile={header.profile} />
      <Container>
        <Row>
          <Col sm={12}>
            <AttorneyBioLinks links={headerLinks} />
          </Col>
          <Col sm={12} md={9}>
            <AttorneyProfileBody content={body.content} />
          </Col>
          <Col sm={12} md={3}>
            <ol>
              <li>Sidebar</li>
            </ol>
          </Col>
          <Col sm={12}>
            <ol>
              <li>Footer</li>
            </ol>
          </Col>
        </Row>
      </Container>
    </>
  );
}
