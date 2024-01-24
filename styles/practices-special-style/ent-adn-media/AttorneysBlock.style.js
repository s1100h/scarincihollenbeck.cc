import {
  entAndMediaColors,
  globalColor,
  rem,
} from 'styles/global_styles/Global.styles';
import { ContainerContent } from '../commonForSpecial.style';
import { AttorneysContainer } from 'styles/AttorneysListBox.style';
import {
  ContactBox,
  InfoBox,
  LinkBox,
  UserName,
} from 'styles/AttorneyCard.style';
import styled from 'styled-components';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const AttorneySection = styled.section`
  padding: 120px 0 0 0;

  .attorney-title {
    margin: 0 0 40px 0;
    color: ${globalColor.black};
    font-family: var(--font-carilo);
    font-size: ${rem(64)};
    font-weight: 400;
    line-height: 100px;
  }

  ${ContainerContent} {
    position: relative;
    padding-bottom: 120px;

    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 270px);
      height: 1px;
      background-color: ${globalColor.grayExtraLite.grayExtraLite50};
    }

    ${media_breakpoint_exactly_down(1440)} {
      padding-bottom: 100px;

      &::after {
        width: calc(100% - 64px);
      }
    }

    ${media_breakpoint_down('md')} {
      padding-bottom: 80px;
    }
  }

  ${AttorneysContainer} {
    margin: 0;
    padding: 0;
    box-shadow: none;
    column-gap: 40px;

    .chair-box,
    .attorneys-list-box {
      h3 {
        margin: 0 0 32px 0;
        color: ${globalColor.black};
        font-family: var(--font-poppins), sans-serif;
        font-size: ${rem(36)};
        font-weight: 500;
        line-height: 54px;
        text-transform: none;
      }
    }

    .chair-box {
      margin: 0;
    }

    .attorneys-list-box {
      > div {
        gap: 40px;
        margin: 0;
      }
    }

    .attorney-card-box {
      box-shadow: none;
      border: 0;
      padding: 0;

      ${LinkBox} {
        column-gap: 8px;
        align-items: center;
      }

      ${UserName} {
        margin-bottom: 4px;
        font-family: var(--font-poppins), sans-serif;
        color: ${globalColor.black};
        font-size: ${rem(18)};
        font-weight: 600;
        line-height: 27px;
      }

      ${InfoBox} {
        p {
          margin-bottom: 12px;
          font-family: var(--font-poppins), sans-serif;
          font-size: ${rem(14)};
          font-weight: 400;
          line-height: 21px;
          color: ${entAndMediaColors.entAndMediaColorMediumGray};
        }
      }

      ${ContactBox} {
        margin: 0;
        row-gap: 4px;
        a {
          column-gap: 8px;
          span {
            color: ${globalColor.black};
            font-family: var(--font-poppins), sans-serif;
            font-size: ${rem(14)};
            font-weight: 600;
            line-height: 21px;
            text-decoration: none;
          }
        }
      }
    }

    ${media_breakpoint_exactly_down(1850)} {
      .attorneys-list-box {
        > div {
          gap: 30px;
        }
      }
    }

    ${media_breakpoint_exactly_down(1440)} {
      flex-direction: column;

      .chair-box,
      .attorneys-list-box {
        h3 {
          margin: 0 0 24px 0;
          font-size: ${rem(32)};
          line-height: 48px;
        }
      }

      .chair-box {
        margin-bottom: 28px;
      }

      .attorneys-list-box {
        > div {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          column-gap: 16px;
          row-gap: 20px;
        }
      }
    }

    ${media_breakpoint_down('md')} {
      .attorneys-list-box {
        > div {
          display: grid;
          grid-template-columns: 1fr;

          row-gap: 16px;
        }
      }
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
    padding-top: 100px;
    .attorney-title {
      margin: 0 0 24px 0;
      font-size: ${rem(48)};
      line-height: 72px;
    }
  }

  ${media_breakpoint_down('md')} {
    padding-top: 80px;

    .attorney-title {
      margin: 0 0 20px 0;
      font-size: ${rem(32)};
      line-height: 48px;
    }
  }
`;
