import styled, { keyframes } from 'styled-components';

export const SpecialSubHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 155px 10% 0;
  height: 100vh;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat;
  background-size: cover;
  position: relative;
  align-items: center;
  overflow: hidden;

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  h1 {
    width: 44%;
    position: absolute;
    top: 63%;
    font-size: 12rem;
    font-weight: 300;
    line-height: 170px;
    color: ${globalColor.white};
  }

  ul {
    position: relative;
    margin-bottom: 40px;

    > :last-child {
      span {
        color: ${globalColor.white};
      }
    }
  }

  ${media_breakpoint_down('xl')} {
    padding: 155px 2% 0;

    h1 {
      font-size: 10rem;
      bottom: -32px;
    }
  }

  ${media_breakpoint_down('lg')} {
    h1 {
      font-size: 8rem;
      bottom: -38px;
      line-height: 112px;
    }
  }

  ${media_breakpoint_down('md')} {
    h1 {
      font-size: 8rem;
    }
  }

  ${media_breakpoint_exactly_down(630)} {
    h1 {
      font-size: 6rem;
      bottom: -44px;
      line-height: 100px;
    }
  }

  ${media_breakpoint_down('sm')} {
    h1 {
      top: 70%;
      font-size: 5rem;
      bottom: -20px;
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
import { entAndMediaColors, globalColor, rem } from '../global_styles/Global.styles';

import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../mediaBreakpoints.style';

export const MiddleContainer = styled.div`
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
  padding: 137px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat center / cover;
  position: relative;

  @media (max-width: 1440px) {
    padding: 114px 0 80px 0;
  }

  @media (max-width: 768px) {
    padding: 114px 0 40px 0;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${globalColor.black};

  
`;

export const SlideSubHeader = styled.div`
  padding-top: ${rem(40)};
  flex: 1;
  display: flex;
  column-gap: ${rem(32)};

  @media (max-width: 1440px) {
    padding-top: ${rem(12)};
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
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%);
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
export const SlideSidebar = styled.div`
  width: ${rem(119)};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 1440px) {
    margin-bottom: ${rem(40)};
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    margin-bottom: ${rem(32)};
  }
`;
export const SlideContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1440px) {
    flex-direction: column;
    row-gap: ${rem(40)};
  }
`;
export const SlideBlock = styled.div`
  max-width: ${rem(1033)};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

`;
export const SlideSmallTitle = styled.h5`
  margin: 0 0 ${rem(28)} 0;
  color: ${entAndMediaColors.entAndMediaColorGray};
  font-size: ${rem(16)};
  font-family: var(--font-poppins);
  font-weight: 400;
  line-height: ${rem(24)};
  letter-spacing: ${rem(1.6)};

  @media (max-width: 1440px) {
    margin: 0 0 ${rem(22)} 0;
    font-size: ${rem(14)};
    line-height: ${rem(21)};
    letter-spacing: ${rem(1.4)};
  }
`;
export const SlideTitle = styled.h1`
  margin: 0;
  font-family: var(--font-poppins);
  color: ${globalColor.white};
  font-size: clamp(${rem(40)}, 7vw, ${rem(128)});
  font-weight: 400;
  line-height: clamp(${rem(60)}, 7vw, ${rem(170)});
  text-transform: uppercase;

  &.slide__title-margin {
    margin-left: 9.3vw;
  }
`;
export const SlideSubTitle = styled.p`
  margin: ${rem(28)} 0 ${rem(32)} 0;
  font-family: var(--font-poppins);
  color: ${globalColor.grayExtraLite.grayExtraLite50};
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: ${rem(24)};

  @media (max-width: 1440px) {
    margin: ${rem(16)} 0 ${rem(40)} 0;
    font-size: ${rem(14)};
    line-height: ${rem(21)};
  }
`;
export const SlideBtns = styled.div`
  display: flex;
  column-gap: ${rem(24)};
`;
export const SlideBtn = styled.a`
  cursor: pointer;
  border-radius: ${rem(40)};
  border: ${rem(2)} solid ${globalColor.white};
  font-family: var(--font-poppins);
  font-size: ${rem(18)};
  font-weight: 600;
  line-height: ${rem(27)};
  padding: ${rem(16)} ${rem(24)};
  color: ${globalColor.white};
  transition: all 0.5s ease;

  &:hover {
    color: ${globalColor.black};
    background-color: ${globalColor.white};
  }

  @media (max-width: 1440px) {
    padding: ${rem(12)} ${rem(24)};
    font-size: ${rem(14)};
    line-height: ${rem(21)};
  }
`;
export const SlideNumbers = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: flex-end;
  column-gap: ${rem(10)};
  transform: translateY(60%);
  padding: 0 5%;

  @media (max-width: 1440px) {
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
  line-height: ${rem(96)};

  @media (max-width: 1440px) {
    font-size: ${rem(40)};
    line-height: ${rem(40)};
  }
`;
export const SlideNumberCount = styled.span`
  color: ${entAndMediaColors.entAndMediaColorGray};
  font-family: var(--font-poppins);
  font-size: ${rem(32)};
  font-weight: 400;
  line-height: ${rem(48)};

  @media (max-width: 1440px) {
    font-size: ${rem(16)};
    line-height: ${rem(24)};
  }
`;
export const SliderPagination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1440px) {
    flex-direction: row;
  }
`;
export const SliderPaginationArrowUp = styled.div`
  width: ${rem(48)};
  height: ${rem(48)};
  cursor: pointer;
  background: url('${({ arrowUp }) => arrowUp}') no-repeat center / cover;

  &.disabled {
    background: url('${({ arrowUpDisabled }) => arrowUpDisabled}') no-repeat center / cover;
  }

  @media (max-width: 1440px) {
    width: ${rem(40)};
    height: ${rem(40)};
    transform: rotate(-90deg);
  }
`;
export const SliderPaginationDots = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: ${rem(64)};

  @media (max-width: 1440px) {
    flex-direction: row;
    column-gap: ${rem(60)};
  }
`;
export const SliderPaginationDote = styled.div`
  width: ${rem(15)};
  height: ${rem(15)};
  border-radius: 50%;
  border: ${rem(1)} solid ${entAndMediaColors.entAndMediaColorGray};

  &.active {
    background: ${globalColor.grayExtraLite.grayExtraLite50};
  }
  
  @media (max-width: 1440px) {
    width: ${rem(12)};
    height: ${rem(12)};
  }
`;
export const SliderPaginationArrowDown = styled.div`
  width: ${rem(48)};
  height: ${rem(48)};
  cursor: pointer;
  background: url('${({ arrowDown }) => arrowDown}') no-repeat center / cover;

  &.disabled {
    background: url('${({ arrowDownDisabled }) => arrowDownDisabled}') no-repeat center / cover;
  }

  @media (max-width: 1440px) {
    width: ${rem(40)};
    height: ${rem(40)};
    transform: rotate(-90deg);
  }
`;

export const SlideDarkText = styled.div`
  color: ${entAndMediaColors.entAndMediaColorGray};
  font-size: ${rem(16)};
  font-family: var(--font-poppins);
  font-weight: 400;
  line-height: ${rem(24)};

  @media (max-width: 1440px) {
      font-size: ${rem(14)};
      line-height: ${rem(21)};
    }

  &.slide__company {
    transform: translateY(calc(100% + ${rem(40)}));

    @media (max-width: 1440px) {
      transform: none;
      max-width: ${rem(119)};
    }
  }

  &.slide__date {
    display: none;
    
    @media (max-width: 1440px) {
      display: block;
    }
  }
`;

export const AnimateTitleWrapper = styled.div`
  position: relative;
  ${({ titleHeight }) => `height: ${titleHeight}px`};
`;