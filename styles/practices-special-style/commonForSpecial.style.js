import styled from 'styled-components';
import { cannabisLawColors, globalColor, rem } from '../global_styles/Global.styles';
import empty from 'is-empty';

export const ArticleCommonBox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .article-common-title {
    font-size: ${({ titleFontSize }) => (!empty(titleFontSize) ? `${rem(titleFontSize)}` : '1.3rem')};
    font-weight: 600;
    margin-bottom: ${({ mbTitle }) => (!empty(mbTitle) ? `${mbTitle}px` : '48px')};
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: ${({ isColorWordsWhite }) => (!empty(isColorWordsWhite) ? `${globalColor.white}` : `${cannabisLawColors.cannabisColorDarkGray}`)};
  }

  p {
    font-family: var(--font-rajdhani), sans-serif;
    font-size: ${({ paragraphFontSize }) => (!empty(paragraphFontSize) ? `${rem(paragraphFontSize)}` : `${rem(20)}`)};
    font-weight: 500;
    color: ${({ isColorWordsWhite }) => (!empty(isColorWordsWhite) ? `${globalColor.white}` : `${cannabisLawColors.cannabisColorDarkGray}`)};
  }
`;
