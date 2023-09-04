import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import LocationPage from 'components/pages/LocationPage';
import { LocationContext } from 'contexts/LocationContext';
import { BASE_API_URL, headers, PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import { getOfficeAndMoreData } from 'requests/graphql-queries';
import { getAttorneys } from '../attorneys';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

const getOfficeData = async (slug) => {
  const { officeLocation, officeLocations } = await fetchAPI(getOfficeAndMoreData, {
    variables: { id: slug },
  });
  if (officeLocation?.officeMainInformation?.autoMap?.link?.length > 0) {
    officeLocation.officeMainInformation.autoMap = officeLocation.officeMainInformation.autoMap.link;
  }
  if (officeLocation?.officeMainInformation?.trainStationsMap?.link?.length > 0) {
    officeLocation.officeMainInformation.trainStationsMap = officeLocation.officeMainInformation.trainStationsMap.link;
  }

  const currentOffice = {
    databaseId: officeLocation.databaseId,
    title: officeLocation.title,
    featuredImage: officeLocation.featuredImage.node.sourceUrl,
    seo: officeLocation.seo,
    ...officeLocation.officeMainInformation,
  };

  const offices = officeLocations.nodes.map((office) => ({
    databaseId: office.databaseId,
    featuredImage: office.featuredImage.node.sourceUrl,
    uri: office.uri,
    slug: office.slug,
    ...office.officeMainInformation,
  }));
  return {
    currentOffice,
    offices,
  };
};

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

/** set location data to page props */
export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }
  const { currentOffice, offices } = await getOfficeData(slug);
  const attorneys = await getAttorneys();
  attorneys.sort((a, b) => {
    const aLoc = a.location_array.find((loc) => loc.officeMainInformation);
    const bLoc = b.location_array.find((loc) => loc.officeMainInformation);
    if (!aLoc || !bLoc) {
      // If either attorney doesn't have a location with officeMainInformation, don't sort
      return 0;
    }
    return aLoc.officeMainInformation.localeCompare(bLoc.officeMainInformation);
  });

  const makeSlugRegex = /^\/[^/]+\/([^/]+)\//;

  currentOffice.attorneys = attorneys.filter((attorney) => {
    const location = attorney.location_array[0];
    const slugFromUri = location.uri.match(makeSlugRegex)[1];
    return slugFromUri === slug;
  }) || [];

  if (!currentOffice) {
    return {
      notFound: true,
    };
  }

  const attorneysSchema = currentOffice.attorneys.map((attorney) => ({
    '@type': 'Person',
    name: attorney.title,
    designation: attorney.designation,
    image: attorney.better_featured_image,
    url: `${PRODUCTION_URL}/attorneys/${attorney.link}`,
    telephone: attorney.phone,
    jobTitle: 'Attorney',
  }));

  return {
    props: {
      offices: offices || {},
      seo: currentOffice.seo || {},
      currentOffice,
      attorneysSchemaData: attorneysSchema,
      posts: [],
    },
    revalidate: 86400,
  };
};

/* Single location page component * */
const SingleLocation = ({
  seo, offices, currentOffice, posts, attorneysSchemaData,
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
  };

  return <LocationPage {...locationProps} />;
};

export default SingleLocation;
