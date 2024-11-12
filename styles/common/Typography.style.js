import styled from "styled-components";
import { globalColor, globalTransition, rem } from "../global_styles/Global.styles";
import { media_breakpoint_down } from "../mediaBreakpoints.style";
import Link from "next/link";

//Titles
export const titleH2Styles = `
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

export const TitleH2 = styled.h2`
  ${titleH2Styles};
  color: ${({ $isWhite }) => !$isWhite ? undefined : globalColor.white};
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
  color: ${({ $isWhite }) => !$isWhite ? undefined : globalColor.white};
`;
