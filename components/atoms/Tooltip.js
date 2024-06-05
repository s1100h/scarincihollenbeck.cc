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
  const hideTooltip = () => {
    setIsHovered(false);
    clearInterval(timeoutId);
  };

  return (
    <TooltipWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={hideTooltip}
      onClick={hideTooltip}
    >
      {children}
      {isHovered && <ContentTooltip>{textTooltip}</ContentTooltip>}
    </TooltipWrapper>
  );
};

export default Tooltip;
