import { Form } from 'react-bootstrap';
import { Hits } from 'react-instantsearch-dom';
import styled from 'styled-components';
import { globalColor } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const SearchForm = styled(Form)`
  width: 100%;

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
      z-index: 101;
    }
  }

  ${media_breakpoint_down('md')} {
    width: -webkit-fill-available;
    align-self: flex-end;
  }
`;

export const SearchInput = styled(Form.Control)`
  padding-right: 50px;
  height: 40px !important;
  border-radius: 2px;
  background: #ebebeb;
  font-weight: 400;
  font-size: 16px;
  color: ${globalColor.gray.gray100};
  border: none;
  text-transform: capitalize;
`;

export const HitsStyled = styled(Hits)`
  .ais-Hits-list {
    margin-bottom: 0;
    padding: 0;
    overflow-y: auto;
    max-height: 50vh;
  }
  .ais-Hits-item {
    border-bottom: 1px solid #dee2e6;
  }
`;

export const ResultsContainer = styled.div`
  width: -webkit-fill-available;
  margin-top: 48px;
  padding-top: 20px;
  background-color: #fcfaff;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  position: absolute;
  z-index: 99;

  .ais-Pagination {
    padding: 0 10px;

    .ais-Pagination-list {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      &:has(.ais-Pagination-item--previousPage.ais-Pagination-item--disabled):has(.ais-Pagination-item--nextPage.ais-Pagination-item--disabled) {
        display: none;
      }

      .ais-Pagination-item {
        display: flex;
        justify-content: center;

        .ais-Pagination-link {
          padding: 5px 10px;
          color: ${globalColor.black};

          &.ais-Pagination-link--selected {
            color: #162153;
            font-weight: 700;
          }
        }
      }
    }

    .ais-Pagination-item--previousPage {
      align-self: flex-start;
    }

    .ais-Pagination-item--page {
      flex: 1;
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
`;

export const ResultBox = styled.div``;
