/* eslint-disable no-else-return */
/* eslint-disable import/prefer-default-export */
import { sortByKey } from '../../utils/helpers';

// remove exclude selected attorney
export function excludeSelectedItems(includeList, excludeList, sortKey) {
  const sortedList = sortByKey(includeList, sortKey);

  if (excludeList.length > 0) {
    const list = sortedList.filter(e => excludeList.indexOf(e.ID) < 0);
    return list;
  } else if (excludeList.length === 0) {
    return sortedList;
  } else {
    return new Error('You are either missing an include list, exclude list, or an exclude key.');
  }
}
