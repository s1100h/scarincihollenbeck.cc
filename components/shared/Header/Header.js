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
  useGetIndustriesQuery,
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

const sanitizeIndustries = (data) => {
  if (!data) return [];

  return data?.map((item) => ({
    databaseId: item?.databaseId,
    uri: item?.link?.url,
    title: item?.title,
  }));
};

const sortLocations = (locations) => {
  if (!locations) return [];

  return [...locations].sort((a, b) => {
    const indexA = locationsOrderArray.indexOf(a.title);
    const indexB = locationsOrderArray.indexOf(b.title);
    return indexA - indexB;
  });
};

export default function Header() {
  const { pathname } = useRouter();
  const slug = getSlugFromUrl(pathname);
  const { data: locations, isLoading: locationsIsLoading } = useGetLocationsQuery();
  const { data: practices } = useGetPracticesQuery();
  const { data: industries } = useGetIndustriesQuery();
  const sortedLocations = !locationsIsLoading && sortLocations(locations?.data);

  const sanitizedPractices = useMemo(() => {
    const practiceWithOverview = createOverviewLinks(practices?.data, false);
    return sanitizePractices(practiceWithOverview);
  }, [practices]);

  const menuData = useMemo(
    () => createMenuData(
      sanitizedPractices,
      locations?.data,
      sanitizeIndustries(industries?.data),
    ),
    [sanitizedPractices, locations, industries],
  );

  const headerProps = {
    pathname,
    practices: sanitizedPractices,
    locations: sortedLocations,
    menuData,
    industries: industries?.data,
  };

  return <DefaultHeader {...headerProps} />;
}
