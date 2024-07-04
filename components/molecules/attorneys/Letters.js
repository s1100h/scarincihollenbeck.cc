import { useContext } from 'react';
import {
  LetterSelectorBtn,
  LetterSelectorContainer,
} from '../../../styles/Filters.style';
import { AttorneysContext } from '../../../contexts/AttorneysContext';
import { useAttorneysSearch } from '../../../hooks/useAttornySearch';
import { LETTERS_LIST } from '../../../utils/constants';

const LetterSelector = ({ onSelectLetter, select, userInput }) => {
  const { attorneysContext } = useContext(AttorneysContext);
  const { attorneysFiltered } = useAttorneysSearch(
    select,
    userInput,
    attorneysContext,
  );
  const currentAttorneyList = attorneysFiltered?.length > 0 ? attorneysFiltered : attorneysContext;

  const isDisabled = (letter) => !currentAttorneyList.some(
    (attorney) => attorney.lastName?.split('')[0] === letter.toUpperCase(),
  );

  const handleClickLetter = (letter) => {
    onSelectLetter(letter);
  };

  return (
    <LetterSelectorContainer>
      {LETTERS_LIST.map((letter) => (
        <LetterSelectorBtn
          disabled={currentAttorneyList?.length > 0 ? isDisabled(letter) : true}
          key={letter}
          onClick={() => handleClickLetter(letter)}
        >
          {letter.toUpperCase()}
        </LetterSelectorBtn>
      ))}
    </LetterSelectorContainer>
  );
};

export default LetterSelector;
