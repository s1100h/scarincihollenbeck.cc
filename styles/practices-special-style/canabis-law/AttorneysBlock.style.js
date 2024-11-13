import styled from 'styled-components';
import {
  attorneyCardForCannabis,
  cannabisLawColors,
  rem,
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
  padding: 140px 0;
  position: relative;
  align-items: center;
  overflow: hidden;

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

  .attorneys-article-box {
    position: relative;

    h3 {
      color: ${cannabisLawColors.cannabisColorGray};
      font-family: var(--font-poppins), sans-serif;
      font-size: ${rem(54)};
      line-height: 70px;
      font-weight: 600;
    }

    p {
      margin: 0;
      color: ${cannabisLawColors.cannabisColorGray};
      font-size: ${rem(20)};
      line-height: 30px;
      font-weight: 500;
      width: 100%;
      max-width: 725px;
    }

    ${media_breakpoint_down('xl')} {
      position: initial;

      .cannabis-big-leaf {
        right: 0;
        bottom: 0;
        z-index: 0;
      }
      
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
        line-height: 24px;
        max-width: 525px;
      }
    }

    ${media_breakpoint_down('sm')} {
      align-items: start;

      h3 {
        text-align: start;
        font-size: ${rem(24)};
        line-height: 32px;
      }

      p {
        text-align: start;
        width: 90%;
        font-size: 1rem;
      }
    }
  }


  ${media_breakpoint_down('xxl')} {
    padding: 120px 0;
  }

  ${media_breakpoint_exactly_down('xl')} {
    padding: 100px 0;
  }

  ${media_breakpoint_down('sm')} {
    padding: 80px 0;
  }
`;

export const AttorneysCannabisHolder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 140px;

  ${media_breakpoint_down('xxl')} {
    row-gap: 120px;
  }

  ${media_breakpoint_exactly_down('xl')} {
    row-gap: 100px;
  }

  ${media_breakpoint_down('sm')} {
    row-gap: 80px;
  }
`;
