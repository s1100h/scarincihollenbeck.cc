import Head from 'next/head';
import { useRouter } from 'next/router';
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
import BasicContent from 'components/singleattorney/basic-content';
import ArticleCards from 'components/singleattorney/article-cards';
import SidebarInformationList from 'components/singleattorney/sidebar-information-list';
import { headers, sortByDateKey } from 'utils/helpers';
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

export default function AttorneySingleBio({ bio, firmNewsAndEventsArr, sidebarLinks }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  // get the first two paragraphs in the biography
  const c = bio.biography.split(/<p[^>]*>/).filter((a) => a !== '');
  const excerpt = c[0].replace('</p>', '');
  const excerptTwo = c[1];

  // get the first three blog posts
  const firstThreeArticles = firmNewsAndEventsArr.filter((_, i) => i <= 3);

  // get all the sidebar content
  console.log(bio);

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
      <MultiSubHeader
        profile={<ProfileImage image={bio.profileImage} name={bio.fullName} />}
        infoCard={(
          <SingleAttorneyInfoCard
            fullName={bio.fullName}
            chair={bio.chair}
            coChair={bio.coChair}
            designation={bio.designation}
            pdf={bio.pdf}
            vizibility={bio.vizibility}
            services={bio.relatedPractices}
            offices={bio.offices}
          />
        )}
      />
      <Container className="mt-0 pt-0">
        <Row>
          <Col sm={12} md={{ offset: 9, span: 4 }} style={{ marginTop: '-70px' }}>
            <ContactBtn link={`${router.asPath}/contact`} name={bio.fullName} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={9}>
            <BasicContent
              title=""
              id="biography"
              content={`<p>${excerpt}</p><p>${excerptTwo}</p>`}
              links={{
                label: 'Read More',
                link: `${router.asPath}/content/biography`,
              }}
            />
            <ArticleCards articles={firstThreeArticles} />
            <SidebarInformationList content={bio.sidebar} />
          </Col>
          <Col sm={12} md={3}>
            <SidebarLinks links={sidebarLinks} />
          </Col>
        </Row>
      </Container>
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
  const sidebarLinks = [
    {
      title: 'Biography',
    },
    {
      title: 'News & Articles',
    },
    ...bio.sidebar,
  ].filter((a) => JSON.stringify(a) !== '[]');

  if (bio.presentations) {
    sidebarLinks.push({ title: 'Presentations' });
  }

  if (bio.publications) {
    sidebarLinks.push({ title: 'Publications' });
  }

  if (bio.media) {
    sidebarLinks.push({ title: 'Media' });
  }

  if (bio.videos) {
    sidebarLinks.push({ title: 'Videos' });
  }

  bio.tabs.headers.map((header) => {
    if (typeof header === 'string') {
      sidebarLinks.push({ title: header });
    }
  });

  return {
    props: {
      bio,
      firmNewsAndEventsArr,
      sidebarLinks,
    },
    revalidate: 1,
  };
}
