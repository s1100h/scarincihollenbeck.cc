import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import BodyContent from 'components/locations/body';
import SideBar from 'components/locations/sidebar';
import client from 'utils/graphql-client';
import { allLocations, getLocationByName } from 'queries/locations';
import { buildLocationSchema } from 'utils/json-ld-schemas';
import { headers } from 'utils/helpers';

export default function AllLocations({
  offices, location, attorneys, posts,
}) {
  return (
    <>
      <NextSeo
        title={location.seo.title}
        description={location.seo.metaDesc}
        canonical={`http://scarincihollenbeck.com/${location.uri}`}
      />
      <Head>
        <script
          key={location.title}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildLocationSchema(location.officeMainInformation),
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
            attorneys={attorneys}
            practices={location.officeMainInformation.officePractices}
            map={location.officeMainInformation.mapLink}
            title={location.title}
          />
        )}
        sidebar={(
          <SideBar
            title={location.title}
            posts={posts}
            offices={offices}
            startingKey={location.uri}
          />
        )}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  // get location content
  const locationContent = await client.query(getLocationByName('lyndhurst'), {});

  // get a list of all offices
  const allOfficeLocations = await client.query(allLocations, {});

  // get all attorneys & posts related to each location
  const [attorneys, postsByLocation] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/attorney-search/attorneys',
      { headers },
    ).then((data) => data.json()),
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/individual-location/posts/lyndhurst',
      { headers },
    ).then((data) => data.json()),
  ]);

  // filter attorney by location
  const attorneysByLocation = attorneys.filter(
    (a) => a.location
      .toLowerCase()
      .replace(' ', '-')
      .replace('.', '')
      .indexOf('lyndhurst') > -1,
  );

  if (locationContent.data.officeLocations.nodes.length <= 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      location: locationContent.data.officeLocations.nodes[0],
      offices: allOfficeLocations.data.officeLocations.nodes,
      attorneys: attorneysByLocation,
      posts: postsByLocation,
    },
    revalidate: 1,
  };
}
