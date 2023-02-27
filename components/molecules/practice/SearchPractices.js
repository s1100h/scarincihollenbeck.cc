import MySearchBox from 'components/shared/GlobalSearch/MySearchBox';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DropDownResults, SearchPracticesBox } from 'styles/SearchPractices.style';

export const uniqArr = (unsortedArr) => {
  const filteredArr = [];
  unsortedArr.forEach((item) => {
    const isUniq = !filteredArr.some(
      (element) => (element.ID || element.id) === (item.ID || item.id),
    );

    if (isUniq) {
      filteredArr.push(item);
    }
  });

  return filteredArr;
};

const findTheFirst = (searchCharacter, sortedCorePracticesArg, sortedAdditionalPracticesArg) => {
  const childrenArr = [];

  const findCore = sortedCorePracticesArg?.filter(({ title }) => title.includes(searchCharacter));
  const additional = sortedAdditionalPracticesArg?.filter(({ title }) => title.includes(searchCharacter));

  sortedCorePracticesArg?.forEach(({ children }) => {
    if (children?.filter(({ title }) => title.includes(searchCharacter)).length > 0) {
      childrenArr.push(children.filter(({ title }) => title.includes(searchCharacter)));
    }
  });

  return {
    practicesMain: uniqArr(findCore.concat(additional)),
    practicesChildren: uniqArr(childrenArr.flat()),
  };
};

export default function SearchPractices({ practicesAll }) {
  const [searchValue, setSearchValue] = useState('');
  const [fondPractices, setPracticesArr] = useState(null);

  const { sortedCorePractices, sortedAdditionalPractices } = practicesAll;

  const handleSearch = (event) => {
    const value = event.currentTarget.value;
    setSearchValue(value);
    if (value.length === 0) setPracticesArr(null);
  };

  useEffect(() => {
    if (searchValue) {
      setPracticesArr(findTheFirst(searchValue, sortedCorePractices, sortedAdditionalPractices));
    }
  }, [searchValue]);

  const isRenderList = (fondPractices?.practicesMain?.length > 0 || fondPractices?.practicesChildren?.length > 0)
    && searchValue.length > 0;
  const isRenderHr = fondPractices?.practicesMain?.length > 0
    && fondPractices?.practicesChildren?.length > 0
    && searchValue.length > 0;

  return (
    <SearchPracticesBox>
      <MySearchBox
        currentRefinement={searchValue}
        refine={handleSearch}
        placeholder="Search practices"
      />
      {isRenderList && (
        <DropDownResults>
          {fondPractices.practicesMain.length > 0
            && fondPractices.practicesMain.map(({ title, slug }) => (
              <Link key={title} href={slug} passHref>
                <li>{title}</li>
              </Link>
            ))}
          {isRenderHr && <hr />}
          {fondPractices.practicesChildren.length > 0
            && fondPractices.practicesChildren.map(({ title, slug }) => (
              <Link key={title} href={slug} passHref>
                <li>{title}</li>
              </Link>
            ))}
        </DropDownResults>
      )}
    </SearchPracticesBox>
  );
}
