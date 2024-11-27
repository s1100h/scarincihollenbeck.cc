import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { ChildrenBox } from './ModalWindow.style';
import {
  cannabisLawColors,
  globalBorderRadius,
  globalColor,
  globalTransition,
  rem,
} from './global_styles/Global.styles';

export const ContactModalBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-left: 1px;
  height: content-box;

  ${media_breakpoint_down('sm')} {
    width: 100%;
  }
`;

export const ContactModalHeader = styled.div``;

export const ContactModalTitle = styled.p`
  margin: 0;
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: 500;
`;

export const ContactModalWrapper = styled.div`
  &.no-transition {
    .kwes-form,
    .kwes-form-init {
      > button {
        transition: none !important;
      }

      > fieldset {
        > label {
          transition: none !important;
        }
      }

      .form-control {
        transition: none !important;
      }
    }
  }

  &.blue-modal {
    .modal-open {
      max-width: 720px;
      width: 100%;
      padding: 0;
      border-radius: ${globalBorderRadius.middle};
      background-color: ${globalColor.blue.blue6002};
      transition: all 0.8s, background-color 0s;

      .modal-closer {
        position: absolute;
        top: 20px;
        right: 40px;
        color: ${globalColor.white};

        ${media_breakpoint_down('sm')} {
          right: 16px;
          top: 16px;
        }
      }

      ${ChildrenBox} {
        padding: 0;
        margin: 0;
      }
    }

    .kwes-form,
    .kwes-form-init {
      column-gap: 16px;

      .input-group--0,
      .input-group--1,
      .input-group--2,
      .input-group--3 {
        width: calc(50% - 8px);

        ${media_breakpoint_down('sm')} {
          width: 100%;
        }
      }

      .form-control,
      .form-control::placeholder {
        font-size: 1rem;
        line-height: 1.5;

        ${media_breakpoint_down('sm')} {
          font-size: 0.875rem;
        }
      }

      .form-control {
        background-color: transparent;
        border-color: ${globalColor.gray.gray500};
        color: ${globalColor.white};

        &:hover,
        &:focus {
          background-color: ${globalColor.blue.blue550};
        }
      }

      textarea.form-control {
        height: 64px;

        ${media_breakpoint_down('sm')} {
          height: 56px;
        }
      }

      > p {
        margin-bottom: 24px !important;
        color: ${globalColor.gray.gray300};
      }

      > fieldset {
        order: 2;
        height: 100%;
        align-self: center;
        margin: 0 0 0 -40px !important;
        width: calc(50% + 32px);
        position: relative;

        > label {
          height: 100%;
          width: 100%;
          padding: 16px 16px 16px 40px;
          display: flex;
          justify-content: center;
          background-color: ${globalColor.blue.blue550};
          border-top: 1px solid transparent;
          transition: ${globalTransition.default};
          cursor: pointer;

          &:hover {
            border-top-color: ${globalColor.blue.skyBlue};
            background-color: ${globalColor.blue.blue6002};
            color: ${globalColor.blue.skyBlue};
          }

          ${media_breakpoint_down('sm')} {
            padding: 16px;
          }
        }

        span {
          font-size: ${rem(14)};
          color: ${globalColor.gray.gray300};
        }

        + .kw-field-error-message {
          width: 100%;
          order: 1;
        }

        &:hover {
          + button {
            &::before {
              content: none;
            }
          }
        }

        ${media_breakpoint_down('sm')} {
          margin: 0 0 0 -16px !important;
          width: calc(50% + 8px);
        }
      }

      > button {
        order: 3;
        padding: 16px 40px 16px;
        margin: 0 -40px 0 -16px !important;
        width: calc(50% + 48px);
        background-color: ${globalColor.blue.blue550};
        border-radius: 0;
        border-top: 1px solid transparent;
        transition: ${globalTransition.default};

        &::after {
          content: none;
        }

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 16px;
          width: 1px;
          height: calc(100% - 32px);
          background-color: ${globalColor.gray.gray110};
        }

        &:hover {
          border-top-color: ${globalColor.blue.skyBlue};
          background-color: ${globalColor.blue.blue6002};
          color: ${globalColor.blue.skyBlue};

          &::before {
            content: none;
          }
        }

        ${media_breakpoint_down('sm')} {
          padding: 16px;
          margin: 0 -16px 0 -16px !important;
          width: calc(50% + 24px);
        }
      }
    }

    ${ContactModalBox} {
      width: 100%;
      flex: 1;
      padding: 16px 40px 0;
      row-gap: 12px;
      overflow: auto;
      border-bottom: 1px solid ${globalColor.blue.blue550};

      ${media_breakpoint_down('sm')} {
        padding: 12px 16px 0;
      }
    }

    ${ContactModalHeader} {
      min-height: 60px;
      padding-right: 44px;
      padding-bottom: 12px;
      flex: 1;
      display: flex;
      align-items: center;
      column-gap: 12px;

      ${media_breakpoint_down('sm')} {
        padding-right: 40px;
      }
    }

    ${ContactModalTitle} {
      color: ${globalColor.white};
      font-size: 1rem;
      line-height: 1.5;
      font-weight: 600;

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(14)};
      }
    }
  }

  &.cannabis-modal {
    .modal-open {
      max-width: 600px;
      background-color: ${cannabisLawColors.cannabisColorGray};
    }

    ${ContactModalBox} {
      width: 100%;

      button {
        padding: 14px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${cannabisLawColors.cannabisColorDarkGray};
        border: 2px solid ${cannabisLawColors.cannabisColorDarkGray};
        color: ${globalColor.white};
        border-radius: 40px;
        font-size: ${rem(18)};
        line-height: 27px;
        font-weight: 600;
        font-family: var(--font-poppins), sans-serif;
        transition: all 0.3s ease;

        :hover {
          color: ${cannabisLawColors.cannabisColorDarkGray};
          background-color: transparent;

          &::after {
            display: none;
          }
        }

        ${media_breakpoint_down('xxl')} {
          padding: 10px 24px;
          font-size: ${rem(16)};
          line-height: 24px;
        }
      }
    }
  }
`;

export const SubscriptionModalWrapper = styled.div`
  &.cannabis-modal {
    .modal-open {
      background-color: ${cannabisLawColors.cannabisColorGray};

      .form-control {
        ::placeholder {
          color: ${globalColor.gray.gray40};
        }
      }

      .btn-link {
        color: ${cannabisLawColors.cannabisColorDarkGray};
      }

      .disclaimer-input {
        &:checked {
          & + span.disclaimer-checkbox {
            background-color: ${cannabisLawColors.cannabisTransparentBlack};
          }
        }
      }

      #field-error-category {
        margin-bottom: 10px;
      }

      .btn-primary {
        padding: 14px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${cannabisLawColors.cannabisColorDarkGray};
        border: 2px solid ${cannabisLawColors.cannabisColorDarkGray};
        color: ${globalColor.white};
        border-radius: 40px;
        font-size: ${rem(18)};
        line-height: 27px;
        font-weight: 600;
        font-family: var(--font-poppins), sans-serif;
        transition: all 0.3s ease;

        :hover {
          color: ${cannabisLawColors.cannabisColorDarkGray};
          background-color: transparent;

          :after {
            opacity: 0;
          }
        }

        ${media_breakpoint_down('xxl')} {
          padding: 10px 24px;
          font-size: ${rem(16)};
          line-height: 24px;
        }
      }
    }
  }
`;
