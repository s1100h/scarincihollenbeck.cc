import styled from 'styled-components';
import {
  buttonHoverActive,
  ButtonLinkCss,
  buttonsHoverActive,
  cannabisLawColors,
  globalColor,
} from './global_styles/Global.styles';
import Link from 'next/link';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const ButtonLink = styled(Link)`
  ${ButtonLinkCss};
  ${buttonsHoverActive};

  span {
    color: ${globalColor.white} !important;
  }
`;

export const SpecialButtonLink = styled(Link)`
  ${ButtonLinkCss};
  padding: 13px 8px 13px 8px;
  background-color: transparent;
  border-radius: 41px;
  border: 1.5px solid ${cannabisLawColors.cannabisColorGray};

  ${buttonHoverActive(
    globalColor.black,
    cannabisLawColors.cannabisColorDarkGray,
  )}

  :hover {
    border: 1.5px solid transparent;
  }

  &::after {
    display: none;
  }
`;
