import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import LocationPage from 'components/pages/LocationPage';
import { LocationContext } from 'contexts/LocationContext';
import { getLocationContent } from 'utils/queries';
import { BASE_API_URL, headers } from 'utils/constants';
import { fetchAPI } from 'utils/api';
import { getIdDirectionPdfLittleFallsQuery } from 'utils/graphql-queries';
import { correctAttorneyLink } from 'utils/helpers';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Fetch all the location pages urls from WP REST API * */
const getLocationPaths = async () => {
  try {
    const res = await fetch(`${BASE_API_URL}/wp-json/location-portal/offices`, { headers });
    const resToJson = await res.json();

    return resToJson.offices.map((o) => o.slug);
  } catch (error) {
    console.error(error);
  }
};

/** fetch and build urls for static pages generation */
export const getStaticPaths = async () => {
  const paths = await getLocationPaths();

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getPdfLink = async () => {
  const { officeLocationBy } = await fetchAPI(getIdDirectionPdfLittleFallsQuery, {});
  return officeLocationBy.officeMainInformation;
};
/** set location data to page props */
export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  let autoMap = '';
  let trainStationsMap = '';

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const [locations, currentOffice, currentOfficePosts] = await getLocationContent(slug);

  if (currentOffice.id === 29436) {
    const id = await getPdfLink();
    autoMap = id.autoMap.link;
    trainStationsMap = id.trainStationsMap.link;
  }

  if (Object.keys(currentOffice).includes('status') && currentOffice.status === 404) {
    return {
      notFound: true,
    };
  }

  if (Object.keys(currentOffice).includes('data') && currentOffice.data.status === 404) {
    return {
      notFound: true,
    };
  }

  currentOffice.attorneys = currentOffice.attorneys.map((attorney) => {
    attorney.link = correctAttorneyLink(attorney.link);

    return {
      ...attorney,
    };
  });

  const attorneysSchema = currentOffice.attorneys.map((attorney) => ({
    '@type': 'Person',
    name: attorney.name,
    designation: attorney.designation,
    image: attorney.image,
    url: attorney.link,
    telephone: attorney.contact,
    jobTitle: 'Attorney',
  }));

  return {
    props: {
      offices: locations.offices || {},
      seo: currentOffice.seo || {},
      currentOffice,
      attorneysSchemaData: attorneysSchema,
      posts: currentOfficePosts,
      linkToPdfMap: {
        autoMap,
        trainStationsMap,
      },
    },
    revalidate: 86400,
  };
};

/* Single location page component * */
const SingleLocation = ({
  seo,
  offices,
  currentOffice,
  posts,
  linkToPdfMap,
  attorneysSchemaData,
}) => {
  const router = useRouter();
  const { locations, setLocations } = useContext(LocationContext);

  if (router.isFallback) {
    return <SiteLoader />;
  }

  useEffect(() => {
    if (!locations) {
      setLocations(offices);
    }
  }, [offices]);

  const locationProps = {
    seo,
    currentOffice,
    attorneysSchemaData,
    posts,
    linkToPdfMap,
  };

  return <LocationPage {...locationProps} />;
};

export default SingleLocation;
