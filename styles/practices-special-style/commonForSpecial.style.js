import styled from 'styled-components';
import {
  cannabisLawColors,
  globalColor,
  rem,
} from '../global_styles/Global.styles';
import empty from 'is-empty';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../mediaBreakpoints.style';

export const ArticleCommonBox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .article-common-title {
    font-size: ${({ titleFontSize }) =>
      !empty(titleFontSize) ? `${rem(titleFontSize)}` : `${rem(20.8)}`};
    font-weight: 600;
    margin-bottom: ${({ mbTitle }) =>
      !empty(mbTitle) ? `${mbTitle}px` : '48px'};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: ${({ isColorWordsWhite }) =>
      !empty(isColorWordsWhite)
        ? `${globalColor.white}`
        : `${cannabisLawColors.cannabisColorDarkGray}`};
  }

  p {
    text-transform: uppercase;
    font-family: var(--font-rajdhani), sans-serif;
    font-size: ${({ paragraphFontSize }) =>
      !empty(paragraphFontSize) ? `${rem(paragraphFontSize)}` : `${rem(20)}`};
    font-weight: 500;
    color: ${({ isColorWordsWhite }) =>
      !empty(isColorWordsWhite)
        ? `${globalColor.white}`
        : `${cannabisLawColors.cannabisColorDarkGray}`};
  }
`;

export const FullHDContainer = styled.div`
  width: 1920px;
  max-width: 100%;
  padding: 0 135px;
  margin: 0 auto;

  ${media_breakpoint_down('xxl')} {
    padding: 0 84px;
  }

  ${media_breakpoint_down('xl')} {
    padding: 0 32px;
  }

  ${media_breakpoint_down('md')} {
    padding: 0 16px;
  }
`;

export const ContainerContent = styled.div`
  width: 1920px;
  max-width: 100%;
  padding: 0 135px;
  margin: 0 auto;

  &.practice-container {
    padding: 0 132px;
  }

  ${media_breakpoint_exactly_down(1850)} {
    padding: 0 84px;

    &.practice-container {
      padding: 0 120px;
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
    padding: 0 32px;

    &.practice-container {
      padding: 0 32px;
    }
  }

  ${media_breakpoint_down('md')} {
    padding: 0 16px;

    &.practice-container {
      padding: 0 12px;
    }
  }
`;
