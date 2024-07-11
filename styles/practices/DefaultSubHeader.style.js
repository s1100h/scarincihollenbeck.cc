import styled from 'styled-components';
import {
  AboutAuthorFormCardContainer,
  ContactNowBtn,
} from 'styles/AboutAuthorFormCard.style';
import { ContactBox, InfoBox, LinkBox } from 'styles/AttorneyCard.style';
import { BreadcrumbsListContainer } from 'styles/Breadcrumbs.style';
import { globalColor, globalTransition, rem } from 'styles/global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';
import { OfficeCardContainer } from '../Locations.style';

export const attorneyCardForPractices = `
  .attorney-card-box {
    flex: 1;
    padding: 0;
    border: none;
    min-width: auto;
    flex-basis: unset;
    box-shadow: none;

    &:hover {
      box-shadow: none;

      > div {
        h3 {
          color: ${globalColor.white};
        }
      }

      ${LinkBox} {
        img {
          filter: grayscale(0%);
        }
      }
    }

    ${LinkBox} {
      gap: 8px;

      img {
        width: 164px;
        height: 172px;
        filter: grayscale(100%);
        object-fit: cover;
        transition: ${globalTransition.default};

        ${media_breakpoint_down('sm')} {
          width: 126px;
          height: 132px;
        }
      }
    }

    ${InfoBox} {
      h3,
      p {
        font-family: var(--font-poppins);
      }

      h3 {
        margin: 0 0 4px 0;
        color: ${globalColor.white};
        font-size: ${rem(16)};
        line-height: 24px;
        font-weight: 500;
        transition: ${globalTransition.default};

        ${media_breakpoint_down('sm')} {
          font-size: ${rem(14)};
          line-height: 20px;
        }
      }

      p {
        margin: 0 0 auto 0;
        color: #b3b3b3;
        font-size: ${rem(12)};
        line-height: 16px;
        font-weight: 400;

        ${media_breakpoint_down('sm')} {
          font-size: ${rem(8)};
          line-height: 12px;
        }
      }
    }

    ${ContactBox} {
      margin: 0;
      row-gap: 8px;

      .contact-offices,
      a {
        margin: 0;
        display: flex;
        align-items: center;
        column-gap: 8px;

        span {
          font-family: var(--font-poppins);
          color: ${globalColor.white};
          font-size: ${rem(14)};
          line-height: 20px;
          font-weight: 500;
          transition: ${globalTransition.default};
          text-decoration: none;

          ${media_breakpoint_down('sm')} {
            font-size: ${rem(12)};
            line-height: 16px;
          }
        }

        svg {
          fill: #afdcf5;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          transition: ${globalTransition.default};

          ${media_breakpoint_down('sm')} {
            width: 12px;
            height: 12px;
          }
        }
      }

      .contact-offices {
        &:hover {
          svg {
            fill: ${globalColor.blue.skyBlue};
          }
        }
      }

      a {
        &:hover {
          span {
            color: ${globalColor.blue.skyBlue};
          }

          svg {
            fill: ${globalColor.blue.skyBlue};
          }
        }
      }
    }
  }
`;

export const DefaultSubHeaderHolder = styled.div`
  background-color: ${globalColor.gray.gray10};
  display: flex;
  column-gap: 32px;
  padding-bottom: ${({ props }) => (props?.isFilter ? '80px' : '0')};

  .sub-header {
    &__image {
      width: 20%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-width: 100%;
      }

      ${media_breakpoint_exactly_down(1439)} {
        width: 26%;
      }
    }
  }

  ${media_breakpoint_exactly_down(1850)} {
    gap: 24px;
  }

  ${media_breakpoint_exactly_down(1439)} {
    column-gap: 16px;
    flex-wrap: wrap;
    padding-bottom: ${({ props }) => (props?.isFilter ? '90px' : '0')};
  }

  ${media_breakpoint_down('sm')} {
    row-gap: 0;
    column-gap: 8px;
    padding-bottom: ${({ props }) => (props?.isFilter ? '115px' : '0')};
  }
`;

export const DefaultSubHeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  ${BreadcrumbsListContainer} {
    margin: 16px 0 0 0;

    li {
      a {
        color: ${globalColor.grayExtraLite.grayExtraLite50};
        transition: all 0.5s ease;

        &:hover {
          color: #888;
        }
      }

      svg {
        fill: ${globalColor.grayExtraLite.grayExtraLite50};
      }

      span {
        color: #888;
      }

      &.active {
        > a {
          color: #888;
        }
      }

      a,
      span {
        font-size: ${rem(14)};
        line-height: 13px;
      }
    }

    ${media_breakpoint_down('md')} {
      margin: 12px 0 0 0;
      padding: 0;
    }
  }

  .sub-header__text {
    margin: auto 0;
    padding: 54px 0;
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    h1 {
      margin: 0;
      text-transform: uppercase;
      font-weight: 400;

      ${media_breakpoint_exactly_down(1439)} {
        font-size: ${rem(32)};
        line-height: 48px;
      }

      ${media_breakpoint_down('md')} {
        font-size: ${rem(24)};
        line-height: 36px;
      }
    }

    ${media_breakpoint_exactly_down(1850)} {
      padding: 38px 0;
    }

    ${media_breakpoint_exactly_down(1439)} {
      padding: 24px 0 12px;
    }

    ${media_breakpoint_down('md')} {
      padding: 14px 0 12px;
      row-gap: 8px;
    }
  }

  ${media_breakpoint_exactly_down(1439)} {
    padding-right: 32px;
  }

  ${media_breakpoint_down('md')} {
    padding-right: 12px;
  }
`;

export const DefaultSubHeaderDescription = styled.div`
  p {
    margin: 0;
    color: ${globalColor.gray.gray80};
    line-height: 29.5px;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(14)};
      line-height: 20px;
    }
  }
`;

export const DefaultSubHeaderKeyContacts = styled.div`
  display: flex;
  max-width: 36.5%;
  flex: 1;
  padding: 28px 32px;
  background-color: ${globalColor.blue.darkBlue};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 12px;

  > h3 {
    font-family: var(--font-poppins);
    color: ${globalColor.white};
    font-size: ${rem(20)};
    line-height: 24px;
    font-weight: 500;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(16)};
      line-height: 20px;
    }
  }

  ${OfficeCardContainer} {
    padding: 5%;
    .current-office-card-title {
      color: ${globalColor.blue.skyBlue};
      line-height: 24px;
      font-size: rem(20);
      font-weight: 700;
    }
    svg {
      fill: ${globalColor.white};
    }

    address {
      font-size: 1rem;
      color: ${globalColor.white};

      span {
        span {
          top: auto;
        }
      }
      a {
        color: ${globalColor.white};
        transition: all 0.5s ease-in-out;

        :hover {
          color: ${globalColor.blue.skyBlue};
          svg {
            transition: all 0.5s ease-in-out;
            fill: ${globalColor.blue.skyBlue};
          }
        }
      }
    }
  }

  ${AboutAuthorFormCardContainer} {
    margin: 4px 0 0 0 !important;
    padding: 0;
    width: auto;

    > button {
      width: 100%;

      > span {
        ${media_breakpoint_down('sm')} {
          font-size: ${rem(14)};
          line-height: 20px;
        }
      }
    }

    ${media_breakpoint_down('sm')} {
      width: 100%;
    }
  }

  ${ContactNowBtn} {
    height: auto;
    padding: 10px 89px;
    line-height: 24px;
    background-color: ${globalColor.blue.blue500};
    position: relative;
    z-index: 0;
    border-radius: 2px;

    &:hover {
      &::after {
        opacity: 1;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0;
      background-image: linear-gradient(89deg, #377ec4 2.36%, #afdcf5 107.09%);
      transition: ${globalTransition.default};
    }
  }

  ${media_breakpoint_exactly_down(1439)} {
    padding: 28px 24px;
    margin-left: 32px;
    width: 100%;
    max-width: 100%;
    flex: unset;
  }

  ${media_breakpoint_down('md')} {
    margin-left: 0;
  }

  ${media_breakpoint_down('sm')} {
    padding: 8px 12px;
  }
`;

export const DefaultSubHeaderKeyContactsCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${attorneyCardForPractices}

  ${media_breakpoint_exactly_down(1439)} {
    column-gap: 40px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  ${media_breakpoint_down('sm')} {
    gap: 12px;
  }
`;
