import React, { useContext, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import LocationPage from 'components/pages/LocationPage';
import { LocationContext } from 'contexts/LocationContext';
import { getLocationContent } from 'utils/queries';
import { correctAttorneyLink } from 'utils/helpers';
import { getPdfLink } from './[slug]';

const SiteLoader = dynamic(() => import('components/shared/SiteLoader'));

/** Set location data to page props */
export const getStaticProps = async () => {
  const [locations, currentOffice, currentOfficePosts] = await getLocationContent('little-falls');
  let autoMap = '';
  let trainStationsMap = '';

  if (currentOffice.name === 'Little Falls, NJ') {
    const id = await getPdfLink();
    autoMap = id.autoMap.link;
    trainStationsMap = id.trainStationsMap.link;
  }

  if (currentOffice.status === 404) {
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

  return {
    props: {
      offices: locations.offices || {},
      seo: currentOffice.seo || {},
      currentOffice,
      posts: currentOfficePosts,
      linkToPdfMap: {
        autoMap,
        trainStationsMap,
      },
    },
    revalidate: 86400,
  };
};

/** All locations page component */
const AllLocations = ({
  seo, offices, currentOffice, posts, linkToPdfMap,
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
    linkToPdfMap,
  };

  return <LocationPage {...locationProps} />;
};

export default AllLocations;
