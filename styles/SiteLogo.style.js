import styled from 'styled-components';
import {
  media_breakpoint_down,
} from './mediaBreakpoints.style';
import Link from 'next/link';

export const CombinedLogo = styled(Link)`
  --logo-diamond-size: 52px;
  max-width: 256px;
  height: var(--logo-diamond-size);
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
    width: var(--logo-diamond-size);
  }

  .logo-letters {
    max-width: 200px;
  }

  ${media_breakpoint_down('md')} {
    --logo-diamond-size: 32px;
    max-width: 158px;

    .logo-letters {
      max-width: 120px;
    }
  }
`;
