import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { WhyChooseUsSection } from './practices/WhyChooseUs.style';
import { globalColor } from './global_styles/Global.styles';
import { UnderlinedLink } from './common/Typography.style';

export const FirmOverviewWrapper = styled.section`
  background-color: ${globalColor.white};
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 60px 0;

  ${media_breakpoint_down('xxl')} {
    gap: 40px;
    padding: 40px 0;
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

  ${UnderlinedLink} {
    padding: 0;
    color: ${globalColor.blue.blue500};
    border-bottom: none;
    text-decoration: none;

    &:hover,
    &:focus,
    &:active {
      color: ${globalColor.blue.blue400};
    }
  }
`;
