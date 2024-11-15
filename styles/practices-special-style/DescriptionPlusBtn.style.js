import styled from 'styled-components';
import {
  cannabisLawColors,
  globalColor,
  rem,
} from '../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../mediaBreakpoints.style';
import { SubscribeBtn } from 'styles/Subscription.style';

export const DescrBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--description-width);
  gap: 32px;

  > p {
    font-family: var(--font-rajdhani), sans-serif;
    margin-bottom: 0;
    color: ${globalColor.white};
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  ${SubscribeBtn} {
    padding: 14px 24px;
    height: auto;
    display: flex;
    width: max-content;
    justify-content: center;
    align-items: center;
    background-color: ${cannabisLawColors.cannabisColorDarkGray};
    border: 2px solid ${cannabisLawColors.cannabisColorDarkGray};
    color: ${globalColor.white};
    border-radius: 40px;
    transition: all 0.3s ease;

    span {
      font-size: ${rem(18)};
      line-height: 27px;
      font-weight: 600;
      font-family: var(--font-poppins), sans-serif;
    }

    :hover {
      border: 2px solid ${cannabisLawColors.cannabisColorGray};
      color: ${cannabisLawColors.cannabisColorGray};
      background-color: transparent;
    }

    ${media_breakpoint_down('xxl')} {
      padding: 10px 24px;

      span {
        font-size: ${rem(16)};
        line-height: 24px;
      }
    }
  }

  ${media_breakpoint_down('lg')} {
    > p {
      font-size: 1rem;
      line-height: 24px;
    }
  }

  ${media_breakpoint_down('md')} {
    gap: 24px;
  }

  ${media_breakpoint_exactly_down(378)} {
    > p {
      width: 300px;
    }
  }
`;
