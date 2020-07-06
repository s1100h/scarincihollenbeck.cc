import Head from 'next/head';
import { withRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from 'components/navbar';
import Footer from 'components/footer';
import Body from 'components/pages/body';
import Sidebar from 'components/pages/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import AttorneyCard from 'components/attorney-card';
import { headers } from 'utils/helpers';
import { blogHeaderJPG } from 'utils/next-gen-images';


export default function GovernmentEducationCovidResponseTeam({
  slides, title, content, posts, covidPosts, seo,
}) {
  const extractSubTitle = content.match(/<h2(.*?)>(.*?)<\/h2>/g);
  const subTitle = (extractSubTitle !== null) ? extractSubTitle[0].replace(/<[^>]*>?/gm, '') : '';
  const bodyContent = content.replace(subTitle, '');

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
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
            posts={covidPosts}
            articleTitle="COVID-19 Articles"
          />
        )}
        sidebar={(
          <Sidebar
            posts={posts}
            covidPage
          />
        )}
      />
      <Footer slides={slides} />
    </>
  );
}

export async function getStaticProps() {
  const sliderResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers });
  const awardsResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/single-page/page/government-education-covid-19-response-team`, { headers });
  const postsResponse = await fetch(`${process.env.REACT_APP_FEED_API}/covid-19-news`, { headers });
  const covidResponse = await fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/wp/v2/posts?categories=20250&per_page=100`, { headers });
  const covidPosts = await covidResponse.json();
  const aJson = await awardsResponse.json();
  const slides = await sliderResponse.json();
  const posts = await postsResponse.json();
  const { title, content, seo } = aJson;

  return {
    props: {
      slides,
      title,
      content,
      posts,
      covidPosts,
      seo,
    },
  };
}
