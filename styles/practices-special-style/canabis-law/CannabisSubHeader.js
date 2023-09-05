import styled from 'styled-components';
import { globalColor, paragraphStyles } from '../../global_styles/Global.styles';
import { media_breakpoint_down } from '../../mediaBreakpoints.style';

export const CannabisSubTitle = styled.div`
  position: absolute;
  top: 92%;
  left: 40vw;

  p {
    ${paragraphStyles};
    text-align: start;
    font-size: 1rem;
    color: ${globalColor.white};
    width: 670px;
  }
  ${media_breakpoint_down('xl')} {
    left: auto;
    right: 0;

    p {
      font-size: 1rem;
    }
  }

  ${media_breakpoint_down('lg')} {
    top: 91%;
    p {
      width: 505px;
      font-size: 0.8rem;
    }
  }

  ${media_breakpoint_down('md')} {
    p {
      width: 364px;
    }
  }

  ${media_breakpoint_down('sm')} {
    display: none;
  }
`;
