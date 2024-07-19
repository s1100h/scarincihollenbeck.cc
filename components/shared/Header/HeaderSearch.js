import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { HeaderSearchWrapper, SearchOpener } from 'styles/Header.style';
import { AnimatePresence, motion } from 'framer-motion';
import { GlobalSearch } from '../GlobalSearch/GlobalSearch';

const HeaderSearch = ({ isOpenSearch, setIsOpenSearch }) => {
  const [inputFocus, setInputFocus] = useState(null);

  const handleOpenSearch = (e) => {
    e.preventDefault();
    setIsOpenSearch(true);
    setInputFocus(true);
  };

  const handleHideSearch = () => {
    setIsOpenSearch(false);
  };

  return (
    <HeaderSearchWrapper $open={isOpenSearch}>
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
          >
            <IoSearchOutline />
          </SearchOpener>
        )}
      </AnimatePresence>
    </HeaderSearchWrapper>
  );
};

export default HeaderSearch;
