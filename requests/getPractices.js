import empty from 'is-empty';
import { fetchAPI } from './api';
import { getPracticesQuery } from './graphql-queries';

export const getPractices = async () => {
  const data = await fetchAPI(getPracticesQuery, {});
  return data.practices.nodes
    .filter(({ practicePortalPageContent }) => practicePortalPageContent?.practicePortalCategories?.includes(
      'Core Practices',
    ))
    .map(
      ({
        databaseId,
        title,
        uri,
        practicesIncluded,
        practicePortalPageContent,
      }) => {
        if (empty(practicesIncluded.childPractice)) {
          practicesIncluded.childPractice = [];
        }
        return {
          databaseId,
          title,
          uri,
          ...practicesIncluded,
          ...practicePortalPageContent,
        };
      },
    );
};
