import DiagonalArrowIcon from 'components/common/icons/DiagonalArrowIcon';
import React from 'react';
import {
  ResultCard,
  ResultCardArrow,
  ResultCardContent,
  ResultCardIcon,
  ResultCardImage,
  ResultCardSubtitle,
  ResultCardTitle,
} from 'styles/Filters.style';
import empty from 'is-empty';
import { getIcon } from 'utils/helpers';

const FilterResult = ({
  name,
  designation,
  link,
  userInput = null,
  handleCloseModal = () => {},
  icon = 'Attorneys',
  image = null,
  titleTag = 'h4',
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
      {!empty(image) ? (
        <ResultCardImage image={image} />
      ) : (
        <ResultCardIcon>{getIcon(icon)}</ResultCardIcon>
      )}
      <ResultCardContent>
        <ResultCardTitle as={titleTag}>
          {getHighlightedText(name, userInput)}
        </ResultCardTitle>
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
