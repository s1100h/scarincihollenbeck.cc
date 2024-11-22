import { SITE_PHONE } from 'utils/constants';
import { sortByKey } from 'utils/helpers';
import { fetchAPI } from './api';
import {
  adminKaterinTraughQuery,
  attorneysPageQuery,
  attorneysQuery,
  getPracticesWithAttorneysQuery,
} from './graphql-queries';

export const getAttorneys = async () => {
  const { attorneyProfiles } = await fetchAPI(attorneysQuery, {});

  attorneyProfiles.nodes.forEach((attorneyItem, idx) => {
    if (attorneyItem.attorneyMainInformation.designation === 'The Firm') {
      attorneyProfiles.nodes.splice(idx, 1);
    }
  });

  const sanitaizedAttorneys = attorneyProfiles?.nodes.map(
    ({
      title,
      uri,
      databaseId,
      attorneyMainInformation,
      attorneyPrimaryRelatedPracticesLocationsGroups,
      attorneyBiography,
    }) => {
      attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation = attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation.map(
        ({
          id, uri, title, officeMainInformation,
        }) => ({
          id,
          uri,
          title,
          officeMainInformation: officeMainInformation.addressLocality,
        }),
      );

      attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices = attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices?.map(
        ({ title }) => title,
      );
      return {
        id: databaseId,
        lastName: attorneyMainInformation.lastName,
        title,
        designation: attorneyMainInformation.designation,
        email: attorneyMainInformation.email,
        phone: attorneyMainInformation.phoneNumber,
        practices_array:
          attorneyPrimaryRelatedPracticesLocationsGroups.relatedPractices || [],
        location_array:
          attorneyPrimaryRelatedPracticesLocationsGroups.officeLocation,
        link: uri,
        better_featured_image: attorneyMainInformation.profileImage.sourceUrl,
        profileImage: attorneyMainInformation.profileImage.sourceUrl,
        miniBio: attorneyBiography?.miniBio || '',
      };
    },
  );

  return sortByKey(sanitaizedAttorneys, 'lastName');
};

export const attorneysPageContent = async () => {
  const data = await fetchAPI(attorneysPageQuery, {});
  return data?.pageBy;
};

export const getPracticesWithAttorneys = async () => {
  const { practices: nodes } = await fetchAPI(getPracticesWithAttorneysQuery);
  return nodes.nodes;
};

export const getKaterinTraugh = async () => {
  const data = await fetchAPI(adminKaterinTraughQuery);
  const {
    title,
    databaseId,
    administration: {
      designation,
      email,
      phoneExtension,
      location,
      featuredImage: { sourceUrl },
      biography,
    },
    uri,
  } = data.administration;

  return {
    id: databaseId,
    title,
    designation,
    email,
    phone: `${SITE_PHONE} ${phoneExtension}`,
    location_array: location.map(
      ({
        id, uri, title, officeMainInformation,
      }) => ({
        id,
        uri,
        title,
        officeMainInformation: officeMainInformation.addressLocality,
      }),
    ),
    uri,
    better_featured_image: sourceUrl,
    biography,
  };
};
