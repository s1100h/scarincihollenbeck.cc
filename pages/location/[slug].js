import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import SiteLoader from 'components/site-loader';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import BodyContent from 'components/locations/body';
import SideBar from 'components/locations/sidebar';
import { headers } from 'utils/helpers';
import { buildLocationSchema } from 'utils/json-ld-schemas';

export default function SingleLocation({
  seo, offices, currentOffice, posts,
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
          key={currentOffice.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildLocationSchema(seo, currentOffice.mapLink),
            ),
          }}
        />
      </Head>
      <SingleSubHeader
        title="Office Locations"
        subtitle={`To best serve our clients, Scarinci Hollenbeck has ${offices.length.toString()} offices strategically located around the New York/New Jersey Metropolitan area, as well as Washington D.C., with our head quarters in Lyndhurst, NJ.`}
        offset={2}
        span={7}
      />
      <LargeSidebar
        body={(
          <BodyContent
            attorneys={currentOffice.attorneys}
            practices={currentOffice.practices}
            map={currentOffice.mapLink}
            title={currentOffice.name}
          />
        )}
        sidebar={(
          <SideBar
            title={currentOffice.name}
            posts={posts}
            offices={offices}
            startingKey={currentOffice.name}
          />
        )}
      />
    </>
  );
}

export async function getStaticPaths() {
  const [res] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/location-portal/offices', {
      headers,
    }).then((data) => data.json()),
  ]);

  const fullOfficeList = res.offices.map((o) => o.slug);

  return {
    paths: fullOfficeList || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [locations, currentOffice, currentOfficePosts] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/location-portal/offices', {
      headers,
    }).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/individual-location/office/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/individual-location/posts/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  if (currentOffice.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      offices: locations.offices || {},
      seo: currentOffice.seo || {},
      currentOffice,
      posts: currentOfficePosts,
    },
    revalidate: 1,
  };
}
