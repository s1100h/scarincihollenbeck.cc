import { useRouter } from 'next/router';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Error from 'pages/_error';
import Footer from 'components/footer';
import ProfileImage from 'components/singleattorney/profile-image';
import InfoCard from 'components/singleattorney/info-card';
import MultiSubHeader from 'layouts/multi-sub-header';
import FullWidth from 'layouts/full-width';
import { headers, createMarkup } from 'utils/helpers';

export default function SingleAdmin({ adminJson }) {
  const router = useRouter();

  if (adminJson.status === 404) {
    return <Error statusCode={404} />;
  }

  return (
    <>
      {(router.isFallback) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color="#DB2220" />
          </Row>
        </Container>
      ) : (
        <>
          <NextSeo
            title={adminJson.seo.title}
            description={adminJson.seo.metaDescription}
            canonical={`https://scarincihollenbeck.com/${adminJson.seo.canonicalLink}`}
            openGraph={{
              url: `https://scarincihollenbeck.com/${adminJson.seo.canonicalLink}`,
              title: 'Scarinci Hollenbeck',
              description: adminJson.seo.metaDescription,
              images: [
                {
                  url: adminJson.seo.featuredImg,
                  width: 200,
                  height: 220,
                  alt: adminJson.seo.title,
                },
              ],
              site_name: 'Scarinci Hollenbeck',
            }}
            twitter={{
              handle: '@S_H_Law',
              site: `https://scarincihollenbeck.com/${adminJson.seo.canonicalLink}`,
              cardType: adminJson.seo.metaDescription,
            }}
          />
          <SocialProfileJsonLd
            type="Person"
            name={adminJson.seo.name}
            url={`https://scarincihollenbeck.com/${adminJson.seo.canonicalLink}`}
            sameAs={[
              'https://twitter.com/S_H_Law',
              'https://www.facebook.com/ScarinciHollenbeck/',
              'https://www.linkedin.com/company/scarinci-hollenbeck-llc/',
            ]}
          />
          <div id="single-admin">
            <MultiSubHeader
              image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-JPG.jpg"
              height="450px"
              profile={(<ProfileImage image={adminJson.image.url} name={adminJson.name} />)}
              infoCard={(
                <InfoCard
                  email={adminJson.email}
                  social_media_links={adminJson.social_media_links}
                  vizibility={adminJson.vizibility}
                  fullName={adminJson.name}
                  designation={adminJson.Title}
                  phoneNumber={`201-896-4100 ${adminJson.phone_extension}`}
                  socialMediaLinks={adminJson.social_media_links}
                  offices={adminJson.offices}
                />
            )}
            />
            <FullWidth>
              <div>
                <div className="line-header">
                  <h3>Biography</h3>
                </div>
                <div className="w-100 mt-5">
                  <div dangerouslySetInnerHTML={createMarkup(adminJson.biography)} />
                </div>
              </div>
            </FullWidth>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  const [adminJson] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-admin/admin/${params.slug}`, { headers }).then((data) => data.json())
  ]);

  if(adminJson.status === 404 && res) {
    res.statusCode = 404;
  }

  return {
    props: {
      adminJson,
    },
  };
}
