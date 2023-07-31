import styled from 'styled-components';
import { buttonHoverActive, ButtonLinkCss, buttonsHoverActive, cannabisLawColors, globalColor } from './global_styles/Global.styles';
import Link from 'next/link';

export const ButtonLink = styled(Link)`
  ${ButtonLinkCss};
  ${buttonsHoverActive};
`;

export const SpecialButtonLink = styled(Link)`
  ${ButtonLinkCss};
  padding-bottom: 10px;
  padding-top: 10px;
  background-color: transparent;
  border-radius: 41px;
  border: 1.5px solid ${cannabisLawColors.cannabisColorGray};

  ${buttonHoverActive(globalColor.black, cannabisLawColors.cannabisColorDarkGray)}
  :hover {
    border: none;
  }
`;
