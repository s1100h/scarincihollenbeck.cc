import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import empty from 'is-empty';
import { setSelectedValues } from '../redux/slices/library.slice';

const useLibraryFilters = () => {
  const dispatch = useDispatch();
  const { asPath, push } = useRouter();
  const { selectedValues } = useSelector((state) => state.library);

  const handleChangeSelect = useCallback(
    (value, id, key, isDefault) => {
      const newSelectedValues = { ...selectedValues };

      if (isDefault) {
        delete newSelectedValues[key];
      } else if (
        newSelectedValues[key]?.value !== value
        || newSelectedValues[key]?.id !== id
      ) {
        newSelectedValues[key] = { value, id };
      }

      if (JSON.stringify(selectedValues) === JSON.stringify(newSelectedValues)) return;

      dispatch(setSelectedValues(newSelectedValues));
    },
    [dispatch, selectedValues],
  );

  const handleInputChange = useCallback(
    (e) => {
      const value = e.target.value;
      const newSelectedValues = { ...selectedValues };

      if (empty(value)) {
        delete newSelectedValues.keyword;
      } else {
        newSelectedValues.keyword = {
          value,
          id: value,
        };
      }

      dispatch(setSelectedValues(newSelectedValues));
    },
    [dispatch, selectedValues],
  );

  const handleSearch = useCallback(
    (e) => {
      if (empty(selectedValues)) return;
      e.preventDefault();

      const query = Object.entries(selectedValues).reduce(
        (acc, [key, { id }]) => {
          if (id) {
            acc[key] = id;
          }
          return acc;
        },
        {},
      );

      push({
        pathname: '/library/search',
        query,
      });
    },
    [selectedValues, push],
  );

  const handleClearAll = useCallback(() => {
    dispatch(setSelectedValues({}));
  }, [dispatch]);

  const handleClearSelection = useCallback(
    (key) => {
      const newSelectedValues = { ...selectedValues };
      delete newSelectedValues[key];
      dispatch(setSelectedValues(newSelectedValues));
    },
    [dispatch, selectedValues],
  );

  return {
    selectedValues,
    asPath,
    handleChangeSelect,
    handleInputChange,
    handleSearch,
    handleClearAll,
    handleClearSelection,
  };
};

export default useLibraryFilters;
