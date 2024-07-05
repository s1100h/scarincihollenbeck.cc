import AttorneysIcon from 'components/common/icons/AttorneysIcon';
import React from 'react';
import {
  ResultCard,
  ResultCardContent,
  ResultCardIcon,
  ResultCardSubtitle,
  ResultCardTitle,
} from 'styles/Filters.style';

const FilterResult = ({
  name,
  designation,
  link,
  userInput,
  handleCloseModal,
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
      <ResultCardIcon>
        <AttorneysIcon />
      </ResultCardIcon>
      <ResultCardContent>
        <ResultCardTitle>{getHighlightedText(name, userInput)}</ResultCardTitle>
        <ResultCardSubtitle>{designation}</ResultCardSubtitle>
      </ResultCardContent>
    </ResultCard>
  );
};

export default FilterResult;
