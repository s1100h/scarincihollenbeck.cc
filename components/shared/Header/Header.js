import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { locationsOrderArray } from 'utils/constants';
import {
  createMenuData,
  createOverviewLinks,
  getSlugFromUrl,
} from '../../../utils/helpers';
import DefaultHeader from './DefaultHeader';
import {
  useGetLocationsQuery,
  useGetPracticesQuery,
} from '../../../redux/services/project-api';

const sanitizePractices = (data) => {
  if (!data) return [];

  return data?.map((item) => ({
    databaseId: item?.databaseId,
    uri: item?.uri,
    title: item?.title,
    list: item?.childPractice || [],
  }));
};

const renderHeader = (pageSlug, props) => {
  const pagesMap = {
    // 'new-jersey-cannabis-law': <SpecialHeader {...props} />,
    // 'entertainment-and-media': <SpecialHeader {...props} />, // page ready for deploy in prod but paused, commit 26.12.2023
  };

  return pagesMap[pageSlug] || <DefaultHeader {...props} />;
};
export default function Header() {
  const { pathname } = useRouter();
  const slug = getSlugFromUrl(pathname);
  const { data: locations, isLoading: locationsIsLoading } = useGetLocationsQuery();
  const { data: practices } = useGetPracticesQuery();
  const sortedLocations = !locationsIsLoading
    && [...locations?.data]?.sort((a, b) => {
      const indexA = locationsOrderArray.indexOf(a.title);
      const indexB = locationsOrderArray.indexOf(b.title);
      return indexA - indexB;
    });
  const practiceWithOverview = useMemo(
    () => createOverviewLinks(practices?.data, false),
    [practices],
  );

  const sanitizedPractices = sanitizePractices(practiceWithOverview);

  const menuData = createMenuData(sanitizedPractices, locations?.data);

  const headerProps = {
    pathname,
    practices: sanitizedPractices,
    locations: sortedLocations,
    menuData,
  };

  return <>{renderHeader(slug, headerProps)}</>;
}
