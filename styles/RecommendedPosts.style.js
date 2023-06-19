import styled from 'styled-components';
import { rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const NewsTitle = styled.h2`
  font-family: var(--font-poppins);
  font-size: ${rem(72)};
  margin-top: 50px;
  margin-bottom: 35px;

  ${media_breakpoint_down('lg')} {
    font-size: 2.5rem;
  }

  ${media_breakpoint_down('md')} {
    text-align: center;
  }

  ${media_breakpoint_down('sm')} {
    font-size: 2rem;
  }
`;
