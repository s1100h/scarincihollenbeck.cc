import { AnimatePresence, motion } from 'framer-motion';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
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

const CustomSelect = forwardRef(
  ({
    placeHolder, onChange, inputValue, options,
  }, ref) => {
    const [selectActive, setSelectActive] = useState(false);
    const selectRef = useRef(null);
    const inputRef = useRef(null);

    const handleClickOpener = () => {
      setSelectActive(!selectActive);
    };

    const handleClickOption = (value) => {
      if (inputRef && inputRef.current) {
        inputRef.current.value = value;
      }
      onChange(value);
      setSelectActive(false);
    };

    const handleDocumentClick = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setSelectActive(false);
      }
    };

    useEffect(() => {
      document.addEventListener('click', handleDocumentClick);

      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);

    useImperativeHandle(ref, () => ({
      clearSelect() {
        if (inputRef && inputRef.current) {
          inputRef.current.value = '';
        }
        setSelectActive(false);
      },
    }));

    return (
      <SelectWrapper ref={selectRef}>
        <SelectOpener onClick={handleClickOpener} $selectActive={selectActive}>
          <SelectInput
            type="text"
            value={inputValue}
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
              {options?.map((item) => (
                <SelectOption
                  as={motion.li}
                  key={item?.databaseId}
                  variants={optionVariants}
                  onClick={() => handleClickOption(item?.title)}
                >
                  {item?.title}
                </SelectOption>
              ))}
            </SelectOptions>
          )}
        </AnimatePresence>
      </SelectWrapper>
    );
  },
);

export default CustomSelect;
