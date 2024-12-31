import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { WhyChooseUsSection } from './practices/WhyChooseUs.style';
import { globalColor } from './global_styles/Global.styles';
import { ArticleContent } from './Article.style';

export const FirmOverviewWrapper = styled(ArticleContent)`
  background-color: ${globalColor.white};
  display: flex;
  flex-direction: column;
  gap: 60px;

  ${media_breakpoint_down('xxl')} {
    gap: 40px;
  }

  ${WhyChooseUsSection} {
    padding: 0;
  }
`;

export const FirmOverviewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media_breakpoint_down('xxl')} {
    gap: 32px;
  }
`;

export const KeyPointsWrapper = styled.div`
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
