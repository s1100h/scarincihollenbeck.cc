import styled from 'styled-components';
import {
  globalColor,
  successMessage,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { ContainerDefault } from './Containers.style';
import { Title32 } from './common/Typography.style';

export const CareersSection = styled.section`
  padding: 40px 0;
`;

export const CareersBlocks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CareersBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  ${Title32} {
    text-transform: capitalize;
  }

  ${media_breakpoint_down('md')} {
    row-gap: 16px;
  }
`;

export const CareersBlockHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  ${media_breakpoint_down('md')} {
    row-gap: 4px;
  }
`;

export const CareersBlockSubtitle = styled.p`
  margin: 0;
  color: ${globalColor.blue.darkBlue};
`;

export const CareersBlockCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  column-gap: 32px;
  row-gap: 24px;

  ${media_breakpoint_down('lg')} {
    gap: 24px;
  }

  ${media_breakpoint_down('md')} {
    gap: 16px;
  }
`;

export const CareersInfoSection = styled.section`
  padding-block: 60px;
  background-color: ${globalColor.gray.gray10};

  ${media_breakpoint_down('xxl')} {
    padding-block: 40px;
  }
`;

export const CareersInfoHolder = styled(ContainerDefault)`
  display: flex;
  gap: 60px;

  ${media_breakpoint_down('xxl')} {
    gap: 32px;
  }

  ${media_breakpoint_down('xl')} {
    flex-direction: column;
  }
`;

export const CareersInfoContent = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  ${Title32} {
    margin-bottom: 4px;
  }

  ${media_breakpoint_down('xxl')} {
    width: 39%;
  }

  ${media_breakpoint_down('xl')} {
    width: 100%;
  }
`;

export const CareerFormContainer = styled.div`
  padding: 20px 0;
  position: relative;

  .kw-alert-success {
    ${successMessage}
    :after {
      content: 'Thank you for applying! We have received your application for the job vacancy. Our team will review it and get back to you soon.';
    }
  }
`;