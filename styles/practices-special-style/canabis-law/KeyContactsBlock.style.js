import styled from 'styled-components';
import {
  attorneyCardForCannabis,
  beforeDoteStyledList,
  cannabisLawColors,
  globalColor,
  paragraphStyles,
} from '../../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../../mediaBreakpoints.style';

export const KeyContactsBlockContainer = styled.section`
  display: flex;
  justify-content: center;
  background: url('/images/smoke_overlay.webp') center/cover no-repeat;
  padding: 140px 3% 140px 3%;

  > div {
    display: flex;

    p {
      ${paragraphStyles};
      text-align: start;
      width: 100%;
    }
  }

  .list-smoker-box {
    margin-right: 40px;

    ul {
      padding: 40px;
      background-color: ${cannabisLawColors.cannabisColorGray};
      margin-bottom: 20px;
      column-count: 2;
      column-span: all;

      li {
        display: flex;
        font-size: 1.35rem;
        font-family: var(--font-rajdhani), sans-serif;
        text-transform: uppercase;
        position: relative;

        ${beforeDoteStyledList}
      }
    }
  }

  .smoker {
    width: 100%;
    height: 404px;
    padding: 10px;
    background-color: ${globalColor.black};
    position: relative;

    > :first-child {
      height: 100%;
      width: 100%;
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
    > div {
      flex-direction: column;
    }

    .list-smoker-box {
      margin-right: 0;
    }
  }

  ${media_breakpoint_down('lg')} {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  ${media_breakpoint_exactly_down(770)} {
    .list-smoker-box {
      ul {
        li {
          font-size: 1.1rem;
        }
      }
    }

    .smoker {
      height: auto;

      > :first-child {
        height: 80%;
        width: 100%;
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    .list-smoker-box {
      ul {
        column-count: 1;
      }
    }

    .smoker {
      > :first-child {
        height: 70%;
        width: 100%;
      }
    }
  }
`;

export const KeyContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .attorney-card-box {
    ${attorneyCardForCannabis};
  }

  ${media_breakpoint_exactly_down(1440)} {
    margin-top: 140px;

    .attorney-card-box {
      width: 360px;
    }
  }

  ${media_breakpoint_down('sm')} {
    .attorney-card-box {
      width: 100%;
    }
  }
`;
