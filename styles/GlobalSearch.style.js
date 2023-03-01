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
  }
  .ais-Hits-item {
    border-bottom: 1px solid #dee2e6;
  }
`

export const ResultsContainer = styled.div`
  width: fit-content;
  padding: 20px 30px;
  max-height: 600px;
  margin-top: 48px;
  background-color: #fcfaff;
  overflow: hidden;
  overflow-y: scroll;
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

  .ais-Pagination-list {
    list-style-type: none;
    margin-left: -2em;
    margin-top: 11px;
    display: flex;
    justify-content: space-between;
  }

  .ais-Pagination-item {
    margin-right: 10px;
    font-size: 16px;
  }

  .ais-Pagination-link {
    color: ${globalColor.black};
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
