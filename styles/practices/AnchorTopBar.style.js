import styled from 'styled-components';
import { globalColor, rem } from 'styles/global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const AnchorsTopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 32px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: #164587;
  box-shadow: 0px 0px 8px 0px rgba(22, 58, 107, 0.34);
  column-gap: 12px;

  h5 {
    margin: 0;
    color: ${globalColor.white};
    font-size: ${rem(14)};
    line-height: 16px;
    font-weight: 400;
    font-family: var(--font-poppins);
    letter-spacing: normal;
    max-width: 210px;

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(10)};
      line-height: 16px;
    }
  }

  ${media_breakpoint_exactly_down(1439)} {
    padding: 12px 24px;
  }

  ${media_breakpoint_down('md')} {
    padding: 10px 24px;
  }
`;
export const AnchorsTopBarItems = styled.div`
  width: 100%;
  display: flex;
  column-gap: 12px;
  overflow-x: auto;
`;
export const AnchorsTopBarItem = styled.a`
  min-width: max-content;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: transparent;
  transition: all 0.5s ease;
  font-size: ${rem(14)};
  line-height: 20px;
  font-weight: 500;
  font-family: var(--font-roboto);
  color: ${globalColor.white};
  cursor: pointer;

  &.active {
    background-color: ${globalColor.white};
    color: #164587;
  }

  @media (hover: hover) {
    &:hover {
      background-color: ${globalColor.white};
      color: #164587;
    }
  }
`;
