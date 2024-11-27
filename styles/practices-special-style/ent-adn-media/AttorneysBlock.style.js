import { globalColor, rem } from 'styles/global_styles/Global.styles';
import { ContainerContent } from '../commonForSpecial.style';
import styled from 'styled-components';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const AttorneySection = styled.section`
  padding: 120px 0 0 0;

  .attorney-title {
    margin: 0 0 40px 0;
    color: ${globalColor.black};
    font-family: var(--font-carilo);
    font-size: ${rem(64)};
    font-weight: 400;
    line-height: 100px;
  }

  ${ContainerContent} {
    position: relative;
    padding-bottom: 120px;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 270px);
      height: 1px;
      background-color: ${globalColor.grayExtraLite.grayExtraLite50};
    }

    ${media_breakpoint_exactly_down(1440)} {
      padding-bottom: 100px;

      &::after {
        width: calc(100% - 64px);
      }
    }

    ${media_breakpoint_down('md')} {
      padding-bottom: 80px;
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
    padding-top: 100px;

    .attorney-title {
      margin: 0 0 24px 0;
      font-size: ${rem(48)};
      line-height: 72px;
    }
  }

  ${media_breakpoint_down('md')} {
    padding-top: 80px;

    .attorney-title {
      margin: 0 0 20px 0;
      font-size: ${rem(32)};
      line-height: 48px;
    }
  }
`;
