import styled from 'styled-components';
import {
  entAndMediaColors,
  globalColor,
  rem,
} from '../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../mediaBreakpoints.style';
import { FullHDContainer } from './commonForSpecial.style';
import { BreadcrumbsListContainer } from 'styles/Breadcrumbs.style';
import Link from 'next/link';

export const SpecialSubHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 155px 0 50px;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;

  ${FullHDContainer} {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .breadcrumb-container {
    li {
      a,
      button {
        color: ${globalColor.grayExtraLite.grayExtraLite50};
        font-size: ${rem(14)};
        line-height: 21px;
        font-weight: 400;
      }

      span {
        color: ${globalColor.gray.gray40};
        font-size: ${rem(14)};
        line-height: 21px;
        font-weight: 400;
      }

      svg {
        color: ${globalColor.grayExtraLite.grayExtraLite50};
      }
    }
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  h1 {
    width: 400px;
    font-size: 12rem;
    font-weight: 300;
    line-height: 170px;
    color: ${globalColor.white};
  }

  ${BreadcrumbsListContainer} {
    position: relative;
    margin-bottom: 40px;

    li {
      a {
        transition: all 0.3s ease-out;
        &:hover {
          color: ${globalColor.white};
        }
      }

      &.active {
        > a,
        span {
          color: ${globalColor.white};
        }
      }
    }
  }

  ${media_breakpoint_down('xl')} {
    padding: 155px 0 50px;

    h1 {
      width: 350px;
      font-size: 10rem;
    }
  }

  ${media_breakpoint_down('lg')} {
    padding: 112px 0 50px;
    h1 {
      width: 300px;
      font-size: 8rem;
      line-height: 112px;
    }
  }

  ${media_breakpoint_down('md')} {
    padding: 95px 0 50px;
    h1 {
      font-size: 8rem;
    }
  }

  ${media_breakpoint_exactly_down(630)} {
    h1 {
      width: 220px;
      font-size: 6rem;
      line-height: 100px;
    }
  }

  ${media_breakpoint_down('sm')} {
    padding: 95px 0 50px;
    h1 {
      font-size: 5rem;
      line-height: 69px;
    }
  }

  ${media_breakpoint_exactly_down(396)} {
    h1 {
      font-size: 4rem;
      line-height: 56px;
    }
  }
`;

export const MiddleContainer = styled.div`
  margin-bottom: 55px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: relative;

  ${media_breakpoint_exactly_down(645)} {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;

    :last-child {
      align-items: start;
    }
  }
`;

export const SliderSubHeaderContainer = styled.section`
  padding: 113px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .breadcrumb-container {
    margin: 24px 0 100px;

    li {
      a,
      button {
        color: ${globalColor.grayExtraLite.grayExtraLite50};
        font-size: ${rem(14)};
        line-height: 21px;
        font-weight: 400;

        &:hover {
          color: ${globalColor.white};
        }
      }

      span {
        color: ${globalColor.gray.gray40};
        font-size: ${rem(14)};
        line-height: 21px;
        font-weight: 400;
      }

      svg {
        color: ${globalColor.grayExtraLite.grayExtraLite50};
      }
    }
  }

  ${media_breakpoint_down('xxl')} {
    padding: 99px 0;

    .breadcrumb-container {
      margin: 32px 0 48px;
    }
  }

  ${media_breakpoint_exactly_down(1439)} {
    padding: 99px 0;

    .breadcrumb-container {
      margin: 24px 0 32px;
    }
  }

  ${media_breakpoint_down('lg')} {
    padding: 62px 0;
  }

  ${media_breakpoint_down('md')} {
    .breadcrumb-container {
      margin: 16px 0 28px;
      padding: 0;
    }
  }
`;

export const SlideSubHeader = styled.div`
  flex: 1;
  display: flex;
  column-gap: 32px;

  ${media_breakpoint_exactly_down(1439)} {
    padding: 0;
    flex-direction: column;
  }

  .animation-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 100%
      );
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export const SlideSidebar = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media_breakpoint_exactly_down(1439)} {
    margin-bottom: 40px;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
  }

  ${media_breakpoint_down('md')} {
    margin-bottom: 32px;
  }
`;
export const SlideContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  ${media_breakpoint_exactly_down(1439)} {
    flex-direction: column;
    row-gap: 40px;
  }
`;
export const SlideBlock = styled.div`
  max-width: 1033px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SlideSmallTitle = styled.h5`
  margin: 0 0 24px 0;
  color: ${entAndMediaColors.entAndMediaColorGray};
  font-size: 1rem;
  font-family: var(--font-poppins);
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.6px;

  ${media_breakpoint_exactly_down(1439)} {
    font-size: ${rem(14)};
    line-height: 21px;
    letter-spacing: 1.4px;
  }
`;
export const SlideTitle = styled.h1`
  margin: 0;
  font-family: var(--font-carilo);
  color: ${globalColor.white};
  font-size: clamp(${rem(40)}, 7vw, ${rem(128)});
  font-weight: 400;
  line-height: clamp(60px, 7vw, 170px);

  &.slide__title-margin {
    margin-left: 9.3vw;
  }
`;
export const SlideSubTitle = styled.p`
  margin: 24px 0 48px 0;
  font-family: var(--font-poppins);
  color: ${globalColor.grayExtraLite.grayExtraLite50};
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 24px;

  ${media_breakpoint_exactly_down(1439)} {
    margin: 16px 0 40px 0;
    font-size: ${rem(14)};
    line-height: 21px;
  }
`;
export const SlideBtns = styled.div`
  display: flex;
  column-gap: 24px;
`;
export const SlideBtn = styled(Link)`
  cursor: pointer;
  border-radius: 40px;
  border: 2px solid ${globalColor.white};
  font-family: var(--font-poppins);
  font-size: ${rem(18)};
  font-weight: 600;
  line-height: 27px;
  padding: 16px 24px;
  color: ${globalColor.white};
  transition: all 0.5s ease;

  &:hover {
    color: ${globalColor.black};
    background-color: ${globalColor.white};
  }

  ${media_breakpoint_exactly_down(1439)} {
    padding: 12px 24px;
    font-size: ${rem(14)};
    line-height: 21px;
  }
`;
export const SlideNumbers = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: flex-end;
  column-gap: 10px;
  transform: translateY(60%);
  padding: 0 5%;

  ${media_breakpoint_exactly_down(1439)} {
    padding: 0;
    align-self: flex-end;
    transform: none;
  }
`;
export const SlideNumberActive = styled.span`
  font-family: var(--font-poppins);
  font-size: ${rem(96)};
  color: ${globalColor.white};
  font-weight: 400;
  line-height: 96px;

  ${media_breakpoint_exactly_down(1439)} {
    font-size: ${rem(40)};
    line-height: 40px;
  }
`;
export const SlideNumberCount = styled.span`
  color: ${entAndMediaColors.entAndMediaColorGray};
  font-family: var(--font-poppins);
  font-size: ${rem(32)};
  font-weight: 400;
  line-height: 48px;

  ${media_breakpoint_exactly_down(1439)} {
    font-size: ${rem(16)};
    line-height: 24px;
  }
`;
export const SliderPagination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media_breakpoint_exactly_down(1439)} {
    flex-direction: row;
  }
`;
export const SliderPaginationArrowUp = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: url('${({ arrowUp }) => arrowUp}') no-repeat center / cover;

  &.disabled {
    background: url('${({ arrowUpDisabled }) => arrowUpDisabled}') no-repeat
      center / cover;
  }

  ${media_breakpoint_exactly_down(1439)} {
    width: 40px;
    height: 40px;
    transform: rotate(-90deg);
  }
`;
export const SliderPaginationDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 64px;

  ${media_breakpoint_exactly_down(1439)} {
    flex-direction: row;
    column-gap: 60px;
  }
`;
export const SliderPaginationDote = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${entAndMediaColors.entAndMediaColorGray};

  &.active {
    background: ${globalColor.grayExtraLite.grayExtraLite50};
  }

  ${media_breakpoint_exactly_down(1439)} {
    width: 12px;
    height: 12px;
  }
`;
export const SliderPaginationArrowDown = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: url('${({ arrowDown }) => arrowDown}') no-repeat center / cover;

  &.disabled {
    background: url('${({ arrowDownDisabled }) => arrowDownDisabled}') no-repeat
      center / cover;
  }

  ${media_breakpoint_exactly_down(1439)} {
    width: 40px;
    height: 40px;
    transform: rotate(-90deg);
  }
`;

export const SlideDarkText = styled.div`
  color: ${entAndMediaColors.entAndMediaColorGray};
  font-size: ${rem(16)};
  font-family: var(--font-poppins);
  font-weight: 400;
  line-height: 24px;

  ${media_breakpoint_exactly_down(1439)} {
    font-size: ${rem(14)};
    line-height: 21px;
  }

  &.slide__company {
    ${media_breakpoint_exactly_down(1439)} {
      max-width: 140px;
    }
  }

  &.slide__date {
  }
`;

export const AnimateTitleWrapper = styled.div`
  position: relative;
  ${({ titleHeight }) => `height: ${titleHeight}px`};
`;
