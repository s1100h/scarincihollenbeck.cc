import styled from 'styled-components';
import { media_breakpoint_down } from '../mediaBreakpoints.style';

export const FirmContentWrapper = styled.section`
  padding: 60px 0;

  ${media_breakpoint_down('xxl')} {
    padding: 40px 0;
  }

  ${media_breakpoint_down('md')} {
    padding: 24px 0;
  }
`;

export const FirmContentHolder = styled.div`
  display: flex;
  gap: 40px;

  ${media_breakpoint_down('xl')} {
    flex-direction: column;
  }

  ${media_breakpoint_down('md')} {
    gap: 32px;
  }
`;

export const FirmContentSections = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media_breakpoint_down('md')} {
    gap: 32px;
  }
`;

export const FirmContentSidebar = styled.div`
  width: 500px;

  ${media_breakpoint_down('xxl')} {
    width: 460px;
  }

  ${media_breakpoint_down('xl')} {
    width: 100%;
  }
`;
