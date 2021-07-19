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
import AttorneyProfileContact from 'components/singleattorney/contact';
import AttorneyProfileFooter from 'components/singleattorney/footer';
import {
  buildBusinessSchema,
  buildAttorneyProfileSchema,
} from 'utils/json-ld-schemas';

function renderBody(param, content, slug, header, defaultTabTitle) {
  switch (param) {
    case 'biography':
      return <AttorneyProfileBody title="Biography" content={content} />;
    case 'clients':
      return <AttorneyProfileClients title="Clients" clients={content} />;
    case 'presentations':
      return <AttorneyProfileTab title="Presentations" content={content} />;
    case 'publications':
      return <AttorneyProfileTab title="Publications" content={content} />;
    case 'media':
      return <AttorneyProfileTab title="Media" content={content} />;
    case 'representative-matters':
      return (
        <AttorneyProfileMatters
          title="Representative Matters"
          content={content}
        />
      );
    case 'representative-clients':
      return (
        <AttorneyProfileMatters
          title="Representative Clients"
          content={content}
        />
      );
    case 'awards':
      return <AttorneyProfileClients title="Awards" clients={content} />;
    case 'articles':
      return <AttorneyProfileArticles initalArticles={content} term={slug} />;
    case 'blogs':
      return <AttorneyProfileArticles initalArticles={content} title="Blogs" />;
    case 'news-press-releases':
      return <AttorneyProfileArticles initalArticles={content} title="News & Press Releases" />;
    case 'education-admissions':
      return <AttorneyProfileEducation content={content} />;
    case 'video':
      return <AttorneyProfileVideo content={content} />;
    case 'audio':
      return <AttorneyProfileBody title="Audio" content={content.body} />;
    case 'contact':
      return <AttorneyProfileContact content={header} forwardEmail={header.profile.forwardedEmailAddresses} />;
    default:
      if (Array.isArray(content)) {
        return (
          <AttorneyProfileBody
            title={defaultTabTitle}
            content={content[0].body}
          />
        );
      }

      if (typeof content === 'object') {
        return (
          <AttorneyProfileBody title={defaultTabTitle} content={content.body} />
        );
      }
      return <AttorneyProfileBody title={defaultTabTitle} content={content} />;
  }
}
export default function AttorneyProfile({
  head, header, body, slug, attorneyFooterBlogArticles, attorneyFooterNewsArticles
}) {
  const router = useRouter();

  const paramArr = router.asPath.split('/').filter((a) => a !== '');
  const paramLen = paramArr.length;
  let defaultTabTitle = 'Biography';

  if (router.asPath.includes('content')) {
    defaultTabTitle = router.asPath.split('/').pop().replace(/-/g, ' ');
  }

  const bioMenuItems = {
    main: body.bio.sidebarLinks.main || [],
    more: body.bio.sidebarLinks.more || [],
  };

  let bioMobileMenuItems = [...body.bio.sidebarLinks.main];

  if ('more' in body.bio.sidebarLinks) {
    bioMobileMenuItems = [...bioMobileMenuItems, ...body.bio.sidebarLinks.more];
  }

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
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <AttorneyProfileHeader
        image={header.image}
        profile={header.profile}
        slug={slug}
      />
      <Container>
        <Row>
          <Col sm={12}>
            <AttorneyBioLinks
              links={bioMenuItems}
              slug={slug}
              mobileLinks={bioMobileMenuItems}
            />
          </Col>
          <Col sm={12} md={9}>
            {renderBody(
              paramArr[paramLen - 1],
              body.content,
              slug,
              header,
              defaultTabTitle,
            )}
          </Col>
          <Col sm={12} md={3}>
            <AttorneyProfileSidebar
              services={body.bio.headerContent.practices}
              contact={`${slug}/contact`}
              awards={body.bio.mainPageContent.awards}
              educationLink={`/attorney/${slug}/content/education-admissions`}
            />
          </Col>
          <Col sm={12}>
            <AttorneyProfileFooter
              slug={slug}
              clients={body.bio.mainPageContent.clients}
              attorneyFooterBlogArticles={attorneyFooterBlogArticles}
              attorneyFooterNewsArticles={attorneyFooterNewsArticles}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
