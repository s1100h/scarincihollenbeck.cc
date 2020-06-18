import Head from 'next/head';
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


export default function SingleAdmin({slides, admin }){

  return (
    <>
     <Head>
        <title>{admin.seo.title}</title>
        <meta name="description" content={admin.seo.metaDescription} />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`https://scarincihollenbeck.com/${admin.seo.canonicalLink}`} />
        <meta property="og:title" content={admin.seo.title} />
        <meta property="og:site_name" content="Scarinci Hollenbeck" />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`https://scarincihollenbeck.com/${admin.seo.canonicalLink}`} />
        <meta property="og:image" content={admin.seo.featuredImg} />
        <meta property="og:image:secure_url" content={admin.seo.featuredImg} />
        <meta property="og:image:width" content={admin.seo.imgWidth} />
        <meta property="og:image:height" content={admin.seo.imgHeight} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="profile:first_name" content={admin.seo.firstName} />
        <meta property="profile:last_name" content={admin.seo.lastName} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={admin.seo.metaDescription} />
        <meta name="twitter:title" content={admin.seo.title} />
        <meta name="twitter:site" content="@S_H_Law" />
        <meta name="twitter:image" content={admin.seo.featuredImg} />
        <meta name="twitter:creator" content="@S_H_Law" />
        <script type="application/ld+json">
          { `
            {
              "@context": "http://www.schema.org",
              "@type": "Person",
              "@id":"https://scarincihollenbeck.com}/administration/${admin.seo.canonicalLink}",
              "name": "${admin.seo.name}",
              "alternateName":" ${admin.seo.title}",
              "nationality": "American",
              "Description": "${admin.seo.metaDescription}",
              "disambiguatingDescription": "${admin.seo.metaDescription}",
              "jobTitle": "${admin.seo.jobPosition}",
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
              "url": "https://scarincihollenbeck.com/administration/${admin.seo.canonicalLink}",
              "image": "${admin.seo.featuredImg}",
              "address": {
              "@type": "PostalAddress",
                "addressLocality": "${admin.seo.addressLocality}",
                "addressRegion": "NJ",
                "addressCountry": "United States"
              }
            }
            ` }
        </script>
      </Head>
      <NavBar />
      <div id="single-admin">
        <MultiSubHeader         
          image={attorneyHeaderJPG}
          height="450px"
          profile={( <ProfileImage image={admin.image} name={admin.name} /> )}
          infoCard={(
            <InfoCard
              name={admin.name}
              Title={admin.Title}
              phone_extension={admin.phone_extension}
              email={admin.email}
              social_media_links={admin.social_media_links}
              vizibility={admin.vizibility}
            />
          )}
        />
        <FullWidth>
          <div>
            <div className="line-header">
              <h3>Biography</h3>
            </div>
            <div className="w-100 mt-5">
              <div dangerouslySetInnerHTML={createMarkup(admin.biography)} />
            </div>
          </div>
        </FullWidth>
      </div>
      <Footer slides={admin.slides} />
    </>
  )
}

export async function getStaticPaths() {
  const adminsResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/admin-search/admin`, { headers });
  const json = await adminsResponse.json();
  const { admins } = json;

  return  {
    paths: admins.map(admin => admin.link) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const adminResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-admin/admin/${params.slug}`, { headers });
  const admin = await adminResponse.json();
  const slides = await sliderResponse.json();

  return {
    props: {
      slides,
      admin
    },
  }
}