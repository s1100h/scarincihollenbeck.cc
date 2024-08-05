import React from 'react';
import { WhiteButtonWrapper } from 'styles/Buttons.style';

const WhiteButton = ({ icon, text, ...props }) => (
  <WhiteButtonWrapper {...props} className="white-button">
    <span className="button-icon">{icon}</span>
    {text}
  </WhiteButtonWrapper>
);

export default WhiteButton;
