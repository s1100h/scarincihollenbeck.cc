import styled from 'styled-components';
import Link from 'next/link';
import {
  cannabisLawColors,
  globalColor,
  rem,
} from '../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../mediaBreakpoints.style';

export const DescrBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  gap: 32px;

  p {
    font-family: var(--font-rajdhani), sans-serif;
    margin-bottom: 0;
    color: ${globalColor.white};
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  ${media_breakpoint_down('lg')} {
    p {
      font-size: 1rem;
      line-height: 24px;
    }
  }

  ${media_breakpoint_down('md')} {
    gap: 24px;
  }

  ${media_breakpoint_exactly_down(378)} {
    p {
      width: 300px;
    }
  }
`;

export const ButtonLinkToAttorneys = styled(Link)`
  padding: 14px 24px;
  display: flex;
  width: max-content;
  justify-content: center;
  align-items: center;
  background-color: ${cannabisLawColors.cannabisColorDarkGray};
  border: 2px solid ${cannabisLawColors.cannabisColorDarkGray};
  color: ${globalColor.white};
  border-radius: 40px;
  font-size: ${rem(18)};
  line-height: 27px;
  font-weight: 600;
  font-family: var(--font-poppins), sans-serif;

  :hover {
    border: 2px solid ${cannabisLawColors.cannabisColorGray};
    color: ${cannabisLawColors.cannabisColorGray};
    background-color: transparent;
  }

  ${media_breakpoint_down('xxl')} {
    padding: 10px 24px;
    font-size: ${rem(16)};
    line-height: 24px;
  }
`;
