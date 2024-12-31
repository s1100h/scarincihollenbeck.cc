import styled from 'styled-components';
import {
  globalColor,
  globalTransition,
  rem,
} from '../global_styles/Global.styles';
import { media_breakpoint_down } from '../mediaBreakpoints.style';
import Link from 'next/link';

//Titles
export const title32Styles = `
  margin: 0;
  color: ${globalColor.blue.darkBlue};
  font-size: ${rem(32)};
  line-height: 1.38;
  font-weight: 600;
  font-family: var(--font-poppins);

  ${media_breakpoint_down('md')} {
    font-size: ${rem(20)};
    line-height: 1.4;
  }
`;

export const Title32 = styled.h2`
  ${title32Styles};
  color: ${({ $isWhite }) => (!$isWhite ? undefined : globalColor.white)};
`;

export const Title20 = styled.h3`
  margin: 0;
  color: ${globalColor.blue.darkBlue};
  font-size: ${rem(20)};
  line-height: 1.6;
  font-weight: 600;
  font-family: var(--font-poppins);

  ${media_breakpoint_down('md')} {
    font-size: ${rem(18)};
    line-height: 1.56;
  }
`;

//Links
export const underlinedLinkStyles = `
  padding: 4px 0 2px;
  display: inline-flex;
  width: fit-content;
  color: ${globalColor.blue.darkBlue};
  font-weight: 600;
  border-bottom: 2px solid ${globalColor.blue.skyBlue};
  text-transform: unset;
  transition: ${globalTransition.default};

  @media (hover: hover) {
    &:hover {
      color: ${globalColor.blue.blue400};
      border-color: currentColor;
    }
  }
  
  &:active {
    color: ${globalColor.blue.skyBlue};
    border-color: currentColor;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
  }
`;

export const UnderlinedLink = styled(Link)`
  ${underlinedLinkStyles};
  color: ${({ $isWhite }) => (!$isWhite ? undefined : globalColor.white)};
`;

export const NotUnderlinedLink = styled(Link)`
  padding: 0;
  font-weight: 600;
  color: ${globalColor.blue.blue500};
  text-decoration: none;
  text-transform: unset;
  transition: ${globalTransition.default};

  &:hover,
  &:focus,
  &:active {
    color: ${globalColor.blue.blue400};
  }
`;
