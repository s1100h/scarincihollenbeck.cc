import { Button, Container } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const DropDownItemSelector = styled(Dropdown.Item)`
  margin-top: 5px;
  font-weight: 600;
`

export const DropdownSelectorBtn = styled(DropdownButton)`
  > {
    button {
      width: 100%;
      text-align: left;
      background-color: #fff;
      color: #000;
      transition: all 200ms linear;
      border: 0px !important;

      &::after {
        float: right;
        margin-top: 8px;
        margin-bottom: 8px;
      }

      &:active {
        background-color: #fccfff;
        font-weight: bold;
        color: #000;
        text-decoration: none;
      }

      &:focus {
        text-decoration: none;
      }

      &:hover {
        background-color: #fff;
        color: #000;
        border: 0px;
        border-bottom: 3px solid #db2220;
        text-decoration: none;
      }
    }

    div {
      width: fit-content;

      ${media_breakpoint_down('md')} {
        width: 100%;
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
  background-color: ${({ props }) => (props?.isDark ? '#e9e9e9' : '#495057')};
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

export const RedColorButton = styled(Button)`
  color: #b50000;
`
