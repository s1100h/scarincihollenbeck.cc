import Head from 'next/head';
import { withRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import CoronaHeader from '../components/frontpage/corona-header';
import ColumnContent from '../components/frontpage/column-content';
import FullWidthContent from '../components/frontpage/full-width-content';
import Footer from '../components/footer';
import{ headers, sortByKey } from '../utils/helpers';


export default function Home({
  seo,
  posts,
  locations,
  corePractices,
  slides
}) {
  
  
  return(
  <>
    <NextSeo
      title={seo.title}
      description={seo.metaDescription}
      canonical="https://scarincihollenbeck.com/"
      openGraph={{
        url: 'https://scarincihollenbeck.com/',
        title: 'Scarinci Hollenbeck',
        description:seo.metaDescription,
        images: [
          {
            url: 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png',
            width: 750,
            height: 350,
            alt: 'Og Image Alt',
          }
        ],
        site_name: 'Scarinci Hollenbeck',
      }}
      twitter={{
        handle: '@S_H_Law',
        site: 'https://scarincihollenbeck.com',
        cardType: 'With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm.',
      }}
    />
    <CoronaHeader />
    <Container>
      <ColumnContent corePractices={corePractices} />
      <FullWidthContent
        sortedPosts={sortByKey(posts, 'date')}
        sortedLocations={sortByKey(locations.offices, 'id')}
      />
    </Container>
    <Footer slides={slides} />
  </>
)
}

export async function getStaticProps() {
 const [ seo, news, events, locations, corePractices, slides] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/front-page/meta`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/front-page/news`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/front-page/events`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/office-locations`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_CACHED_API}/cached/core-practices`, { headers }).then(data => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/just-in/posts`, { headers }).then(data => data.json())
 ]);

 const posts = [...news, ...events];

  return {
    props: {
      seo,
      posts,
      locations,
      corePractices,
      slides
    },
  }
}