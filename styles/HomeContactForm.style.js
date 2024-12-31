import styled from 'styled-components';
import {
  globalBorderRadius,
  globalColor,
  rem,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const ContactFormWrapper = styled.section`
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: ${globalColor.blue.darkBlue};
    z-index: -1;
  }
`;

export const ContactFormHolder = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  padding: 32px 80px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-radius: ${globalBorderRadius.big};
  background-color: ${globalColor.gray.gray1002};
  box-shadow: 0px 2px 16px 0px rgba(10, 62, 108, 0.08);
  position: relative;
  overflow: hidden;

  .kwes-form,
  .kwes-form-init {
    textarea.form-control {
      height: 64px;

      ${media_breakpoint_down('sm')} {
        height: 56px;
      }
    }

    .form-disclaimer {
      margin-bottom: 4px;
      max-width: 800px;

      ${media_breakpoint_down('sm')} {
        margin: 0;
      }
    }

    .form-checkboxes,
    .form-button {
      width: calc(50% - 6px);
    }

    .form-fields {
      --form-fields-gap: 20px;

      ${media_breakpoint_down('md')} {
        --form-fields-gap: 16px;
      }
    }

    .form-checkboxes {
      height: 100%;
      align-self: center;
      display: flex;
      position: relative;

      + .kw-field-error-message {
        order: 1;

        ${media_breakpoint_down('sm')} {
          order: unset;
        }
      }

      ${media_breakpoint_down('sm')} {
        width: 100%;
      }
    }

    .form-button {
      margin: 0 !important;

      ${media_breakpoint_down('sm')} {
        width: 100%;
      }
    }
  }

  ${media_breakpoint_down('lg')} {
    padding: 20px 32px;
  }

  ${media_breakpoint_down('sm')} {
    padding: 12px;
    row-gap: 8px;
  }
`;
