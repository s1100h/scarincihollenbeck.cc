import styled from 'styled-components';
import {
  globalBorderRadius,
  globalColor,
  globalShadow,
  rem,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const SplitInfoSection = styled.section`
  padding: 60px 0;
`;

export const SplitInfoHolder = styled.div`
  display: flex;
  gap: 32px;

  ${media_breakpoint_down('xl')} {
    flex-direction: column;
  }

  ${media_breakpoint_down('md')} {
    gap: 16px;
  }
`;

export const SplitInfoColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  > p {
    margin: 0;
    color: ${globalColor.gray.gray700};

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(14)};
    }
  }

  &.info-bg {
    padding: 32px;
    background-color: ${globalColor.white};
    border-radius: ${globalBorderRadius.middle};
    box-shadow: ${globalShadow.shadowM};

    > p {
      color: ${globalColor.blue.darkBlue};
      font-size: ${rem(20)};
      line-height: 1.6;
      font-weight: 400;
      font-style: italic;
    }

    ${media_breakpoint_down('md')} {
      padding: 16px;

      > p {
        font-size: ${rem(18)};
        line-height: 1.5;
      }
    }
  }
`;
