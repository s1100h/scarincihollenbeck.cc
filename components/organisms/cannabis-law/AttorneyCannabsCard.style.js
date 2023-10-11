import styled from 'styled-components';
import {
  cannabisLawColors,
  rem,
} from '../../../styles/global_styles/Global.styles';

const hoveredSystemMap = {
  default: 'grayscale(1)',
  hovered: 'grayscale(0)',
  blur: 'blur(2px) grayscale(1)',
};
export const CardCannabisAttorney = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1%;
  position: relative;

  img {
    filter: ${({ cardIsHovered }) => hoveredSystemMap[cardIsHovered]};
    width: 200px;
    height: 225px;

    :hover {
      cursor: pointer;
    }
  }

  .attorney-info {
    display: none;
    padding: 10px;
    flex-direction: column;
    width: 200px;
    background-color: ${cannabisLawColors.cannabisColorGray};
    position: absolute;
    top: 100%;
    z-index: 2;

    .attorney-name {
      width: inherit;
      font-family: var(--font-poppins), sans-serif;
      font-size: ${rem(18)};
      font-weight: 600;
      text-transform: uppercase;
      word-wrap: inherit;
    }

    span {
      font-family: var(--font-rajdhani), sans-serif;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  :hover {
    .attorney-info {
      display: flex;
    }
  }
`;
