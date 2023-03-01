import { Button, Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import styled from 'styled-components'
import { globalColor, globalShadow } from './global_styles/Global.styles'
import { media_breakpoint_down, media_breakpoint_exactly_down } from './mediaBreakpoints.style'

const translate3dVariations = (width) => `translate3d(${width}, 49px, 0px)!important`

export const DropDownItemSelector = styled(Dropdown.Item)`
  margin-top: 5px;
  font-weight: 600;
`

export const DropdownSelectorBtn = styled(DropdownButton)`
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

    div {
      width: fit-content;
      transform: ${({ props }) => (props?.bigMenu ? translate3dVariations('-22vw') : null)};

      ${media_breakpoint_exactly_down(1350)} {
        transform: ${({ props }) => (props?.bigMenu ? translate3dVariations('-27vw') : null)};
      }

      ${media_breakpoint_down('xl')} {
        transform: ${({ props }) => (props?.bigMenu ? translate3dVariations('-46vw') : null)};
      }

      ${media_breakpoint_down('md')} {
        transform: ${({ props }) => (props?.bigMenu ? translate3dVariations('0') : null)};
      }

      ${({ props }) =>
        props?.bigMenu
          ? `
					min-width: 100%;

					@media (min-width: 767px) {
							min-width: 660px;
					}

					@media (min-width: 992px) {
						min-width: 920px;
					}

					@media (min-width: 1200px) {
							min-width: 1200px;
					}
				`
          : null}
    }
  }

  ${media_breakpoint_down('md')} {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

export const ContainerFilters = styled(Container)`
  min-width: 86vw;
  padding: 22px 20px;
  background-color: ${({ props }) => (props?.isWhite ? globalColor.white : '#495057')};
  box-shadow: ${globalShadow.allSideShadow};

  form {
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

  ${media_breakpoint_down('sm')} {
    form {
      width: 100%;
    }
  }
`

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
`

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
`

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
`
