import styled from 'styled-components';
import { globalColor, globalTransition } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import Link from 'next/link';

export const BreadcrumbsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
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

    &.active {
      pointer-events: none;

      > a {
        color: ${globalColor.gray.gray80};
      }
    }

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

export const ButtonBreadcrumb = styled(Link)`
  text-decoration: none;
  color: ${globalColor.blue.ultramarine};
  text-transform: capitalize;
  padding: 0;
  transition: ${globalTransition.default};

  :hover {
    color: ${globalColor.red.darkRed};
  }
`;
