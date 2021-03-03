import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SiteLoader from 'components/site-loader';
import MultiSubHeader from 'layouts/multi-sub-header';
import ProfileImage from 'components/singleattorney/profile-image';
import SingleAttorneyInfoCard from 'components/singleattorney/info-card';
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
      <Container>
        <Row>
          <Col sm={12} md={{offset: 9, span: 3}} className="m-0 pb-4">
            <div>
              <Link href={`${router.asPath}/contact`}>
                <a className="btn btn-danger p-3" style={{fontSize: '1.5rem', marginTop: '-64px'}}>
                  <strong>
                    Contact {bio.fullName}
                  </strong>
                </a>
              </Link>
            </div>
          </Col>
          <Col sm={12} md={9}>
            Meat
          </Col>
          <Col sm={12} md={3} className="border">
            Sidebar
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

  return {
    props: {
      bio,
      firmNewsAndEventsArr,
    },
    revalidate: 1,
  };
}

