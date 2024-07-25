import styled, { css } from "styled-components";
import { globalBorderRadius, globalColor, globalTransition, rem } from "styles/global_styles/Global.styles";
import { media_breakpoint_down } from "styles/mediaBreakpoints.style";

export const ClientsSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const ClientsSliderTitle = styled.h2`
  margin: 0;
  color: ${globalColor.blue.darkBlue};
  font-size: ${rem(20)};
  line-height: 1.6;
  font-weight: 600;

  ${media_breakpoint_down('sm')} {
    font-size: ${rem(18)};
    line-height: 1.56;
  }
`;

export const ClientsSliderCard = styled.div`
  width: 162px;
  height: 162px;
  background-color: ${globalColor.white};
  border-radius: ${globalBorderRadius.small};
  overflow: hidden;
  border: 1px solid transparent;
  transition: ${globalTransition.default};

  ${({ $isLink }) =>
    $isLink &&
    css`
      &:hover {
        border-color: ${globalColor.blue.skyBlue};
      }
    `}

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;