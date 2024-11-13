import styled from 'styled-components';
import { media_breakpoint_down } from 'styles/mediaBreakpoints.style';
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
  position: relative;

  img {
    filter: ${({ cardIsHovered }) => hoveredSystemMap[cardIsHovered]};
    width: 241px;
    height: 305px;
    object-fit: cover;

    :hover {
      cursor: pointer;
    }

    ${media_breakpoint_down('xxl')} {
      width: 185px;
      height: 234px;
    }
  }

  .attorney-info {
    display: none;
    padding: 10px;
    flex-direction: column;
    width: 100%;
    background-color: ${cannabisLawColors.cannabisColorGray};
    position: absolute;
    top: 100%;
    z-index: 2;

    .attorney-name {
      width: inherit;
      font-family: var(--font-poppins), sans-serif;
      font-size: ${rem(18)};
      line-height: 26px;
      font-weight: 600;
      text-transform: uppercase;
      word-wrap: inherit;
    }

    a {
      column-gap: 8px;
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
