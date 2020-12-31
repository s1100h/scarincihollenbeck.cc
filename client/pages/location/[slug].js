import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import SiteLoader from 'components/site-loader';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import BodyContent from 'components/locations/body';
import SideBar from 'components/locations/sidebar';
import client from 'utils/graphql-client';
import { allLocations, getLocationByName } from 'queries/locations';
import { headers } from 'utils/helpers';
import { buildLocationSchema } from 'utils/json-ld-schemas';

export default function SingleLocation({
  offices,
  location,
  attorneys,
  posts,
}) {
  const router = useRouter();

  if (router.isFallback) {
    return <SiteLoader />;
  }

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

export async function getStaticPaths() {
  const res = await client.query(allLocations, {});

  return {
    paths: res.data.officeLocations.nodes.map((a) => a.uri) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // get location content
  const locationContent = await client.query(getLocationByName(params.slug), {});

  // get a list of all offices
  const allOfficeLocations = await client.query(allLocations, {});

  if (locationContent.data.officeLocations.nodes.length === 0) {
    return {
      notFound: true,
    };
  }

  if (allOfficeLocations.data.officeLocations.nodes.length === 0) {
    return {
      notFound: true,
    };
  }

  // get all attorneys & posts related to each location
  const [attorneys, postsByLocation] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/attorney-search/attorneys',
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/individual-location/posts/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  // filter attorney by location
  const attorneysByLocation = attorneys.filter(
    (a) => a.location
      .toLowerCase()
      .replace(' ', '-')
      .replace('.', '')
      .indexOf(params.slug) > -1,
  );

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
