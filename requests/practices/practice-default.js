import empty from 'is-empty';
import { attorneysSanitize, checkOnPublish } from 'utils/helpers';
import { fetchAPI } from '../api';
import { ScarinciHollenbeckKeyContact } from '../../utils/constants';
import { practicesQuery } from './practicesQueryGenerator';

const postsSanitize = (posts) => posts.map((post) => {
  post.featuredImage = post.featuredImage?.node.sourceUrl
      || '/images/no-image-found-diamond-750x350.png';
  return post;
});

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
    if (!data.practice?.practicesIncluded?.childPractice) {
      data.practice.practicesIncluded.childPractice = [];
    }

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

  const postsForSidebar = data.posts?.nodes
    ? postsSanitize(data.posts.nodes)
    : [];

  const corePractices = data.practices?.nodes.filter(
    (practice) => !empty(practice.practicesIncluded.childPractice) && practice,
  );

  if (includeAttorney && practiceChief) {
    includeAttorney = includeAttorney.filter((attorney) => {
      const isDuplicate = practiceChief.some(
        (sectionAttorney) => attorney.databaseId === sectionAttorney.databaseId,
      );
      return !isDuplicate;
    });
  }

  const concatAttorneys = [...practiceChief, ...keyContactsArr];
  const keyContacts = concatAttorneys.length > 0
    ? checkOnPublish(concatAttorneys)
    : [ScarinciHollenbeckKeyContact];

  return {
    practice: data.practice,
    includeAttorney: checkOnPublish(includeAttorney),
    practiceChief: checkOnPublish(practiceChief),
    keyContactsList: keyContacts,
    corePractices,
    posts: postsForSidebar,
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
