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
import { AttorneysContainer } from 'styles/AttorneysListBox.style';

export const AttorneysCannabisContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${cannabisLawColors.cannabisColorDarkGray};
  padding-top: 140px;
  position: relative;
  align-items: center;
  overflow: hidden;

  ${AttorneysContainer} {
    padding: 0;
    box-shadow: none;
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
      color: ${cannabisLawColors.cannabisColorGray};
      font-size: ${rem(20)};
      line-height: 30px;
      font-weight: 500;
    }

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

  .chair-box {
    margin-right: 40px;

    ${media_breakpoint_exactly_down(1040)} {
      margin-right: 0;
      margin-bottom: 60px;
    }

    > h3 {
      margin: 0 0 48px 0;
      color: ${cannabisLawColors.cannabisColorGray};
      font-size: ${rem(54)};
      line-height: 70px;
      font-family: var(--font-poppins), sans-serif;
      font-weight: 600;

      ${media_breakpoint_down('xxl')} {
        margin: 0 0 32px 0;
        font-size: ${rem(36)};
        line-height: 47px;
      }

      ${media_breakpoint_down('md')} {
        font-size: ${rem(32)};
        line-height: 42px;
      }
    }
  }

  .attorneys-list-box {
    > div {
      gap: 40px;

      ${media_breakpoint_down('xxl')} {
        gap: 32px;
      }

      ${media_breakpoint_down('md')} {
        gap: 24px;
        justify-content: flex-start;
      }
    }

    > h3 {
      margin: 0 0 48px 0;
      color: ${cannabisLawColors.cannabisColorGray};
      font-size: ${rem(54)};
      line-height: 70px;
      font-family: var(--font-poppins), sans-serif;
      font-weight: 600;

      ${media_breakpoint_down('xxl')} {
        margin: 0 0 32px 0;
        font-size: ${rem(36)};
        line-height: 47px;
      }

      ${media_breakpoint_down('md')} {
        font-size: ${rem(32)};
        line-height: 42px;
      }
    }
  }

  ${media_breakpoint_down('xxl')} {
    padding-top: 120px;
  }

  ${media_breakpoint_exactly_down(1040)} {
    padding-top: 100px;
  }

  ${media_breakpoint_down('sm')} {
    padding-top: 80px;
  }
`;
