import styled from 'styled-components';
import { media_breakpoint_exactly_down } from './mediaBreakpoints.style';
import Link from 'next/link';

export const CombinedLogo = styled(Link)`
  width: 410px;

  ${media_breakpoint_exactly_down(620)} {
    .logo-letters {
      display: none;
    }
  }
`;
