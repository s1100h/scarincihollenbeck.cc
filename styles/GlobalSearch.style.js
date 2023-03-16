import { Form } from 'react-bootstrap'
import { Hits } from 'react-instantsearch-dom'
import styled from 'styled-components'
import { globalColor } from './global_styles/Global.styles'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const SearchForm = styled(Form)`
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;

  .form-group {
    margin-bottom: 0;
    position: relative;

    & > svg {
      display: block;
      width: 20px;
      height: 20px;
      color: ${globalColor.gray.gray70};
      position: absolute;
      right: 23px;
      top: calc(50% - 0.5em);
      transform: translateY(-6%);
    }
  }

  ${media_breakpoint_down('md')} {
    width: 80vw;
    align-self: flex-end;
  }
`

export const SearchInput = styled(Form.Control)`
  height: 47px !important;
  border-radius: 0;
  background: #ebebeb;
  font-weight: 400;
  font-size: 16px;
  color: ${globalColor.gray.gray100};
  border: none;
`

export const HitsStyled = styled(Hits)`
  .ais-Hits-list {
    padding: 0;
    overflow-y: scroll;
    height: 565px;
  }
  .ais-Hits-item {
    border-bottom: 1px solid #dee2e6;
  }
`

export const ResultsContainer = styled.div`
  max-width: 725px;
  min-width: 320px;
  max-height: 670px;
  margin-top: 48px;
  padding-top: 20px;
  background-color: #fcfaff;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 99;

  ${media_breakpoint_down('xl')} {
    transform: translate(-23%);
    left: 30%;
  }

  ${media_breakpoint_down('lg')} {
    transform: translate(-12%);
    left: 20%;
  }

  ${media_breakpoint_down('md')} {
    transform: translate(-4%);
    left: 10%;
  }

  ${media_breakpoint_down('sm')} {
    width: 100%;
    left: 4%;
  }

  .ais-Pagination {
    padding: 0 10px;

    .ais-Pagination-list {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .ais-Pagination-item {
        display: flex;
        justify-content: center;

        .ais-Pagination-link {
          padding: 5px 10px;
          color: ${globalColor.black};
        }
      }
    }
  }

  .ais-SearchBox-form {
    display: inline-flex;
    flex-direction: row-reverse;
    border-radius: 5px;
  }

  .ais-SearchBox-input {
    border: 0;
  }

  .ais-SearchBox-submit {
    border: 0;
    background-color: #fff;
    border-right: 1px solid #a9a9a9;
  }

  .ais-SearchBox-reset {
    display: none;
  }
`
