import { useMemo } from 'react';
import { filterByKey } from 'utils/helpers';

export const useAttorneysSearch = (selectVariant, userInput, attorneysArr) => {
  // filter through results
  const practices = filterByKey(selectVariant, 'practices');
  const designation = filterByKey(selectVariant, 'title');
  const location = filterByKey(selectVariant, 'location');

  // filter by key -- practice
  const filterPractices = (attorney) => {
    if (practices.length > 0 && attorney.practices_array) {
      const prunedPracticeList = attorney.practices_array?.map((p) => p.replace(/[^a-zA-Z ]/g, '').toLowerCase());
      return prunedPracticeList.indexOf(practices[0].replace(/[^a-zA-Z ]/g, '').toLowerCase()) > -1;
    }

    return attorney;
  };

  // filter by key -- location
  const filterLocation = (attorney) => {
    if (location.length > 0) {
      const isExist = [];
      attorney.location_array.forEach(({ title }) => {
        isExist.push(title);
      });

      return isExist.includes(location[0]);
    }
    return attorney;
  };

  // filter by key -- designation
  const filterDesignation = (attorney) => {
    if (designation.length > 0) {
      return attorney.designation === designation.toString();
    }
    return attorney;
  };

  const filterLikeSearch = (attorney) => {
    if (attorney.title.length > 0) {
      return attorney.title.includes(userInput);
    }
    return attorney;
  };

  const attorneyFiltration = (attorneysArrArg) => attorneysArrArg
    .filter(filterPractices)
    .filter(filterDesignation)
    .filter(filterLocation)
    .filter(filterLikeSearch);

  const attorneysFiltered = useMemo(() => attorneyFiltration(attorneysArr), [selectVariant]);

  return { attorneysFiltered };
};
