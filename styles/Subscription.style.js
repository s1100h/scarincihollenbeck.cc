import styled from 'styled-components';
import {
  ButtonLinkCss,
  buttonsHoverActive,
  globalColor,
  rem,
  successMessage,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const CheckBoxesList = styled.ul`
  margin: 8px 0 16px 0;
  column-count: 3;

  li {
    margin-bottom: 16px;
    break-inside: avoid;

    span.checkbox-label {
      font-size: 1rem;
    }
  }

  ${media_breakpoint_down('md')} {
    column-count: 2;

    li {
      span.checkbox-label {
        font-size: 0.8rem;
      }
    }
  }
`;

export const GradientSubscriptionBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .subscription-title {
    font-weight: bold;
    font-size: ${rem(28)};
    text-align: start;
  }

  ${media_breakpoint_down('lg')} {
    span {
      display: flex;
    }
  }
`;

export const FormSubscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 816px;
  min-width: 320px;

  section {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    > p {
      margin-bottom: 0;
      margin-left: 10px;
      font-size: ${rem(22)};
      font-weight: 400;
      width: 48%;
    }
  }
  #field-error-category {
    width: 100%;
    position: static;
    margin-bottom: 10px;
  }

  .checkboxes-box {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 12px;
  }
  .btn-choose-box {
    display: flex;
    justify-content: space-between;
  }
  .btn-link {
    color: ${globalColor.blue.dirtyBlue};
    text-transform: uppercase;
    font-weight: 700;
    padding-left: 0;
  }

  .kw-alert-success {
    ${successMessage}
    &:after {
      content: 'Thank you for subscribing! You are now part of our newsletter.';
    }
  }
  .btn-primary {
    margin-left: auto;
    margin-right: auto;
    width: 47.5%;
  }

  ${media_breakpoint_down('md')} {
    .modal-subscription-logo {
      width: 72px;
      height: 72px;
    }
  }

  ${media_breakpoint_down('sm')} {
    .modal-subscription-logo {
      width: 52px;
      height: 52px;
    }
    .kwes-form, .kwes-form-init {
      .input-group {
        width: 100%;
      }
    }
    section {
      h4 {
        width: 61%;
        font-size: 1rem;
      }
    }

    .btn-primary {
      width: 100%;
    }
  }
`;

export const SubscribeBtn = styled.button`
  ${ButtonLinkCss};
  width: 100%;
  height: 55px;

  ${buttonsHoverActive};

  ${media_breakpoint_down('lg')} {
    width: 50%;

    span {
      display: flex;
    }
  }
`;
