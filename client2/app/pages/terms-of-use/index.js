import Head from 'next/head';
import { withRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import Body from '../../components/pages/body';
import Sidebar from '../../components/pages/sidebar';
import SingleSubHeader from '../../layouts/single-sub-header';
import LargeSidebar from '../../layouts/large-sidebar';
import AttorneyCard from '../../components/attorney-card';
import { headers } from '../../utils/helpers';
import { blogHeaderJPG } from '../../utils/next-gen-images';


export default function TermsOfUse({slides, title, content, posts, seo }){
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = (extractSubTitle !== null) ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.metaDescription} />
        <link rel="canonical" href={`https://scarincihollenbeck.com/${seo.canonicalLink}`} />
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
        title={title}
        subtitle={subTitle}         
        image={blogHeaderJPG}
        height="auto"
      />
      <LargeSidebar
        body={(
          <Body
            content={bodyContent}
          />
        )}
        sidebar={(
          <Sidebar
            posts={posts}
          />
        )}
      />
      <Footer slides={slides} />
    </>
  )
}

export async function getStaticProps() {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const awardsResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single-page/page/terms-of-use`, { headers });
  const postsResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single/post/develop-in-a-jersey-city-inclusionary-zone`, { headers });
  const aJson = await awardsResponse.json();
  const slides = await sliderResponse.json();
  const postJson = await postsResponse.json();
  const { posts } = postJson;
  const { title, content, seo } = aJson;

  return {
    props: {
      slides,
      title,
      content,
      posts,
      seo
    },
  }
}