import styled from 'styled-components';
import {
  attorneyCardForCannabis,
  beforeDoteStyledList,
  cannabisLawColors,
  globalColor,
  paragraphStyles,
  rem,
} from '../../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../../mediaBreakpoints.style';
import {
  ContactBox,
  InfoBox,
  LinkBox,
  UserName,
} from 'styles/AttorneyCard.style';

export const KeyContactsBlockContainer = styled.section`
  display: flex;
  justify-content: center;
  background: url('/images/smoke_overlay.webp') center/cover no-repeat;
  padding: 140px 0;

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

    p {
      color: ${cannabisLawColors.cannabisColorGray};
      font-size: ${rem(20)};
      line-height: 30px;
      font-weight: 500;
    }

    ul {
      padding: 40px;
      background-color: ${cannabisLawColors.cannabisColorGray};
      margin-bottom: 20px;
      column-count: 2;
      column-span: all;

      li {
        color: ${cannabisLawColors.cannabisColorDarkGray};
        display: flex;
        font-size: ${rem(20)};
        font-weight: 500;
        line-height: 30px;
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

  .key-contacts-title {
    margin: 0 0 40px 0;
    color: ${cannabisLawColors.cannabisColorGray};
    font-size: ${rem(54)};
    line-height: 70px;
    font-weight: 600;
    font-family: var(--font-poppins), sans-serif;

    ${media_breakpoint_down('xxl')} {
      margin: 0 0 32px 0;
      font-size: ${rem(36)};
      line-height: 47px;
    }

    ${media_breakpoint_exactly_down(1440)} {
      font-size: ${rem(32)};
      line-height: 42px;
    }
  }

  .attorney-card-box {
    ${attorneyCardForCannabis};
  }

  ${media_breakpoint_exactly_down(1440)} {
    margin-top: 60px;
    display: flex;
    align-items: center;
  }

  ${media_breakpoint_down('sm')} {
    .attorney-card-box {
      width: 100%;
    }
  }
`;
