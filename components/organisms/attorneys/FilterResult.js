import DiagonalArrowIcon from 'components/common/icons/DiagonalArrowIcon';
import React from 'react';
import {
  ResultCard,
  ResultCardArrow,
  ResultCardContent,
  ResultCardSubtitle,
  ResultCardTitle,
} from 'styles/Filters.style';
import empty from 'is-empty';
import RenderIcon from 'components/common/RenderIcon';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';

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

const FilterResult = ({
  name,
  designation,
  link,
  userInput = null,
  handleCloseModal = () => {},
  icon,
  image,
  titleTag = 'h4',
  descriptionTag = 'p',
  className,
}) => (
  <ResultCard href={link} onClick={handleCloseModal} className={className}>
    <RenderIcon image={image} icon={icon} />
    <ResultCardContent>
      <ResultCardTitle as={titleTag}>
        {getHighlightedText(name, userInput)}
      </ResultCardTitle>
      {!empty(designation) && (
        <ResultCardSubtitle as={descriptionTag}>
          <JSXWithDynamicLinks HTML={designation} />
        </ResultCardSubtitle>
      )}
    </ResultCardContent>
    <ResultCardArrow>
      <DiagonalArrowIcon />
    </ResultCardArrow>
  </ResultCard>
);

export default FilterResult;
