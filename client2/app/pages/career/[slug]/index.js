import Head from 'next/head';
import { withRouter } from 'next/router';
import NavBar from '../../../components/navbar';
import Footer from '../../../components/footer';
import SingleSubHeader from '../../../layouts/single-sub-header';
import LargeSidebar from '../../../layouts/large-sidebar';
import BreadCrumb from './breadcrumb';
import Body from './body';
import Sidebar from './sidebar';
import { urlify, headers } from '../../../utils/helpers';
import { blogHeaderJPG, shDiamondPNG} from '../../../utils/next-gen-images';

function Career({seo, slides, title, positionDescription, router}) {
  
  return(
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <link rel="canonical" href={`${router.pathname}/${seo.canonicalLink}`} />
        <script type="application/ld+json">
          {` {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "${seo.title}",
            "description": "${seo.metaDescription}",
            "publisher": {
                "@type": "LegalServices",
                "name": "Scarinci Hollenbeck"
            }`}
        </script>
      </Head>
      <NavBar />
      <SingleSubHeader         
        image={blogHeaderJPG}
        title={title}
        subtitle=" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
      />
      <div id="single-career">
        <LargeSidebar
          body={<>
            <BreadCrumb title={title} />
            <Body
              title={title}
              position={positionDescription}
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
    paths: careersJson.careers.map(career => `/career/${urlify(career.title)}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({params}) {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const slides = await sliderResponse.json();
  const careerResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/individual-career/career/${params.slug}`, { headers });
  const careerJson = await careerResponse.json();
  const { title, positionDescription, seo } = careerJson; 

  return {
    props: {
      slides,
      seo,
      title,
      positionDescription
    },
  }
}

export default withRouter(Career)