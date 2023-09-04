import styled from 'styled-components';
import { cannabisLawColors, globalColor } from '../global_styles/Global.styles';
import Link from 'next/link';

export const ScrollDownContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    font-family: var(--font-rajdhani), sans-serif;
    color: ${globalColor.white};
    font-size: 1.25rem;
    text-transform: uppercase;
    margin-bottom: 0;
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
`;
