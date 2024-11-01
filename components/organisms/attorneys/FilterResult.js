import AttorneysIcon from 'components/common/icons/AttorneysIcon';
import DiagonalArrowIcon from 'components/common/icons/DiagonalArrowIcon';
import React from 'react';
import {
  ResultCard,
  ResultCardArrow,
  ResultCardContent,
  ResultCardIcon,
  ResultCardSubtitle,
  ResultCardTitle,
} from 'styles/Filters.style';
import empty from 'is-empty';

const FilterResult = ({
  name,
  designation,
  link,
  userInput = null,
  handleCloseModal = () => {},
  icon = <AttorneysIcon />,
}) => {
  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;

    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => (part.toLowerCase() === highlight.toLowerCase() ? (
    // eslint-disable-next-line react/no-array-index-key
      <span className="highlight" key={`${highlight}-${text}-${index}`}>
        {part}
      </span>
    ) : (
      part
    )));
  };

  return (
    <ResultCard href={link} onClick={handleCloseModal}>
      <ResultCardIcon>{icon}</ResultCardIcon>
      <ResultCardContent>
        <ResultCardTitle>{getHighlightedText(name, userInput)}</ResultCardTitle>
        {!empty(designation) && (
          <ResultCardSubtitle>{designation}</ResultCardSubtitle>
        )}
      </ResultCardContent>
      <ResultCardArrow>
        <DiagonalArrowIcon />
      </ResultCardArrow>
    </ResultCard>
  );
};

export default FilterResult;
