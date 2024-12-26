import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const UploadContainer = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UploadRow = styled.div`
  position: relative;

  * {
    cursor: pointer;
  }

  .form-control {
    color: ${globalColor.blue.blue400} !important;

    &.kw-border-success {
      color: ${globalColor.blue.darkBlue} !important;
    }
  }

  input[disabled] {
    background-color: ${globalColor.gray.gray50};
  }
`;

export const UploadTitle = styled.div`
  font-size: inherit;
  font-weight: 600;

  span {
    font-size: ${rem(12)};
    font-weight: 400;
  }
`;

export const UploadIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 16px;
  transform: rotate(45deg);
  pointer-events: none;

  ${media_breakpoint_down('md')} {
    top: 8px;
  }
`;
