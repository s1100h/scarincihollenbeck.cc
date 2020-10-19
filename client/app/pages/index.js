import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import NewDawnHeader from 'components/frontpage/new-dawn-header';
import ColumnContent from 'components/frontpage/column-content';
import FullWidthContent from 'components/frontpage/full-width-content';
import Footer from 'components/footer';
import { headers, sortByKey } from 'utils/helpers';
import { buildBusinessSchema } from 'utils/json-ld-schemas'



export default function Home({
  seo,
  posts,
  locations,
  corePractices
}) {
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical="https://scarincihollenbeck.com/"
        openGraph={{
          type: 'website',
          url: 'https://scarincihollenbeck.com/',
          title: 'Scarinci Hollenbeck',
          description: seo.metaDescription,
          images: [
            {
              url: 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png',
              width: 750,
              height: 350,
              alt: 'Scarinci Hollenbeck',
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: 'https://scarincihollenbeck.com',
          cardType: 'With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm.',
        }}
      />
      <Head>
        <script
          key="ScarinciHollenbeck"
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBusinessSchema()) }}
        />
      </Head> 
      <NewDawnHeader />
      <Container>      
        <ColumnContent corePractices={sortByKey(corePractices, 'title')} />
        <FullWidthContent
          sortedPosts={sortByKey(posts, 'date')}
          sortedLocations={sortByKey(locations.offices, 'id')}
        />
      </Container>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {

  console.log('process.env.REACT_APP_WP_BACKEND')
  console.log(process.env.REACT_APP_WP_BACKEND)
  const [seo, news, events, locations, corePractices] = await Promise.all([
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/front-page/meta`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/front-page/news`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/front-page/events`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/location-portal/offices`, { headers }).then((data) => data.json()),
    fetch(`${process.env.REACT_APP_WP_BACKEND}/wp-json/core-practices/list`, { headers }).then((data) => data.json())    
  ]);

  const posts = [...news, ...events];

  return {
    props: {
      seo,
      posts,
      locations,
      corePractices
    },
  };
}
