import { AnimatePresence, motion } from 'framer-motion';
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { BsChevronDown } from 'react-icons/bs';
import {
  SelectIcon,
  SelectInput,
  SelectOpener,
  SelectOption,
  SelectOptions,
  SelectWrapper,
} from 'styles/CustomSelect.style';
import empty from 'is-empty';
import Loader from 'components/atoms/Loader';

const optionsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const optionVariants = {
  hidden: {
    y: -50,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

const CustomSelect = memo(
  ({
    placeHolder,
    onChange,
    inputValue,
    options,
    includeDefault = false,
    defaultLabel = 'Not selected',
  }) => {
    const [selectActive, setSelectActive] = useState(false);
    const selectRef = useRef(null);
    const inputRef = useRef(null);

    const finalOptions = useMemo(
      () => (includeDefault
        ? [
          { databaseId: `${defaultLabel}-id`, title: defaultLabel },
          ...(options || []),
        ]
        : options || []),
      [includeDefault, defaultLabel, options],
    );

    const handleClickOpener = useCallback(() => {
      setSelectActive(!selectActive);
    }, [setSelectActive, selectActive]);

    const handleClickOption = useCallback(
      (value, id) => {
        if (inputRef && inputRef.current) {
          inputRef.current.value = value;
        }
        onChange(value, id);
        setSelectActive(false);
      },
      [onChange, setSelectActive],
    );

    useEffect(() => {
      const handleDocumentClick = (e) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
          setSelectActive(false);
        }
      };

      document.addEventListener('click', handleDocumentClick);

      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);

    return (
      <SelectWrapper ref={selectRef}>
        <SelectOpener onClick={handleClickOpener} $selectActive={selectActive}>
          <SelectInput
            type="text"
            value={inputValue || ''}
            readOnly
            placeholder={placeHolder}
            $selectActive={selectActive}
            ref={inputRef}
          />
          <SelectIcon $selectActive={selectActive}>
            <BsChevronDown size={24} />
          </SelectIcon>
        </SelectOpener>

        <AnimatePresence>
          {selectActive && (
            <SelectOptions
              as={motion.ul}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={optionsVariants}
            >
              {!empty(finalOptions) ? (
                finalOptions?.map((item) => (
                  <SelectOption
                    as={motion.li}
                    key={item?.databaseId || item?.id}
                    variants={optionVariants}
                    onClick={() => handleClickOption(
                      item?.title,
                      item?.databaseId || item?.id,
                    )}
                  >
                    {item?.title}
                  </SelectOption>
                ))
              ) : (
                <Loader />
              )}
            </SelectOptions>
          )}
        </AnimatePresence>
      </SelectWrapper>
    );
  },
);

export default CustomSelect;
