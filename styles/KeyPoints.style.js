import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { Title20 } from './common/Typography.style';
import { ContentContainer } from './Content.style';
import { globalColor } from './global_styles/Global.styles';

export const FirmOverviewContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media_breakpoint_down('xxl')} {
    gap: 32px;
  }
`;

export const KeyPointsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  ${media_breakpoint_down('xxl')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  ${media_breakpoint_down('lg')} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const KeyPointsArticle = styled.article`
  ${Title20} {
    margin-bottom: 12px;

    ${media_breakpoint_down('xxl')} {
      margin-bottom: 8px;
    }
  }

  ${ContentContainer} {
    p:not(:last-child) {
      margin: 0 0 12px 0 !important;

      ${media_breakpoint_down('xxl')} {
        margin: 0 0 8px 0;
      }
    }

    a {
      color: ${globalColor.blue.blue500};
      font-weight: 600;
      text-decoration: none;

      &:hover,
      &:focus {
        color: ${globalColor.blue.blue400};
      }
    }
  }
`;
