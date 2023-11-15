import styled from 'styled-components';
import Link from 'next/link';
import { cannabisLawColors, globalColor } from '../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../mediaBreakpoints.style';

export const DescrBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  gap: 20px;

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

  ${media_breakpoint_exactly_down(378)} {
    p {
      width: 300px;
    }
  }
`;

export const ButtonLinkToAttorneys = styled(Link)`
  display: flex;
  width: 166px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${cannabisLawColors.cannabisColorDarkGray};
  color: ${globalColor.white};
  border-radius: 40px;

  :hover {
    border: 2px solid ${cannabisLawColors.cannabisColorGray};
    color: ${cannabisLawColors.cannabisColorGray};
    background-color: transparent;
  }
`;
