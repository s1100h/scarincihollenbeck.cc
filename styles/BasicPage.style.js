import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { ContentWrapper } from './Content.style';
import { ArticleContent } from './Article.style';

export const BasicPageContentHolder = styled(ArticleContent)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  ${media_breakpoint_down('xxl')} {
    gap: 40px 32px;
  }

  ${media_breakpoint_down('lg')} {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }

  ${ContentWrapper} {
    &:has(img) {
      grid-column: -1 / 1;
    }
  }
`;
