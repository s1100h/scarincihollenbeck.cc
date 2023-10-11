import styled from 'styled-components';
import {
  attorneyCardForCannabis,
  cannabisLawColors,
} from '../../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../../mediaBreakpoints.style';

export const AttorneysCannabisContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${cannabisLawColors.cannabisColorDarkGray};
  padding-top: 140px;
  position: relative;
  align-items: center;
  overflow: hidden;

  > div {
    padding-right: 4%;
    padding-left: 4%;

    ${media_breakpoint_exactly_down(1980)} {
      display: flex;
      padding: 0;
      flex-direction: column;
      align-items: center;
    }
  }

  .cannabis-big-leaf {
    position: absolute;
    width: 500px;
    height: 545px;
    bottom: -60px;
    right: 410px;
    transform: rotate(68deg);
  }

  .attorney-card-box {
    ${attorneyCardForCannabis}
  }

  ${media_breakpoint_down('sm')} {
    padding-left: 15px;
    padding-right: 15px;
  }

  .attorneys-article-box {
    position: relative;

    ${media_breakpoint_down('xl')} {
      .cannabis-big-leaf {
        right: 0;
        bottom: 0;
        z-index: 0;
      }
      position: initial;
      p {
        width: 80%;
      }
    }

    ${media_breakpoint_down('lg')} {
      h3 {
        font-size: 2rem;
        width: 70%;
        text-align: center;
      }

      p {
        font-size: 1.2rem;
      }
    }

    ${media_breakpoint_down('md')} {
      .cannabis-big-leaf {
        width: 300px;
        height: 345px;
        left: 0;
        bottom: 96px;
      }
      h3 {
        width: 80%;
      }

      p {
        font-size: 1.1rem;
      }
    }

    ${media_breakpoint_down('sm')} {
      align-items: start;

      h3 {
        text-align: start;
      }

      p {
        text-align: start;
        width: 90%;
        font-size: 1rem;
      }
    }
  }
`;
