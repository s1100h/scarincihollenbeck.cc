import { attorneysSanitize, checkOnPublish } from 'utils/helpers';
import empty from 'is-empty';
import { fetchAPI } from '../api';
import { ScarinciHollenbeckKeyContact } from '../../utils/constants';
import { practicesQuery } from './practicesQueryGenerator';

export const getPracticeAttorneys = async (uri) => {
  const data = await fetchAPI(practicesQuery, {
    variables: {
      id: uri,
    },
  });

  if (!data) {
    return {
      practice: undefined,
    };
  }

  if (data.practice) {
    if (!data.practice?.practicesIncluded?.relatedBlogCategory) {
      data.practice.practicesIncluded.relatedBlogCategory = [];
    }

    if (!data.practice.practicesIncluded.keyContactByPractice) {
      data.practice.practicesIncluded.keyContactByPractice = [];
    }
  }

  let includeAttorney = data.practice?.practicesIncluded.includeAttorney
    ? attorneysSanitize(data.practice.practicesIncluded.includeAttorney)
    : [];

  const practiceChief = data.practice?.practicesIncluded.sectionChief
    ? attorneysSanitize(data.practice.practicesIncluded.sectionChief)
    : [];

  const keyContactsArr = data.practice?.practicesIncluded.keyContactByPractice
    ? attorneysSanitize(data.practice.practicesIncluded.keyContactByPractice)
    : [];

  if (includeAttorney && practiceChief) {
    includeAttorney = includeAttorney.filter((attorney) => {
      const isDuplicate = practiceChief.some(
        (sectionAttorney) => attorney.databaseId === sectionAttorney.databaseId,
      );
      return !isDuplicate;
    });
  }

  const concatAttorneys = [...practiceChief, ...keyContactsArr];

  const publishedAttorneys = checkOnPublish(concatAttorneys);

  const keyContacts = !empty(publishedAttorneys)
    ? publishedAttorneys
    : [ScarinciHollenbeckKeyContact];

  return {
    practice: data.practice,
    includeAttorney: checkOnPublish(includeAttorney),
    practiceChief: checkOnPublish(practiceChief),
    keyContactsList: keyContacts,
    faq: data.practice?.practicesIncluded?.faq,
  };
};

export const headMetaData = (practiceChiefArg, includeAttorneyArg) => {
  const attorneysSchemaChair = practiceChiefArg?.length > 0
    ? practiceChiefArg?.map((attorney) => ({
      '@type': 'Person',
      name: attorney.title,
      image: attorney.profileImage,
      url: attorney.link,
      telephone: attorney.phoneNumber,
      jobTitle: 'Attorney',
    }))
    : [];

  const attorneysSchemaAttorneyList = includeAttorneyArg?.length > 0
    ? includeAttorneyArg?.map((attorney) => ({
      '@type': 'Person',
      name: attorney.title,
      image: attorney.profileImage,
      url: attorney.link,
      telephone: attorney.phoneNumber,
      jobTitle: 'Attorney',
    }))
    : [];

  return [...attorneysSchemaChair, ...attorneysSchemaAttorneyList];
};
