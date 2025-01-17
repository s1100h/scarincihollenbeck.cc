import Select from 'components/common/Select';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UnderlinedLink } from 'styles/common/Typography.style';
import { ContainerDefault } from 'styles/Containers.style';
import {
  LibraryFiltersSection,
  LibraryFiltersFields,
  LibraryFiltersHolder,
  LibraryFiltersNav,
  LibraryFiltersNavItem,
  LibraryFiltersNavLink,
  LibraryFiltersField,
  LibraryFiltersLine,
  LibraryFiltersInput,
} from 'styles/LibraryFilters';
import { LIBRARY_NAV } from 'utils/constants';
import { debounce } from 'utils/helpers';
import { setSelectedValues } from '../../../redux/slices/library.slice';

const FILTER_CONFIGS = [
  {
    key: 'categories',
    defaultValue: 'All Categories',
    placeHolder: 'Filter by Categories',
  },
  {
    key: 'offices',
    defaultValue: 'All Offices',
    placeHolder: 'Filter by Offices',
  },
  {
    key: 'authors',
    defaultValue: 'All Authors',
    placeHolder: 'Filter by Authors',
  },
  {
    key: 'practices',
    defaultValue: 'All Practices',
    placeHolder: 'Filter by Practice',
  },
  {
    key: 'industries',
    defaultValue: 'All Industries',
    placeHolder: 'Filter by Industries',
  },
  {
    key: 'years',
    defaultValue: 'All Years',
    placeHolder: 'Filter by Years',
  },
];

const LibraryFilters = ({
  categories,
  offices,
  authors,
  practices,
  industries,
  years,
}) => {
  const dispatch = useDispatch();
  const { asPath, push } = useRouter();
  const { selectedValues } = useSelector((state) => state.library);

  const handleChangeSelect = useCallback(
    (value, id, key, isDefault) => {
      const newValue = isDefault ? '' : value;
      if (selectedValues[key] === newValue) return;

      dispatch(
        setSelectedValues({
          ...selectedValues,
          [key]: newValue,
        }),
      );
    },
    [dispatch, selectedValues],
  );

  const handleInputChange = useCallback(
    debounce((key, value) => {
      dispatch(
        setSelectedValues({
          ...selectedValues,
          [key]: value,
        }),
      );
    }, 300),
    [dispatch, selectedValues],
  );

  const optionsMap = {
    categories,
    offices,
    authors,
    practices,
    industries,
    years,
  };

  const handleSearch = useCallback(
    (e) => {
      e.preventDefault();
      const queryParams = Object.keys(selectedValues).reduce((acc, key) => {
        const value = selectedValues[key];
        if (
          value
          && value !== `All ${key.charAt(0).toUpperCase()}${key.slice(1)}`
        ) {
          acc[key] = value;
        }
        return acc;
      }, {});

      push({
        pathname: '/library/search',
        query: queryParams,
      });
    },
    [selectedValues, push],
  );

  return (
    <LibraryFiltersSection>
      <ContainerDefault>
        <LibraryFiltersHolder>
          <LibraryFiltersNav>
            {LIBRARY_NAV.map((item) => (
              <LibraryFiltersNavItem key={item?.id}>
                <LibraryFiltersNavLink
                  href={item?.href}
                  $active={asPath === item?.href}
                >
                  {item?.title}
                </LibraryFiltersNavLink>
              </LibraryFiltersNavItem>
            ))}
          </LibraryFiltersNav>

          <LibraryFiltersLine onSubmit={handleSearch}>
            <LibraryFiltersFields>
              <LibraryFiltersField>
                <LibraryFiltersInput
                  type="text"
                  placeholder="Search by keyword"
                  onChange={(e) => handleInputChange('keyword', e.target.value)}
                />
              </LibraryFiltersField>
              {FILTER_CONFIGS.map(({ key, placeHolder, defaultValue }) => (
                <LibraryFiltersField key={key}>
                  <Select
                    options={optionsMap[key]}
                    inputValue={selectedValues[key]}
                    placeHolder={placeHolder}
                    onChange={(value, id) => handleChangeSelect(value, id, key, value === defaultValue)}
                    includeDefault
                    defaultLabel={defaultValue}
                  />
                </LibraryFiltersField>
              ))}
            </LibraryFiltersFields>

            <UnderlinedLink as="button" type="submit">
              Search
            </UnderlinedLink>
          </LibraryFiltersLine>
        </LibraryFiltersHolder>
      </ContainerDefault>
    </LibraryFiltersSection>
  );
};

export default LibraryFilters;
