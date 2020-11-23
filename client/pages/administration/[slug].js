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
import client from 'utils/graphql-client';
import { singleAdministraionQuery } from 'queries/administration';

export default function SingleAdmin({ adminJson, admin }) {
  const router = useRouter();
  const { seo, uri, administration } = admin
  const { name, title, email, phoneExtension, biography } = administration
  if (adminJson.status === 404) {
    return <Error statusCode={404} />;
  }



  const imageLarge = administration.featuredImage.mediaDetails.sizes.filter(i => i.name === "large")
  const imageThumb = administration.featuredImage.mediaDetails.sizes.filter(i => i.name === "thumbnail")
  const seoProfileImage = imageThumb[0]
  const profileImage = imageLarge[0]
  console.log(administration)


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
            title={seo.title}
            description={seo.metaDesc}
            canonical={`https://scarincihollenbeck.com${uri}`}
            openGraph={{
              url: `https://scarincihollenbeck.com${uri}`,
              title: 'Scarinci Hollenbeck',
              description: seo.metaDesc,
              images: [
                {
                  url: seoProfileImage.sourceUrl,
                  width: seoProfileImage.width,
                  height: seoProfileImage.height,
                  alt: seo.title,
                },
              ],
              site_name: 'Scarinci Hollenbeck',
            }}
            twitter={{
              handle: '@S_H_Law',
              site: `https://scarincihollenbeck.com${uri}`,
              cardType: seo.metaDesc,
            }}
          />
          <SocialProfileJsonLd
            type="Person"
            name={adminJson.seo.name}
            url={`https://scarincihollenbeck.com${uri}`}
            sameAs={[
              'https://twitter.com/S_H_Law',
              'https://www.facebook.com/ScarinciHollenbeck/',
              'https://www.linkedin.com/company/scarinci-hollenbeck-llc/',
            ]}
          />
          <div>
            <MultiSubHeader
              image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Columns-1800x400-JPG.jpg"
              height="450px"
              isAdmin={true}
              profile={(<ProfileImage
                  image={administration.featuredImage.sourceUrl}
                  name={adminJson.name}
                  width={profileImage.width}
                  height={profileImage.height}
                />
              )}
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

  const administrationContent = await client.query(singleAdministraionQuery(params.slug), {});

  return {
    props: {
      adminJson,
      admin: administrationContent.data.administrations.edges[0].node
    },
  };
}
