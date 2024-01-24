import styled from 'styled-components';
import { media_breakpoint_exactly_down } from './mediaBreakpoints.style';
import Link from 'next/link';

export const CombinedLogo = styled(Link)`
  max-width: 253px;
  height: 52px;
  display: flex;
  align-items: center;
  column-gap: 9px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .logo-diamond {
    aspect-ratio: 1;
  }

  .logo-letters {
    max-width: 190px;
  }

  ${media_breakpoint_exactly_down(620)} {
    .logo-letters {
      display: none;
    }
  }
`;
