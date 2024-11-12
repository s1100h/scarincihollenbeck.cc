import styled from 'styled-components';
import {
  AboutAuthorFormCardContainer,
  ContactNowBtn,
} from 'styles/AboutAuthorFormCard.style';
import { ContactBox, InfoBox, LinkBox } from 'styles/AttorneyCard.style';
import { BreadcrumbsListContainer } from 'styles/Breadcrumbs.style';
import {
  globalBorderRadius,
  globalColor,
  globalTransition,
  rem,
} from 'styles/global_styles/Global.styles';
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
        border-radius: ${globalBorderRadius.extraSmall};

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
        font-size: ${rem(20)};
        line-height: 32px;
        font-weight: 600;
        transition: ${globalTransition.default};

        ${media_breakpoint_down('sm')} {
          font-size: ${rem(14)};
          line-height: 20px;
        }
      }

      p {
        margin: 0 0 auto 0;
        color: ${globalColor.gray.gray10};
        font-size: ${rem(12)};
        line-height: 20px;
        font-weight: 400;
        text-transform: uppercase;
        font-family: var(--font-lato);

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

export const SubHeaderHolder = styled.div`
  background-color: ${globalColor.gray.gray10};
  display: flex;
  column-gap: 32px;

  .sub-header__image {
    width: 20%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-width: 100%;
    }

    ${media_breakpoint_exactly_down(1440)} {
      width: 26%;
    }
  }

  ${media_breakpoint_exactly_down(1850)} {
    gap: 24px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    column-gap: 16px;
    flex-wrap: wrap;
  }

  ${media_breakpoint_down('sm')} {
    row-gap: 0;
    column-gap: 8px;
  }

  &.sub-header--slider {
    .sub-header__image {
      flex: 1;
      max-width: 20%;
      position: relative;

      img {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .sub-header__content {
      flex: unset;
      width: 33%;

      ${media_breakpoint_exactly_down(1440)} {
        width: 27%;
        padding-right: 0;
      }
    }

    ${media_breakpoint_down('xl')} {
      flex-direction: column;
      gap: 24px;

      .sub-header__image {
        display: none;
      }

      .sub-header__content {
        padding: 0 32px;
        width: 100%;
        gap: 40px;
      }

      .sub-header__text {
        padding: 0;
      }
    }

    ${media_breakpoint_down('md')} {
      .sub-header__content {
        padding: 0 16px;
        gap: 24px;
      }

      .sub-header__text {
        gap: 12px;

        h1 {
          font-size: ${rem(32)};
        }
      }
    }
  }
`;

export const SubHeaderContent = styled.div`
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
      text-transform: capitalize;
      font-weight: 500;

      ${media_breakpoint_exactly_down(1440)} {
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

    ${media_breakpoint_exactly_down(1440)} {
      padding: 24px 0 12px;
    }

    ${media_breakpoint_down('md')} {
      padding: 14px 0 12px;
      row-gap: 8px;
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
    padding-right: 32px;
  }

  ${media_breakpoint_down('md')} {
    padding-right: 12px;
  }
`;

export const SubHeaderDescription = styled.div`
  p {
    margin: 0;
    color: ${globalColor.gray.gray700};
    line-height: 29.5px;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(14)};
      line-height: 20px;
    }
  }
`;

export const SubHeaderInteractive = styled.div`
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
    color: ${globalColor.white};
    font-size: ${rem(18)};
    line-height: 28px;
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
      border-radius: inherit;
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
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

export const SubHeaderKeyContactsCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${attorneyCardForPractices}

  ${media_breakpoint_exactly_down(1440)} {
    column-gap: 40px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  ${media_breakpoint_down('sm')} {
    gap: 12px;
  }
`;

export const SubHeaderSlider = styled.div`
  flex: 1;
  padding-right: 80px;
  margin-right: auto;
  max-width: 100%;
  background-color: ${globalColor.blue.blue6002};

  ${media_breakpoint_down('xl')} {
    padding-right: 32px;
  }

  ${media_breakpoint_down('md')} {
    padding-right: 16px;
  }
`;

export const SubHeaderSlide = styled.div`
  max-width: 710px;
  height: 100%;
  display: flex;
  gap: 12px;
  color: ${globalColor.white};

  ${media_breakpoint_down('xl')} {
    max-width: 100%;
  }
`;

export const SubHeaderSlideImage = styled.picture`
  flex-shrink: 0;
  width: 230px;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media_breakpoint_down('xl')} {
    height: auto;
    min-height: 276px;
    position: relative;

    img {
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  ${media_breakpoint_down('sm')} {
    width: 100px;
  }
`;

export const SubHeaderSlideContent = styled.div`
  padding: 10px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const SubHeaderSlideTitle = styled.h2`
  margin: 0;
  font-size: ${rem(20)};
  font-weight: 600;
  line-height: 1.6;

  ${media_breakpoint_down('md')} {
    font-size: ${rem(18)};
    line-height: 1.56;
  }
`;

export const SubHeaderSlideLabel = styled.span`
  color: ${globalColor.gray.gray150};
  font-size: ${rem(12)};
  line-height: 1.67;
  font-family: var(--font-lato);
  text-transform: uppercase;
`;

export const SubHeaderSlideDescription = styled.div`
  min-height: 105px;
  margin: 8px 0 26px;
  font-size: ${rem(14)};
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  * {
    margin: 0;
  }

  ${media_breakpoint_down('xl')} {
    margin: 8px 0 16px;
    min-height: 60px;
    -webkit-line-clamp: 3;
  }

  ${media_breakpoint_down('md')} {
    -webkit-line-clamp: 4;
    min-height: 84px;
  }

  ${media_breakpoint_down('sm')} {
    font-size: ${rem(12)};
    line-height: 1.34;
    min-height: 64px;
  }
`;

export const SubHeaderSlideNavigationIcon = styled.span`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColor.blue.blue550};
  color: ${globalColor.blue.skyBlue};
  transition: ${globalTransition.default};
`;

export const SubHeaderSlideNavigationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  color: ${globalColor.gray.gray500};
  font-family: var(--font-lato);
  font-size: ${rem(12)};
  line-height: 1.67;
  text-transform: uppercase;
  transition: ${globalTransition.default};

  .nav-text {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: end;
    padding-right: 8px;
  }

  &.next {
    margin-top: auto;
  }

  &.prev {
    margin-bottom: auto;
  }

  @media (hover: hover) {
    &:hover {
      color: ${globalColor.gray.gray10};
      ${SubHeaderSlideNavigationIcon} {
        background-color: #373c59;
      }
    }
  }

  &:active {
    color: ${globalColor.gray.gray10};
    ${SubHeaderSlideNavigationIcon} {
      background-color: #373c59;
    }
  }
`;