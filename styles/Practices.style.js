import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const ButtonTabToggle = styled(Dropdown.Toggle)`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  border: 1px solid #db2200;
  display: block;
  padding-left: 1em;
  padding-right: 1em;
  color: #db2200;
  text-decoration: none;
  transition: All 1s ease;
  -webkit-transition: All 1s ease;
  -moz-transition: All 1s ease;
  border-radius: 3px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  :hover {
    background-color: #db2200;
    color: #fff !important;
    border: 0px solid #fff;
  }

  :focus {
    box-shadow: none;
  }

  :after {
    display: none;
  }
`

export const DropdownItemPractice = styled(Dropdown.Item)`
  display: 'block';
  font-size: 1rem;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`

export const ListSimple = styled.ul`
  column-count: 3;
  column-gap: 40px;
  padding-left: 15px;

  li {
    margin-bottom: 10px;

    a {
      color: #33667d;
    }
  }

  ${media_breakpoint_down('md')} {
    column-count: 2;
  }

  ${media_breakpoint_down('sm')} {
    column-count: 1;
  }
`
