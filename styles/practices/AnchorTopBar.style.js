import styled from 'styled-components';
import { ContentTooltip, TooltipWrapper } from 'styles/Tooltip.style';
import { globalColor, globalTransition, rem } from 'styles/global_styles/Global.styles';
import {
  media_breakpoint_down,
} from 'styles/mediaBreakpoints.style';

export const AnchorsTopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  ${TooltipWrapper} {
    min-width: min-content;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
  }

  ${ContentTooltip} {
    ${media_breakpoint_down('sm')} {
      bottom: unset;
      top: 100%;
    }
  }

  .anchors-title {
    margin: 0;
    color: ${globalColor.gray.gray300};
    font-size: ${rem(14)};
    font-weight: 400;
    font-family: var(--font-poppins);
    max-width: 210px;

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(12)};
    }
  }

  > nav {
    overflow: auto;
    padding: 12px 0;
  }
`;

export const AnchorsTopBarItems = styled.ul`
  margin: 0;
  width: 100%;
  display: flex;

  li {
    min-width: max-content;
    display: flex;
  }
`;
export const AnchorsTopBarItem = styled.a`
  width: 100%;
  height: 100%;
  padding: 6px 16px 8px;
  background-color: transparent;
  font-size: ${rem(14)};
  font-weight: 500;
  font-family: var(--font-poppins);
  color: ${globalColor.white};
  cursor: pointer;
  border-left: 2px solid transparent;
  transition: ${globalTransition.default}, font-weight 0s;

  &:hover {
    color: ${globalColor.blue.lightBlue};
  }

  &.active {
    font-weight: 700;
    color: ${globalColor.white};
    border-color: ${globalColor.blue.skyBlue};
    background-color: ${globalColor.blue.blue550};
  }

  @media (hover: hover) {
    &:hover {
      color: ${globalColor.white};
      font-weight: 700;
    }
  }
`;
