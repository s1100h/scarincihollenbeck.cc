import { useRouter } from 'next/router';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdminProfileHeader from 'components/singleadmin/header';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import SiteLoader from 'components/site-loader';
import { createMarkup, headers } from 'utils/helpers';

export default function AdminSingleBio({ response }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const profile = {
    email: response.email,
    vizibility: response.vizibility,
    name: response.name,
    designation: response.Title,
    phoneNumber: `201-896-4100 ${response.phone_extension}`,
    socialMedia: response.social_media_links,
    offices: response.offices,
  };

  return (
    <>
      <NextSeo
        title={response.seo.title}
        description={response.seo.metaDescription}
        canonical={`https://scarincihollenbeck.com${response.seo.canonicalLink}`}
        openGraph={{
          url: `https://scarincihollenbeck.com${response.seo.canonicalLink}`,
          title: 'Scarinci Hollenbeck',
          description: response.seo.metaDescription,
          images: [
            {
              url: response.seo.featuredImg,
              width: 743,
              height: 795,
              alt: response.seo.title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: `https://scarincihollenbeck.com${response.seo.canonicalLink}`,
          cardType: response.seo.metaDescription,
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name={response.name}
        url={`https://scarincihollenbeck.com${response.seo.canonicalLink}`}
        sameAs={[
          'https://twitter.com/S_H_Law',
          'https://www.facebook.com/ScarinciHollenbeck/',
          'https://www.linkedin.com/company/scarinci-hollenbeck-llc/',
        ]}
      />
      <AdminProfileHeader profile={profile} image={response.image.url} />
      <Container>
        <Row>
          <Col sm={12}>
            <h4 className={grayTitleStyles.title}>Biography</h4>
            <div
              className="mb-5"
              dangerouslySetInnerHTML={createMarkup(response.biography)}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const [res] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/admin-search/admin', {
      headers,
    }).then((data) => data.json()),
  ]);

  const fullAdminList = res.admins.map((a) => a.link);

  return {
    paths: fullAdminList || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [bio] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/individual-admin/admin/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  if (JSON.stringify(bio) === '{}') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      response: bio,
    },
    revalidate: 1,
  };
}
