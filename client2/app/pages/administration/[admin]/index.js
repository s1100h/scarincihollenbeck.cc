import Head from 'next/head';
import { withRouter, useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../../components/navbar';
import Footer from '../../../components/footer';
import ProfileImage from './profile-image';
import InfoCard from './info-card';
import MultiSubHeader from '../../../layouts/multi-sub-header';
import FullWidth from '../../../layouts/full-width';
import { headers, createMarkup } from '../../../utils/helpers';
import { attorneyHeaderJPG } from '../../../utils/next-gen-images';


function SingleAdmin({slides, admin, router }){
  const {
    ID,
    Title,
    biography,
    email,
    image,
    name,
    social_media_links,
    vizibility,
    phone_extension,
    seo  
  } = admin;
  console.log(admin);

  return (
    <>
     <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`${router.pathname}/${seo.canonicalLink}`} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:site_name" content="Scarinci Hollenbeck" />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={`${router.pathname}/${seo.canonicalLink}`} />
        <meta property="og:image" content={seo.featuredImg} />
        <meta property="og:image:secure_url" content={seo.featuredImg} />
        <meta property="og:image:width" content={seo.imgWidth} />
        <meta property="og:image:height" content={seo.imgHeight} />
        <meta property="og:image:type" content="image/jpg" />
        <meta property="profile:first_name" content={seo.firstName} />
        <meta property="profile:last_name" content={seo.lastName} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={seo.metaDescription} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:site" content="@S_H_Law" />
        <meta name="twitter:image" content={seo.featuredImg} />
        <meta name="twitter:creator" content="@S_H_Law" />
        <script type="application/ld+json">
          { `
            {
              "@context": "http://www.schema.org",
              "@type": "Person",
              "@id":"${router.pathname}/${seo.canonicalLink}",
              "name": "${seo.name}",
              "alternateName":" ${seo.title}",
              "nationality": "American",
              "Description": "${seo.metaDescription}",
              "disambiguatingDescription": "${seo.metaDescription}",
              "jobTitle": "${seo.jobPosition}",
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
              "url": "${router.pathname}/${seo.canonicalLink}",
              "image": "${seo.featuredImg}",
              "address": {
              "@type": "PostalAddress",
                "addressLocality": "${seo.addressLocality}",
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
          height="325px"
          profile={( <ProfileImage image={image} name={name} /> )}
          infoCard={(
            <InfoCard
              name={name}
              Title={Title}
              phone_extension={phone_extension}
              email={email}
              social_media_links={social_media_links}
              vizibility={vizibility}
            />
          )}
        />
        <FullWidth>
          <div>
            <div className="line-header">
              <h3>Biography</h3>
            </div>
            <div className="w-100 mt-5">
              <div dangerouslySetInnerHTML={createMarkup(biography)} />
            </div>
          </div>
        </FullWidth>
      </div>
      <Footer slides={slides} />
    </>
  )
}

export async function getStaticPaths() {
  const adminsResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/admin-search/admin`, { headers });
  const json = await adminsResponse.json();
  const { admins } = json;

  return  {
    paths: admins.map(admin => admin.link) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/just-in/posts`, { headers });
  const adminResponse = await fetch(`${process.env.REACT_APP_ADMIN_SITE}/wp-json/individual-admin/admin/${params.admin}`, { headers });
  const admin = await adminResponse.json();
  const slides = await sliderResponse.json();

  return {
    props: {
      slides,
      admin
    },
  }
}

export default withRouter(SingleAdmin)
