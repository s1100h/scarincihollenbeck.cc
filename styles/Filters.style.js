import { Button, Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import styled from 'styled-components';
import { globalColor, globalShadow } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const DropDownItemSelector = styled(Dropdown.Item)`
  margin-top: 5px;
  font-weight: 600;
`;

export const DropdownSelectorBtn = styled(DropdownButton)`
  .show {
    display: ${({ props }) => (props?.bigMenu ? 'flex' : 'block')};
    background-color: ${globalColor.blue.darkBlue};
    height: ${({ props }) => (props?.bigMenu ? '600px' : 'auto')};

    ${({ props }) =>
      props?.bigMenu
        ? `
      min-width: 60vw;
      
      ${media_breakpoint_down('xl')} {
         min-width: 80vw;
       }
       
       ${media_breakpoint_down('lg')} {
         min-width: 87vw;
         
         .active {
            &::after {
              content: '';
              position: absolute;
              right: -12px;
              top: 50%;
              transform: translateY(-50%);
              width: 12px;
              height: 20px;
              background-color: ${globalColor.white};
              clip-path: polygon(100% 50%, 0 0, 0% 100%);
              opacity: 1;
            }
         }
       }
       
       ${media_breakpoint_down('md')} {
          min-width: 100%;
       }
      `
        : ''};

    .mobile-filter {
      width: 100%;
      margin-bottom: 5px;
      background-color: ${globalColor.blue.darkUltramarine};

      .accordion-item {
        background-color: ${globalColor.blue.darkUltramarine};
        border: none;
      }
      .collapsed {
        :after {
          background-image: var(--bs-accordion-btn-active-icon);
        }
      }
      .show {
        height: auto;

        .accordion-body {
          width: 100%;
        }
      }
      .accordion-button {
        background-color: ${globalColor.blue.darkUltramarine};
        border-radius: 0;
        width: 100%;

        //:after {
        //  display: none;
        //}

        :focus {
          border: none;
          box-shadow: none;
        }
      }
    }

    .dropdown-item {
      color: ${globalColor.white};

      :hover {
        background-color: ${globalColor.blue.darkUltramarine};
      }
    }

    .active {
      :hover {
        &::after {
          content: '';
          position: absolute;
          right: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 20px;
          background-color: ${globalColor.blue.darkUltramarine};
          clip-path: polygon(100% 50%, 0 0, 0% 100%);
          opacity: 1;
        }
      }
    }

    button {
      color: ${globalColor.white};
      font-weight: 700;
      padding: 7px;
      width: 95%;
      text-align: start;
      position: relative;

      :hover {
        background-color: ${globalColor.blue.darkUltramarine};
      }

      ${media_breakpoint_down('lg')} {
        width: 92%;
      }
    }
  }
  > {
    button {
      width: 100%;
      height: 47px;
      padding: 0 23px;
      text-align: left;
      background-color: #fff;
      color: ${globalColor.grayExtraLite.grayExtraLite80};
      transition: all 200ms linear;
      border: 1px solid ${globalColor.grayExtraLite.grayExtraLite100};
      border-radius: 0;
      text-decoration: none;

      &::after {
        float: right;
        margin-top: 8px;
        margin-bottom: 8px;
      }

      &:focus {
        text-decoration: none;
      }

      &:hover {
        border: 1px solid ${globalColor.grayExtraLite.grayExtraLite100};
        color: ${globalColor.black};
        text-decoration: none;
      }
    }

    .btn-link {
      &:active {
        border: 1px solid ${globalColor.grayExtraLite.grayExtraLite100};
        color: ${globalColor.black};
        text-decoration: none;
      }
    }
  }
`;

export const FiltersWrapper = styled.div`
  background-color: transparent;
  position: sticky;
  top: ${({ headerHeight }) => headerHeight};
  left: 0;
  z-index: 10;

  ${media_breakpoint_down('md')} {
    position: static;
  }
`;

export const ContainerFilters = styled(Container)`
  min-width: 86vw;
  padding: 22px 20px !important;
  background-color: ${globalColor.white};
  box-shadow: ${globalShadow.allSideShadow};
  

  #siteSearch {
    height: 48px !important;
    margin-left: 0;
    margin-right: 50px;
  }

  ${media_breakpoint_down('xl')} {
    .row {
      > :nth-child(-n + 2) {
        margin-bottom: 20px;
      }
    }
  }

  ${media_breakpoint_down('md')} {
    .row {
      > :nth-child(-n + 2) {
        margin-bottom: 0;
      }

      > :nth-child(3) {
        margin-bottom: 10px;
      }

      form {
        width: 100%;
      }
    }
  }
`;

export const DropDownItemTitle = styled(Dropdown.Item)`
  font-weight: bold;
  color: #fff;
  background-color: #444;
  text-shadow: 1px 2px 1px #000;
  text-transform: uppercase;
  transition: all 200ms linear;
  white-space: pre-line;
  margin-bottom: 10px;
  padding: 0;
  padding-left: 8px;
  padding-top: 5px;
  padding-bottom: 3px;

  &:hover {
    font-weight: bold;
    color: #fff;
    background-color: #444;
    text-shadow: 1px 2px 1px #000;
    text-transform: uppercase;
    border-bottom: 3px solid #db2220;
  }
`;

export const ChildPracticeLink = styled(Dropdown.Item)`
  padding: 0;
  padding-right: 8px;
  padding-left: 5px;
  padding-bottom: 10px;
  white-space: pre-line;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const ResultButton = styled(Button)`
  color: ${globalColor.white};
  background-color: ${globalColor.blue.dirtyBlue};
  border-radius: 0;
  padding: 5px 22px;

  :hover {
    color: ${globalColor.white};
    background-color: ${globalColor.blue.dirtyBlue};
  }

  :active {
    color: ${globalColor.white} !important;
    background-color: ${globalColor.blue.dirtyBlue};
  }

  :focus {
    color: ${globalColor.white};
    background-color: ${globalColor.blue.dirtyBlue};
  }

  svg {
    margin-left: 12px;
  }
`;

export const LetterSelectorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LetterSelectorBtn = styled.button`
  display: flex;
  width: 7.69%;
  justify-content: center;
  color: ${globalColor.blue.ultramarine};
  text-decoration: underline;

  :disabled {
    color: #b3b3b3;
    background: transparent;
    text-decoration: none;
  }
`;

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  box-shadow: ${globalShadow.allSideShadow};
  overflow-y: auto;
  padding-left: 10px;
  padding-right: 10px;

  h6 {
    margin-left: auto;
    margin-right: auto;
    color: ${globalColor.white};
    width: 80%;
    text-align: center;
    padding: 7px;
    border-radius: 5px;
    text-decoration: 1px solid black;
    background-color: ${globalColor.blue.darkUltramarine};
  }

  ${media_breakpoint_down('md')} {
    width: 100%;
  }
`;
