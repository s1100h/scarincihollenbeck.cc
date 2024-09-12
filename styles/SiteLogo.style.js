import styled from 'styled-components';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';
import Link from 'next/link';

export const CombinedLogo = styled(Link)`
  max-width: 256px;
  height: 52px;
  display: flex;
  align-items: center;
  column-gap: 4px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .logo-diamond {
    aspect-ratio: 1;
  }

  .logo-letters {
    max-width: 200px;
  }

  ${media_breakpoint_down('md')} {
    max-width: 158px;
    height: 32px;

    .logo-letters {
      max-width: 120px;
    }
  }
`;
