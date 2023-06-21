import styled from 'styled-components';
import { globalColor } from './global_styles/Global.styles';
import Button from 'react-bootstrap/Button';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const BreadcrumbsListContainer = styled.ul`
  display: flex;
  gap: 5px;
  align-items: center;

  svg {
    width: 12px;
    height: 12px;
  }

  li {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    gap: 5px;

    span {
      color: ${globalColor.gray.gray80};
    }
  }

  ${media_breakpoint_down('md')} {
    margin-bottom: 0;
    padding: 20px 0;
  }

  ${media_breakpoint_down('sm')} {
    position: relative;
  }
`;

export const ButtonBreadcrumb = styled(Button)`
  text-decoration: none;
  color: ${globalColor.blue.dirtyBlue};
  text-transform: capitalize;
  padding: 0;

  :hover {
    color: ${globalColor.red.darkRed};
  }
`;
