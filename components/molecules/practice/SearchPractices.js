import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  DropDownResults,
  SearchPracticesBox,
} from 'styles/SearchPractices.style';
import AuxiliarySearch from '../../shared/GlobalSearch/AuxiliarySearch';

export const uniqArr = (unsortedArr) => {
  const filteredArr = [];
  unsortedArr.forEach((item) => {
    const isUniq = !filteredArr.some(
      (element) => (element.ID || element.databaseId) === (item.ID || item.databaseId),
    );

    if (isUniq) {
      filteredArr.push(item);
    }
  });

  return filteredArr;
};

const findTheFirst = (searchCharacter, sortedCorePracticesArg) => {
  const childrenArr = [];

  const findCore = sortedCorePracticesArg?.filter(({ title }) => title.includes(searchCharacter));

  sortedCorePracticesArg?.forEach(({ childPractice }) => {
    if (
      childPractice?.filter(({ title }) => title.includes(searchCharacter))
        .length > 0
    ) {
      childrenArr.push(
        childPractice.filter(({ title }) => title.includes(searchCharacter)),
      );
    }
  });

  return {
    practicesMain: uniqArr(findCore),
    practicesChildren: uniqArr(childrenArr.flat()),
  };
};

export default function SearchPractices({ practicesAll }) {
  const [searchValue, setSearchValue] = useState('');
  const [fondPractices, setPracticesArr] = useState(null);

  const handleSearch = (event) => {
    const value = event?.currentTarget?.value;
    setSearchValue(value);
    if (value.length === 0) setPracticesArr(null);
  };

  useEffect(() => {
    if (searchValue) {
      setPracticesArr(findTheFirst(searchValue, practicesAll));
    }
  }, [searchValue]);

  const isRenderList = (fondPractices?.practicesMain?.length > 0
      || fondPractices?.practicesChildren?.length > 0)
    && searchValue.length > 0;
  const isRenderHr = fondPractices?.practicesMain?.length > 0
    && fondPractices?.practicesChildren?.length > 0
    && searchValue.length > 0;

  return (
    <SearchPracticesBox>
      <AuxiliarySearch
        currentRefinement={searchValue}
        refine={handleSearch}
        placeholder="Search practices"
      />
      {isRenderList && (
        <DropDownResults>
          {fondPractices.practicesMain.length > 0
            && fondPractices.practicesMain.map(({ title, uri }) => (
              <Link key={title} href={uri} passHref>
                <li>{title}</li>
              </Link>
            ))}
          {isRenderHr && <hr />}
          {fondPractices.practicesChildren.length > 0
            && fondPractices.practicesChildren.map(({ title, uri }) => (
              <Link key={title} href={uri} passHref>
                <li>{title}</li>
              </Link>
            ))}
        </DropDownResults>
      )}
    </SearchPracticesBox>
  );
}
