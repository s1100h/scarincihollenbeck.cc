import styled from 'styled-components';
import {
  globalBorderRadius,
  globalColor,
  globalTransition,
  rem,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { ChildrenBox } from './ModalWindow.style';
import {
  PracticeCardContent,
  PracticeCardFooterItem,
  PracticeCardHeader,
  PracticeCardWrapper,
} from './PracticeCard.style';

export const PracticesTabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const PracticesTabsOpeners = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  ${media_breakpoint_down('md')} {
    gap: 16px;
  }
`;

export const PracticesTabsOpener = styled.button`
  padding: 7px 15px;
  border: 1px solid ${globalColor.gray.gray110};
  border-radius: 4px;
  background-color: transparent;
  color: ${globalColor.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  transition: ${globalTransition.default};

  &:hover {
    border-color: ${globalColor.blue.blue400};
    background-color: ${globalColor.blue.blue6002};
  }

  &.active {
    border-color: ${globalColor.blue.blue400};
    background-color: ${globalColor.blue.blue6002};
    font-weight: 600;
  }

  ${media_breakpoint_down('sm')} {
    padding: 7px 11px;
    font-size: ${rem(14)};
    font-weight: 400;
  }
`;

export const PracticesTabsCards = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  ${media_breakpoint_down('xl')} {
    gap: 24px;
  }

  > div {
    width: calc((100% - 80px) / 3);

    ${media_breakpoint_down('xl')} {
      width: calc((100% - 24px) / 2);
    }

    ${media_breakpoint_down('md')} {
      width: 100%;
    }
  }
`;

export const PracticesTabsModalWrapper = styled.div`
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

    ${PracticeCardWrapper} {
      max-height: 100%;
      gap: 0;
    }

    ${PracticeCardContent} {
      overflow: auto;
      padding: 16px 40px 24px;
      row-gap: 12px;

      &.contact-form-container {
        padding-bottom: 0;
      }

      ${media_breakpoint_down('sm')} {
        padding: 12px 16px 16px;
      }
    }

    ${PracticeCardHeader} {
      min-height: 60px;
      padding-right: 44px;
      padding-bottom: 12px;
      border-bottom: 1px solid ${globalColor.blue.blue550};

      ${media_breakpoint_down('sm')} {
        padding-right: 40px;
      }
    }

    ${PracticeCardFooterItem} {
      .footer-action {
        justify-content: center;
      }
    }
  }

  .kwes-form {
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
`;
