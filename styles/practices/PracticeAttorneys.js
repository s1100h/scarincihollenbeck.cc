import styled from 'styled-components';
import { ContactBox } from 'styles/AttorneyCard.style';
import { AttorneysContainer } from 'styles/AttorneysListBox.style';
import { globalColor, rem } from 'styles/global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const PracticeAttorneysSection = styled.section`
  margin-bottom: 40px;
  padding: 24px 0;
  background: url('/images/attorneys-bg.png');

  &.collapsed {
    .attorneys-practice__wrapper {
      grid-template-rows: 1fr;
    }
  }

  .attorneys-practice__header {
    margin-bottom: 20px;
    display: flex;
    align-items: flex-end;
    column-gap: 16px;

    > button {
      height: 100%;
      display: flex;
      color: #377ec4;
      font-family: var(--font-roboto);
      font-size: ${rem(16)};
      line-height: 24px;
      font-weight: 700;
      text-decoration: underline;
      transition: all 0.2s ease-in-out;
      text-transform: uppercase;

      &:hover {
        color: ${globalColor.red.darkRed};
      }

      &:active {
        color: ${globalColor.blue.blue500};
      }

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(14)};
        line-height: 20px;
      }
    }

    ${media_breakpoint_down('sm')} {
      margin-bottom: 8px;
      column-gap: 12px;
    }
  }

  .attorneys-practice__wrapper {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: all 0.5s linear;
  }

  ${AttorneysContainer} {
    ${({ minHeight }) => `
      min-height: ${minHeight}px;
    `}
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, 188px);
    margin: 0;
    padding: 0;
    box-shadow: none;
    align-items: end;

    .chair-box {
      height: 100%;
      margin: 0;
      background-color: ${globalColor.blue.blue500};

      > h3 {
        padding: 8px 4px 0 4px;
        margin: 0;
        color: ${globalColor.gray.gray10};
        font-family: var(--font-poppins);
        font-size: ${rem(20)};
        line-height: 19px;
        font-weight: 700;
      }
    }

    .attorneys-list-box {
      display: contents;

      > h3 {
        display: none;
      }

      > div {
        display: contents;
        margin: 0;
        height: 100%;
        align-items: flex-end;
        gap: 20px;
      }
    }

    .vertical-attorney-card {
      margin: 0;
      width: 100%;
      height: 218px;

      ${media_breakpoint_down('md')} {
        padding: 4px;
        height: 202px;

        a {
          display: flex;
          white-space: normal;
        }
      }
    }

    ${media_breakpoint_exactly_down(1850)} {
      gap: 12px;
    }

    ${media_breakpoint_exactly_down(1439)} {
      gap: 20px;
    }

    ${media_breakpoint_down('md')} {
      justify-content: flex-start;
    }

    ${media_breakpoint_down('sm')} {
      gap: 0;
      grid-template-columns: repeat(auto-fit, 175px);
      ${({ minHeight }) => `
        min-height: ${minHeight}px;
      `}
    }
  }

  ${media_breakpoint_down('md')} {
    margin: 0 0 32px 0;
  }
`;

export const PracticeAttorneysCard = styled.div`
  padding: 4px;
  position: relative;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      .attorney__image {
        filter: grayscale(0%);
      }
      .attorney__content {
        &::after {
          opacity: 1;
        }

        p {
          margin-bottom: 8px;
        }
      }

      .attorney__contact {
        grid-template-rows: 1fr;
        opacity: 1;
      }
    }
  }

  &.active {
    .attorney__image {
      filter: grayscale(0%);
    }
    .attorney__content {
      &::after {
        opacity: 1;
      }

      p {
        margin-bottom: 8px;
      }
    }

    .attorney__contact {
      grid-template-rows: 1fr;
      opacity: 1;
    }
  }

  .attorney {
    &__link {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    &__image {
      height: 100%;
      filter: grayscale(100%);
      transition: all 0.3s linear;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
    }

    &__content {
      padding: 8px 8px 4px 8px;
      display: flex;
      position: absolute;
      left: 8px;
      bottom: 8px;
      width: 100%;
      width: calc(100% - 16px);
      background-color: rgba(255, 255, 255, 0.72);
      backdrop-filter: blur(2px);
      flex-direction: column;
      z-index: 2;
      text-align: start;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0.33) 4.46%,
          rgba(255, 255, 255, 0.6) 85.92%
        );
        opacity: 0;
        z-index: -1;
        transition: all 0.3s linear;
      }

      ${ContactBox} {
        row-gap: 4px;
        min-height: 0;

        a,
        .contact-offices {
          align-items: center;
          column-gap: 4px;
          font-size: ${rem(12)};
          line-height: 16px;
          font-weight: 500;
          font-family: var(--font-poppins);
          color: ${globalColor.blue.darkBlue};

          &:hover {
            > span {
              text-decoration: underline;
            }
          }

          span {
            text-decoration: none;
          }

          svg {
            fill: ${globalColor.blue.darkBlue};
            width: 12px;
            height: 12px;
          }
        }

        .contact-offices__links {
          > a {
            &::after {
              background-color: ${globalColor.blue.darkBlue};
            }
          }
        }
      }

      > h4 {
        margin: 0 0 2px 0;
        font-size: ${rem(14)};
        line-height: 14px;
        font-weight: 500;
        color: ${globalColor.blue.darkBlue};
        font-family: var(--font-roboto);
      }

      > p {
        margin: 0;
        color: ${globalColor.blue.darkBlue};
        font-family: var(--font-roboto);
        font-size: ${rem(10)};
        line-height: 12px;
        font-weight: 400;
        transition: all 0.125s linear;
      }
    }

    &__contact {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      opacity: 0;
      transition: all 0.3s linear;
    }
  }
`;

export const PracticeNoAttorneys = styled.div`
  margin: 16px 0;
  font-size: ${rem(18)};
  font-weight: 700;
  text-align: center;
`;
