import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import SiteLoader from 'components/shared/SiteLoader';
import LocationPage from 'components/pages/LocationPage';
import { LocationContext } from 'contexts/LocationContext';
import { getLocationContent } from 'utils/queries';

export default function AllLocations({
  seo, offices, currentOffice, posts,
}) {
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
}

export async function getStaticProps() {
  const [locations, currentOffice, currentOfficePosts] = await getLocationContent('lyndhurst');
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
}
