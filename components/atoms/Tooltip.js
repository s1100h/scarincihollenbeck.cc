import React, { useState } from 'react';
import { ContentTooltip, TooltipWrapper } from 'styles/Tooltip.style';

const Tooltip = ({ children, textTooltip }) => {
  const [isHovered, setIsHovered] = useState(false);
  let timeoutId;
  const handleMouseEnter = () => {
    timeoutId = setTimeout(() => {
      setIsHovered(true);
    }, 500);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    clearInterval(timeoutId);
  };
  return (
    <TooltipWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovered && <ContentTooltip>{textTooltip}</ContentTooltip>}
    </TooltipWrapper>
  );
};

export default Tooltip;
