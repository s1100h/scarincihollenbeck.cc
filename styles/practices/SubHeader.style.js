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
import Link from 'next/link';

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
          flex-shrink: 0;
          transition: ${globalTransition.default};
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
      padding: 0;
    }
  }

  .sub-header__text {
    max-width: 800px;
    margin: auto 0;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    row-gap: 12px;

    h1 {
      margin: 0;
      text-transform: capitalize;
      font-weight: 500;

      ${media_breakpoint_down('md')} {
        font-size: ${rem(32)};
        line-height: 1.38;
      }
    }

    ${media_breakpoint_exactly_down(1279)} {
      max-width: 100%;
      padding: 0;
    }
  }

  ${media_breakpoint_exactly_down(1279)} {
    padding: 0 32px;
    row-gap: 40px;

    &:last-child {
      padding-bottom: 24px;
    }
  }

  ${media_breakpoint_down('md')} {
    padding: 0 12px;
    row-gap: 24px;
  }
`;

export const SubHeaderDescription = styled.div`
  line-height: 29.5px;

  p {
    margin: 0;
    color: ${globalColor.gray.gray700};
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 1.5;
  }
`;

export const SubHeaderInteractive = styled.div`
  flex: 1;
  display: flex;
  padding: 28px 80px 28px 32px;
  background-color: ${({ $bg }) => ($bg ? $bg : globalColor.blue.darkBlue)};
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 12px;

  > h2 {
    margin: 0;
    color: ${globalColor.white};
    font-size: ${rem(18)};
    line-height: 28px;
    font-weight: 500;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(16)};
      line-height: 20px;
    }
  }

  .sub-header__contacts {
    flex: 1;
    max-width: 450px;
    border-radius: ${globalBorderRadius.small};
    background-color: ${globalColor.blue.blue6002};

    ${media_breakpoint_exactly_down(1279)} {
      max-width: 100%;
      width: 100%;
    }
  }

  ${OfficeCardContainer} {
    flex: 1;
    padding: 24px;
    background-color: transparent;
    row-gap: 20px;

    .current-office-card-title {
      margin: 0;
      color: ${globalColor.blue.skyBlue};
      font-size: ${rem(24)};
      line-height: 1.5;
      font-family: var(--font-lato);
      text-transform: uppercase;
      font-weight: 400;

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(16)};
      }
    }

    svg {
      fill: ${globalColor.white};
      transition: ${globalTransition.default};
      margin: 0;
    }

    address {
      padding: 0;
      margin: 0;
      font-size: ${rem(16)};
      color: ${globalColor.white};
      row-gap: 12px;
      font-weight: 600;

      > span {
        max-width: 320px;
        text-wrap: balance;
      }

      span {
        align-items: flex-start;
      }

      a {
        color: ${globalColor.white};
        transition: ${globalTransition.default};

        :hover {
          color: ${globalColor.blue.skyBlue};

          svg {
            fill: ${globalColor.blue.skyBlue};
          }
        }
      }

      a,
      span {
        gap: 12px;
      }

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(14)};
      }
    }

    ${media_breakpoint_down('sm')} {
      row-gap: 12px;
      padding: 8px;
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

  ${media_breakpoint_exactly_down(1279)} {
    padding: 40px 32px;
  }

  ${media_breakpoint_down('lg')} {
    padding: 24px 32px;
  }

  ${media_breakpoint_down('md')} {
    padding: 24px 12px;
  }
`;

export const SubHeaderKeyContactsCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${attorneyCardForPractices}

  ${media_breakpoint_exactly_down(1279)} {
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
  padding-right: 80px;
  min-width: 600px;
  width: 45%;
  background-color: ${globalColor.blue.blue6002};

  ${media_breakpoint_exactly_down(1279)} {
    padding-right: 32px;
    width: 100%;
    min-width: unset;
  }

  ${media_breakpoint_down('md')} {
    padding-right: 12px;
  }
`;

export const SubHeaderSlide = styled.div`
  max-width: 730px;
  height: 100%;
  display: flex;
  gap: 12px;
  color: ${globalColor.white};

  ${media_breakpoint_exactly_down(1279)} {
    max-width: 100%;
  }
`;

export const SubHeaderSlideImage = styled.picture`
  flex-shrink: 0;
  width: 230px;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
  }

  ${media_breakpoint_exactly_down(1279)} {
    height: auto;
    min-height: 276px;
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
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

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
  min-height: 120px;
  margin: 8px 0 26px;
  font-size: ${rem(14)};
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  * {
    margin: 0;
  }

  ${media_breakpoint_exactly_down('xxl')} {
    min-height: 105px;
  }

  ${media_breakpoint_exactly_down(1279)} {
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

export const SubHeaderLocationsHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;

  ${media_breakpoint_down('sm')} {
    flex-direction: column;
    row-gap: 16px;
  }
`;

export const SubHeaderHolder = styled.section`
  min-height: 340px;
  max-width: 1920px;
  margin: 0 auto;
  background-color: ${globalColor.gray.gray10};
  display: flex;
  column-gap: 32px;

  .sub-header__image {
    flex: 1;
    max-width: 20%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    ${media_breakpoint_exactly_down(1279)} {
      display: none;
    }
  }

  ${media_breakpoint_exactly_down(1850)} {
    gap: 24px;
  }

  ${media_breakpoint_exactly_down(1279)} {
    min-height: unset;
    flex-direction: column;
  }

  &.sub-header--without-image {
    .sub-header__content {
      margin-left: auto;
      max-width: 965px;
      padding-left: 80px;

      ${media_breakpoint_exactly_down(1279)} {
        margin-left: unset;
        max-width: 100%;
        padding: 0 32px;
      }

      ${media_breakpoint_down('md')} {
        padding: 0 12px;
      }
    }

    ${SubHeaderInteractive} {
      min-width: 540px;
      flex: unset;
      width: 45%;

      ${media_breakpoint_exactly_down(1279)} {
        width: 100%;
        min-width: unset;
      }
    }
  }

  &.sub-header--menu {
    ${media_breakpoint_exactly_down(1279)} {
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: unset;

      .sub-header__image {
        flex: unset;
        max-width: unset;
        width: 30%;
        order: 1;
        display: block;
      }

      .sub-header__content {
        flex: unset;
        width: 100%;
      }
    }

    ${SubHeaderInteractive} {
      max-width: 595px;

      ${media_breakpoint_down('xxl')} {
        max-width: 540px;
      }

      ${media_breakpoint_exactly_down(1279)} {
        padding: 28px 32px;
        order: 2;
        max-width: 100%;
      }

      ${media_breakpoint_down('md')} {
        padding: 16px;
      }
    }

    &.sub-header--without-image {
      .sub-header__content {
        max-width: 1230px;
      }
    }
  }

  &.sub-header--subscription {
    ${SubHeaderInteractive} {
      max-width: 595px;

      ${media_breakpoint_down('xxl')} {
        max-width: 540px;
      }

      ${media_breakpoint_exactly_down(1279)} {
        max-width: 100%;
      }
    }

    &.sub-header--without-image {
      .sub-header__content {
        max-width: 1230px;
      }
    }
  }
`;

export const SubHeaderMenuList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const SubHeaderMenuLink = styled(Link)`
  color: ${globalColor.white};
  border-bottom: 1px dashed ${globalColor.blue.blue400};

  &:hover {
    color: ${globalColor.blue.skyBlue};
  }

  &:active {
    color: ${globalColor.blue.skyBlue};
  }

  &.active {
    color: ${globalColor.white};
    border-bottom: 1px solid ${globalColor.blue.blue200};
    pointer-events: none;
    font-weight: 600;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
  }
`;

export const SubHeaderSubscriptionHolder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  color: ${globalColor.white};

  button {
    max-width: 240px;
  }

  ${media_breakpoint_down('md')} {
    row-gap: 12px;
  }
`;

export const SubHeaderSubscriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  p {
    margin: 0;
  }
`;

export const SubHeaderSubscriptionTitle = styled.h2`
  margin: 0;
  font-size: ${rem(24)};
  line-height: 1.5;
  text-transform: uppercase;
  font-weight: 400;
  font-family: var(--font-lato);

  ${media_breakpoint_down('md')} {
    font-size: ${rem(16)};
  }
`;
