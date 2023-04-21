import { InputGroup, Form } from 'react-bootstrap'
import styled from 'styled-components'
import { globalColor, rem } from 'styles/global_styles/Global.styles'

export const FormContainer = styled.div`
  margin-bottom: 20px;
  .kwes-form {
    display: flex;
    flex-direction: column;
    gap: 23px;

    .form-control {
      border-radius: 0;
      height: 48px;
      padding: 18px 12px 12px;
    }

    .kw-alert-error,
    .kw-alert-warning {
      margin-bottom: 0;
    }

    textarea.form-control {
      height: 160px;
    }

    p {
      font-size: ${rem(14)};
      color: ${globalColor.grayExtraLite.grayExtraLite100};
    }

    label {
      display: flex;
      align-items: center;

      .disclaimer-checkbox {
        display: flex;
        justify-content: center;
        width: 23px;
        height: 23px;
        margin-right: 10px;
        border-radius: 0;
        border: 1px solid ${globalColor.grayExtraLite.grayExtraLite100};
      }

      .disclaimer-input {
        appearance: none;
        border: none;

        &:checked {
          & + .disclaimer-checkbox {
            background-color: ${globalColor.graySmoke.smoke};
            &::before {
              content: '✔';
            }
          }
        }
      }

      span {
        color: ${globalColor.gray.gray80};
      }
    }
  }
`

export const InputGroupStyled = styled(InputGroup)`
  .kw-field-error-message {
    position: absolute;
    top: -18px;
  }
`

export const FormLabelStyled = styled(Form.Label)`
  position: absolute;
  left: 12px;
  z-index: 5;
  color: ${globalColor.grayExtraLite.grayExtraLite80};
`
