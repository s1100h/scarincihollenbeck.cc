import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const ImageWrapper = styled.div`
  display: initial;
  min-width: 250px;

  ${media_breakpoint_down('md')} {
    display: none;
  }
`;
