import styled from "styled-components";
import { globalColor, rem } from "./global_styles/Global.styles";

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

export const ContactFormTitle = styled.h2`
  margin: 0;
  color: ${globalColor.blue.darkBlue};
  font-size: ${rem(32)};
  line-height: 1.38;
  font-weight: 600;
`;

export const ContactFormHolder = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  padding: 32px 80px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-radius: 16px;
  background-color: ${globalColor.gray.gray1002};
  box-shadow: 0px 2px 16px 0px rgba(10, 62, 108, 0.08);

  .kwes-form {
    column-gap: 16px;

    .input-group--0,
    .input-group--1,
    .input-group--2,
    .input-group--3 {
      width: calc(50% - 8px);
    }

    .form-control, .form-control::placeholder {
      font-size: 1rem;
      line-height: 1.5;
    }

    .form-control {
      border-color: ${globalColor.gray.gray300};
    }

    textarea.form-control {
      height: 64px;
    }

    > p {
      max-width: 800px;
      color: ${globalColor.gray.gray110};
    }

    > fieldset {
      height: 100%;
      align-self: center;
      margin: 0!important;
      width: calc(50% - 8px);
      display: flex;
      position: relative;

      + .kw-field-error-message {
        order: 1;
      }
    }

    > button {
      margin: 0!important;
      width: calc(50% - 8px);
    }
  }
`;
