import styled from 'styled-components';
import Link from 'next/link';
import { cannabisLawColors, globalColor } from '../global_styles/Global.styles';

export const DescrBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  gap: 20px;

  p {
    font-family: var(--font-rajdhani), sans-serif;
    margin-bottom: 0;
    color: ${globalColor.white};
    font-size: 1.25rem;
    text-transform: uppercase;
    font-weight: 400;
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
