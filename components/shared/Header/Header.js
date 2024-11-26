import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { createMenuData, createOverviewLinks } from '../../../utils/helpers';
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
    uri: item?.uri,
    title: item?.title,
  }));
};

export default function Header() {
  const { pathname } = useRouter();
  const { data: locations } = useGetLocationsQuery();
  const { data: practices } = useGetPracticesQuery();
  const { data: industries } = useGetIndustriesQuery();

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
    locations: locations?.data,
    menuData,
    industries: industries?.data,
  };

  return <DefaultHeader {...headerProps} />;
}
