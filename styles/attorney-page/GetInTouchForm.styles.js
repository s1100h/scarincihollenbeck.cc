import styled from 'styled-components'
import { globalColor } from 'styles/global_styles/Global.styles'

export const FormContainer = styled.div`
  .kwes-form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .form-control {
      border-radius: 0;
    }

    p {
      font-size: 14px;
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
