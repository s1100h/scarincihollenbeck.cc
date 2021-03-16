import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import SiteLoader from 'components/site-loader';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import BodyContent from 'components/locations/body';
import SideBar from 'components/locations/sidebar';
import { buildLocationSchema } from 'utils/json-ld-schemas';
import { headers } from 'utils/helpers';

export default function AllLocations({
  seo, offices, lyndhurst, posts,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <Head>
        <script
          key="lyndhurst"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildLocationSchema(seo, lyndhurst.mapLink),
            ),
          }}
        />
      </Head>
      <SingleSubHeader
        title="Office Locations"
        subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C., with our head quarters in Lyndhurst, NJ.`}
        image="/images/Skyscrapers-up-1800x400-JPG.jpg"
      />
      <LargeSidebar
        body={(
          <BodyContent
            attorneys={lyndhurst.attorneys}
            practices={lyndhurst.practices}
            map={lyndhurst.mapLink}
            title={lyndhurst.name}
          />
        )}
        sidebar={(
          <SideBar
            title={lyndhurst.name}
            posts={posts}
            offices={offices}
            startingKey="lyndhurst"
          />
        )}
      />
    </>
  );
}

export async function getStaticProps() {
  const [locations, lyndhurst, lyndhurstposts] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/location-portal/offices', { headers }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/individual-location/office/lyndhurst', { headers }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/individual-location/posts/lyndhurst', { headers }).then((data) => data.json()),
  ]);
  return {
    props: {
      offices: locations.offices,
      seo: locations.seo,
      lyndhurst,
      posts: lyndhurstposts,
    },
    revalidate: 1,
  };
}
