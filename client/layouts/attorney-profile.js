import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AttorneyProfileHeader from 'components/singleattorney/header';
import AttorneyBioLinks from 'components/singleattorney/links';
import AttorneyProfileBody from 'components/singleattorney/body';
import AttorneyProfileArticles from 'components/singleattorney/articles';
import AttorneyProfileClients from 'components/singleattorney/clients';
import AttorneyProfileSidebar from 'components/singleattorney/sidebar';
import AttorneyProfileTab from 'components/singleattorney/table';
import AttorneyProfileMatters from 'components/singleattorney/matters';
import AttorneyProfileVideo from 'components/singleattorney/video';
import AttorneyProfileEducation from 'components/singleattorney/education';
import AttorneyProfileFooter from 'components/singleattorney/footer';
import {
  buildBusinessSchema,
  buildAttorneyProfileSchema,
} from 'utils/json-ld-schemas';

function renderBody(param, content, slug) {
  switch (param) {
    case 'biography':
      return <AttorneyProfileBody content={content} />;
    case 'clients':
      return <AttorneyProfileClients clients={content} />;
    case 'presentations':
      return <AttorneyProfileTab content={content} />;
    case 'publications':
      return <AttorneyProfileTab content={content} />;
    case 'media':
      return <AttorneyProfileTab content={content} />;
    case 'representative-matters':
      return <AttorneyProfileMatters content={content} />;
    case 'representative-clients':
      return <AttorneyProfileMatters content={content} />;
    case 'awards':
      return <AttorneyProfileClients clients={content} />;
    case 'articles':
      return <AttorneyProfileArticles initalArticles={content} term={slug} />;
    case 'education-admissions':
      return <AttorneyProfileEducation content={content} />;
    case 'videos':
      return <AttorneyProfileVideo content={content} />;
    case 'audio':
      return <AttorneyProfileBody content={content[0].body} />;
    default:
      if (Array.isArray(content)) {
        return <AttorneyProfileBody content={content[0].body} />;
      }
      return <AttorneyProfileBody content={content} />;
  }
}
export default function AttorneyProfile({
  head, header, body, slug,
}) {
  const router = useRouter();

  const paramArr = router.asPath.split('/').filter((a) => a !== '');
  const paramLen = paramArr.length;

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
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <AttorneyProfileHeader image={header.image} profile={header.profile} />
      <Container>
        <Row>
          <Col sm={12}>
            <AttorneyBioLinks links={body.bio.sidebarLinks} slug={slug} />
          </Col>
          <Col sm={12} md={9}>
            {renderBody(paramArr[paramLen - 1], body.content, slug)}
          </Col>
          <Col sm={12} md={3}>
            <AttorneyProfileSidebar
              services={body.bio.headerContent.practices}
              contact={`${router.asPath}/contact`}
              awards={body.bio.mainPageContent.awards}
            />
          </Col>
          <Col sm={12}>
            <AttorneyProfileFooter
              slug={slug}
              clients={body.bio.mainPageContent.clients}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
