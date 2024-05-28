import styled from 'styled-components';
import { ContentTooltip, TooltipWrapper } from 'styles/Tooltip.style';
import { globalColor, rem } from 'styles/global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const AnchorsTopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: ${globalColor.blue.blue500};
  box-shadow: 0px 0px 8px 0px rgba(22, 58, 107, 0.34);
  column-gap: 12px;

  ${TooltipWrapper} {
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

  h5 {
    margin: 0;
    padding-right: 12px;
    color: ${globalColor.white};
    font-size: ${rem(14)};
    line-height: 16px;
    font-weight: 400;
    font-family: var(--font-montserrat);
    letter-spacing: normal;
    max-width: 210px;
    border-right: 1px solid #295491;
    border-radius: 4px;

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(10)};
      line-height: 16px;
    }
  }

  > nav {
    overflow: auto;
    padding: 12px 0;
  }

  ${media_breakpoint_exactly_down(1439)} {
    padding: 8px 24px;

    > nav {
      padding: 8px 0;
    }
  }

  ${media_breakpoint_down('md')} {
    padding: 4px 24px;
    > nav {
      padding: 11px 0;
    }
  }
`;
export const AnchorsTopBarItems = styled.ul`
  margin: 0;
  width: 100%;
  display: flex;
  column-gap: 12px;

  li {
    min-width: max-content;
    display: flex;
  }
`;
export const AnchorsTopBarItem = styled.a`
  width: 100%;
  height: 100%;
  padding: 2px 16px;
  background-color: transparent;
  font-size: ${rem(14)};
  line-height: 20px;
  font-weight: 400;
  font-family: var(--font-roboto);
  color: ${globalColor.blue.lightBlue};
  cursor: pointer;
  border-bottom: 1px solid transparent;
  transition: all 0.5s ease;

  &:hover {
    color: ${globalColor.blue.lightBlue};
  }

  &.active {
    font-weight: 900;
    color: ${globalColor.white};
    border-bottom: 1px solid ${globalColor.white};
  }

  @media (hover: hover) {
    &:hover {
      color: ${globalColor.white};
      font-weight: 900;
    }
  }
`;
