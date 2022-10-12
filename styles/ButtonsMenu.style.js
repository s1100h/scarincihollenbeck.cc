import styled from 'styled-components'
import { Nav, NavDropdown } from 'react-bootstrap'

export const ButtonTab = styled.div`
  height: 42px;
  width: 200px;
  padding: 0.5rem 0.1rem;
  margin-right: 8px;
  color: #fff;
  text-align: center;
  max-width: 210px;
  font-size: 1rem;
  outline: 0;
  border: 0;
  background: linear-gradient(1turn, rgba(144, 25, 24, 0.9) 60%, rgba(221, 38, 36, 0.9)), #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: 0.7s;
  ${({ active }) =>
    active &&
    `
		height: 66px;
		white-space: initial;
		opacity: 1;
	`}
  cursor: pointer;
`

export const ButtonDropdown = styled(NavDropdown)`
  text-align: center;
  max-width: 210px;
  background: linear-gradient(1turn, rgba(144, 25, 24, 0.9) 60%, rgba(221, 38, 36, 0.9)), #333;
  height: 42px;

  .dropdown-toggle {
    color: white;
  }

  .dropdown-menu {
    width: -webkit-fill-available;
  }
`

export const ButtonGroup = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`

export const MobileGroup = styled.div`
  display: inherit;
  @media (min-width: 768px) {
    display: none;
  }
`

export const NavItem = styled(Nav.Item)`
  display: flex;
  position: relative;
  font-size: 1.1rem;
  align-items: center;
  transition: all 200ms linear;
  padding: 10px;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #b50000;
  }
`
