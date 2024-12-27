import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { WhyChooseUsSection } from './practices/WhyChooseUs.style';
import { globalColor } from './global_styles/Global.styles';

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
