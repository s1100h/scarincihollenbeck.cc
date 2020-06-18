import Head from 'next/head';
import BarLoader from 'react-spinners/BarLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import ProfileImage from '../../components/administration/profile-image';
import InfoCard from '../../components/administration/info-card';
import MultiSubHeader from '../../layouts/multi-sub-header';
import FullWidth from '../../layouts/full-width';
import { headers, createMarkup } from '../../utils/helpers';
import { attorneyHeaderJPG } from '../../utils/next-gen-images';


export default function SingleAdmin({slides, adminJson}){

  return (
    <>
      <NavBar />
      {(adminJson === undefined) ? (
        <Container>
          <Row id="page-loader-container" className="justify-content-center align-self-center">
            <BarLoader color={"#DB2220"} />
          </Row>
        </Container>
       
      ) : (
        <>
         <Head>
          <title>{adminJson.seo.title}</title>
          <meta name="description" content={adminJson.seo.metaDescription} />
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> */}
          <link rel="canonical" href={`https://scarincihollenbeck.com/${adminJson.seo.canonicalLink}`} />
          <meta property="og:title" content={adminJson.seo.title} />
          <meta property="og:site_name" content="Scarinci Hollenbeck" />
          <meta property="og:type" content="profile" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:url" content={`https://scarincihollenbeck.com/${adminJson.seo.canonicalLink}`} />
          <meta property="og:image" content={adminJson.seo.featuredImg} />
          <meta property="og:image:secure_url" content={adminJson.seo.featuredImg} />
          <meta property="og:image:width" content={adminJson.seo.imgWidth} />
          <meta property="og:image:height" content={adminJson.seo.imgHeight} />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="profile:first_name" content={adminJson.seo.firstName} />
          <meta property="profile:last_name" content={adminJson.seo.lastName} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={adminJson.seo.metaDescription} />
          <meta name="twitter:title" content={adminJson.seo.title} />
          <meta name="twitter:site" content="@S_H_Law" />
          <meta name="twitter:image" content={adminJson.seo.featuredImg} />
          <meta name="twitter:creator" content="@S_H_Law" />
          <script type="application/ld+json">
            { `
              {
                "@context": "http://www.schema.org",
                "@type": "Person",
                "@id":"https://scarincihollenbeck.com/administration/${adminJson.seo.canonicalLink}",
                "name": "${adminJson.seo.name}",
                "alternateName":" ${adminJson.seo.title}",
                "nationality": "American",
                "Description": "${adminJson.seo.metaDescription}",
                "disambiguatingDescription": "${adminJson.seo.metaDescription}",
                "jobTitle": "${adminJson.seo.jobPosition}",
                "worksFor": [
                  {
                    "@type": "Organization",
                    "name": "Scarinci Hollenbeck, LLC",
                    "sameAs": [
                      "https://twitter.com/S_H_Law",
                      "https://www.facebook.com/ScarinciHollenbeck/",
                      "https://www.linkedin.com/company/scarinci-hollenbeck-llc/",
                    ]
                  }
                ],
                "url": "https://scarincihollenbeck.com/administration/${adminJson.seo.canonicalLink}",
                "image": "${adminJson.seo.featuredImg}",
                "address": {
                "@type": "PostalAddress",
                  "addressLocality": "${adminJson.seo.addressLocality}",
                  "addressRegion": "NJ",
                  "addressCountry": "United States"
                }
              }
              ` }
          </script>
        </Head>
        <div id="single-admin">
          <MultiSubHeader         
            image={attorneyHeaderJPG}
            height="450px"
            profile={( <ProfileImage image={adminJson.image} name={adminJson.name} /> )}
            infoCard={(
              <InfoCard
                name={adminJson.name}
                title={adminJson.Title}
                phone_extension={adminJson.phone_extension}
                email={adminJson.email}
                social_media_links={adminJson.social_media_links}
                vizibility={adminJson.vizibility}
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
        <Footer slides={slides} />
        </>
      )}
    </>   
  )
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
    const adminResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-admin/admin/${params.slug}`, { headers });
    const adminJson = await adminResponse.json();
    const slides = await sliderResponse.json();
    const { seo, title } = adminJson;

    return {
      props: {
        slides,
        adminJson
      },
    }
}

export async function getStaticPaths() {
  const adminsResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/admin-search/admin`, { headers });
  const json = await adminsResponse.json();

  return  {
    paths: json.admins.map(admin => admin.link) || [],
    fallback: true,
  }
}