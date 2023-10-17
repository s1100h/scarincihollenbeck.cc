import styled from 'styled-components';
import { Nav, NavDropdown } from 'react-bootstrap';
import { globalColor } from './global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_up,
} from './mediaBreakpoints.style';

export const commonBtnStyle = `
  height: 42px;
  width: 200px;
  padding: 0.5rem 0.1rem;
  color: ${globalColor.gray.gray80};
  text-align: center;
  max-width: 210px;
  border: 1px solid ${globalColor.gray.gray80};
  background: ${globalColor.white};
  transition: 0.7s;
  `;

export const ButtonTab = styled.div`
  ${commonBtnStyle};
  padding: 0.5rem 1rem;
  margin-right: 8px;
  white-space: nowrap;

  ${({ active }) =>
    active &&
    `
    color: ${globalColor.white};
    background: ${globalColor.red.darkRed};
		white-space: initial;
		opacity: 1;
		white-space: nowrap;

	`}

  ${({ isMore }) =>
    isMore &&
    `
    display: flex;
    padding-left: 20px;
	`}

  cursor: pointer;

  :hover {
    background: ${globalColor.red.liteRed};
    color: ${globalColor.white};
  }

  :active {
    background: ${globalColor.red.burgundy};
  }
`;

export const ButtonDropdown = styled(NavDropdown)`
  .dropdown-toggle {
    ${commonBtnStyle};
    max-width: 160px;
    min-width: 120px;

    color: ${globalColor.gray.gray80};

    :hover {
      background: ${globalColor.red.liteRed};
      color: ${globalColor.white};
    }

    :active {
      background: ${globalColor.red.burgundy};
    }
  }

  .dropdown-menu {
    width: -webkit-fill-available;
  }
`;

export const ButtonGroup = styled.div`
  display: none;
  padding: 10px 0;
  margin-top: ${(props) => props?.marTop || '25px'};
  overflow-x: auto;
	
	${media_breakpoint_up('xs')}{
    display: ${({ isNotProfile }) =>
      isNotProfile?.length > 0 ? 'flex' : 'none'};
	}
	
	${media_breakpoint_up('md')}{
		display: flex};
	}

  ${media_breakpoint_down('sm')} {
    margin-bottom: -100px;
  }
`;

export const MobileGroup = styled.div`
  display: inherit;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Nav.Item)`
  display: flex;
  position: relative;
  font-size: 1.1rem;
  align-items: center;
  transition: all 200ms linear;
  padding: 10px;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid ${globalColor.red.darkRed};
  }
`;
