import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import LocationPage from 'components/pages/LocationPage';
import { LocationContext } from 'contexts/LocationContext';
import { getLocationContent } from 'utils/queries';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Set location data to page props */
export const getStaticProps = async () => {
  const [locations, currentOffice, currentOfficePosts] = await getLocationContent('little-falls');
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
    revalidate: 86400,
  };
};

/** All locations page component */
const AllLocations = ({
  seo, offices, currentOffice, posts,
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
    posts,
  };

  return <LocationPage {...locationProps} />;
};

export default AllLocations;
