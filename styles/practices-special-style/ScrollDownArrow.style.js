import styled from 'styled-components';
import {
  cannabisLawColors,
  globalColor,
  rem,
} from '../global_styles/Global.styles';
import Link from 'next/link';
import { media_breakpoint_down } from 'styles/mediaBreakpoints.style';

export const ScrollDownContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    font-family: var(--font-rajdhani), sans-serif;
    color: ${globalColor.white};
    font-size: ${rem(20)};
    line-height: 30px;
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 0;

    ${media_breakpoint_down('md')} {
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;
export const CircleArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  background-color: ${cannabisLawColors.cannabisColorGray};
  border-radius: 50%;

  svg {
    font-size: 40px;
    color: ${cannabisLawColors.cannabisColorDarkGray};
  }

  :hover {
    background-color: transparent;
    border: 1px solid ${globalColor.white};

    svg {
      color: ${globalColor.white};
    }
  }

  ${media_breakpoint_down('xxl')} {
    width: 64px;
    height: 64px;

    svg {
      width: 30px;
    }
  }

  ${media_breakpoint_down('md')} {
    width: 48px;
    height: 48px;

    svg {
      width: 24px;
    }
  }

  ${media_breakpoint_down('sm')} {
    width: 40px;
    height: 40px;

    svg {
      width: 20px;
    }
  }
`;
