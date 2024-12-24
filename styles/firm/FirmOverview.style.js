import styled from 'styled-components';
import { media_breakpoint_down } from '../mediaBreakpoints.style';
import { WhyChooseUsSection } from 'styles/practices/WhyChooseUs.style';
import { globalColor } from 'styles/global_styles/Global.styles';
import { LogoSeparatorWrapper } from 'styles/Separators.style';

export const FirmOverviewlWrapper = styled.div`
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

  ${LogoSeparatorWrapper} {
    &.separator-big {
      margin: 40px 0;

      ${media_breakpoint_down('xxl')} {
        margin: 32px 0;
      }
    }
  }
`;
