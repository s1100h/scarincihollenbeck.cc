import Head from 'next/head';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import SingleSubHeader from '../../layouts/single-sub-header';
import LargeSidebar from '../../layouts/large-sidebar';
import BreadCrumb from '../../components/singlecareer/breadcrumb';
import Body from '../../components/singlecareer/body';
import Sidebar from '../../components/singlecareer/sidebar';
import { urlify, headers } from '../../utils/helpers';
import { blogHeaderJPG, shDiamondPNG} from '../../utils/next-gen-images';

export default function Career({slides, careerJson}) {
  console.log(careerJson);
  return(
    <>
      <Head>
        <title>{careerJson.seo.title}</title>
        <meta name="description" content={careerJson.seo.metaDescription} />
        <link rel="canonical" href={`https://scarincihollenbeck.com/career/${careerJson.seo.canonicalLink}`} />
        <script type="application/ld+json">
          {` {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "${careerJson.seo.title}",
            "description": "${careerJson.seo.metaDescription}",
            "publisher": {
                "@type": "LegalServices",
                "name": "Scarinci Hollenbeck"
            }`}
        </script>
      </Head>
      <NavBar />
      <SingleSubHeader         
        image={blogHeaderJPG}
        title={careerJson.title}
        subtitle=" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
      />
      <div id="single-career">
        <LargeSidebar
          body={<>
            <BreadCrumb title={careerJson.title} />
            <Body
              title={careerJson.title}
              position={careerJson.positionDescription}
            />
          
          </>}
          sidebar={<Sidebar />}
        />
      </div>
      <Footer slides={slides} />
    </>
  )

};

export async function getStaticPaths() {
  const careersResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/career-portal/careers`, { headers });
  const careersJson = await careersResponse.json();

  return  {
    paths: careersJson.careers.map(career => `/career${career.slug}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const slides = await sliderResponse.json();
  const careerResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-career/career/${params.slug}`, { headers });
  const careerJson = await careerResponse.json();

  return {
    props: {
      slides,
      careerJson
    },
  }
}