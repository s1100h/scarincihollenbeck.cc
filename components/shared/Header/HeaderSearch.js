import React, {
  useEffect, useRef, useState, useCallback,
} from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { HeaderSearchWrapper, SearchOpener } from 'styles/Header.style';
import { AnimatePresence, motion } from 'framer-motion';
import { GlobalSearch } from '../GlobalSearch/GlobalSearch';

const HeaderSearch = React.memo(({ isOpenSearch, setIsOpenSearch }) => {
  const [inputFocus, setInputFocus] = useState(null);
  const containerRef = useRef(null);

  const handleOpenSearch = (e) => {
    e.preventDefault();
    setIsOpenSearch(true);
    setInputFocus(true);
  };

  const handleHideSearch = () => {
    setIsOpenSearch(false);
  };

  const handleDocumentClick = useCallback(
    (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        handleHideSearch();
      }
    },
    [setIsOpenSearch],
  );

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <HeaderSearchWrapper
      $open={isOpenSearch}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <AnimatePresence>
        {isOpenSearch && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
          >
            <GlobalSearch
              setIsOpenSearch={setIsOpenSearch}
              handleHideSearch={handleHideSearch}
              inputFocus={inputFocus}
            />
          </motion.div>
        )}

        {!isOpenSearch && (
          <SearchOpener
            onClick={handleOpenSearch}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            aria-label="Search opener"
          >
            <IoSearchOutline />
          </SearchOpener>
        )}
      </AnimatePresence>
    </HeaderSearchWrapper>
  );
});

export default HeaderSearch;
