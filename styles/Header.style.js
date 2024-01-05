import styled from 'styled-components';
import {
  media_breakpoint_down,
  media_breakpoint_range,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';
import { globalColor } from './global_styles/Global.styles';
import { NavbarStyled } from './Navigation.style';
import { SearchForm, SearchInput } from './GlobalSearch.style';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 1.5%;
  padding-right: 1.5%;
  height: fit-content;
  width: 100%;
  background: ${globalColor.white};
  box-shadow: ${({ scrollDown }) =>
    scrollDown ? '-2px 0px 10px rgb(0 0 0 / 13%);' : 'none'};
  position: sticky;
  top: 0;
  z-index: 1041;

  @media print {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 60px;
  padding-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  flex-wrap: wrap;

  ${NavbarStyled} {
    max-width: ${({ isOpenBlock }) => (isOpenBlock ? '0' : '100%')};
    overflow: ${({ isOpenBlock }) => (isOpenBlock ? 'hidden' : 'unset')};
    opacity: ${({ isOpenBlock }) => (isOpenBlock ? '0' : '1')};
  }

  ${media_breakpoint_range('sm', 'lg')} {
    margin-top: 54px;
  }

  ${media_breakpoint_down('md')} {
    margin-top: 0;
    padding: 8px 0;
  }
`;
export const DefaultHeaderSearchContainer = styled.div`
  flex: 1;
  position: relative;

  .search-result-container {
    margin-top: 0;
    width: 100%;
  }

  .search-icon {
    display: ${({ isOpenBlock }) => (isOpenBlock ? 'flex' : 'none')};
    position: absolute;
    right: 23px;
    width: 20px;
    height: 20px;
    top: calc(50% - 0.5em);
    transform: translateY(-6%);
    z-index: 101;
    align-items: center;
    justify-content: center;
  }

  ${SearchForm} {
    svg {
      display: ${({ isOpenBlock }) => (isOpenBlock ? 'none' : 'block')};

      &[role='button'] {
        display: block;
        z-index: 102;
        background-color: #ebebeb;
      }
    }
  }

  ${SearchInput} {
    border: 1px solid transparent;
    transition: all 0.5s ease;

    &:hover {
      border: 1px solid ${globalColor.gray.gray70};
      background-color: ${globalColor.white};
    }

    &:focus {
      border: 1px solid ${globalColor.gray.gray70};
      box-shadow: none;
    }
  }

  /* ${media_breakpoint_down('lg')} {
    width: 80%;
    margin: auto auto 10px;
    order: 3;
    flex: none;
  } */

  ${media_breakpoint_down('md')} {
    .search-result-container {
      width: -webkit-fill-available;
    }
  }

  ${media_breakpoint_exactly_down(1439)} {
    margin-left: auto;
    max-width: ${({ isOpenBlock }) => (isOpenBlock ? '100%' : '134px')};
    transition: all 0.5s ease;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;

  ${media_breakpoint_exactly_down(700)} {
    a {
      width: auto;

      .logo-letters {
        display: none;
      }
    }
  }
`;

export const LinksBox = styled.div`
  display: flex;
  gap: 20px;
  height: inherit;

  .link-btn-header {
    height: 40px;
    position: relative;
    z-index: 0;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        266deg,
        #060b2a -13.67%,
        #c00100 79.43%,
        #df143d 125.91%
      );
      z-index: -1;
      opacity: 0;
      transition: all 0.5s ease;
    }

    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }

  ${media_breakpoint_down('xl')} {
    .link-btn-header {
      width: 57px;

      span {
        display: none;
      }

      svg {
        display: block;
        height: 25px;
        width: 25px;
      }
    }
  }

  ${media_breakpoint_down('xl')} {
    margin-left: auto;
    margin-right: 10px;
  }

  ${media_breakpoint_exactly_down(1439)} {
    display: none;
  }
`;

export const AddressSubscriptionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: ${globalColor.blue.darkBlue};
  padding: 8px 2%;
  position: absolute;

  address {
    flex-direction: row;
    gap: 26px;
    margin-right: 32px;
    margin-bottom: 0;

    a {
      gap: 8px;
      color: ${globalColor.white};

      span {
        text-decoration: none;
        font-weight: 400;
      }

      svg {
        fill: ${globalColor.white};
      }
    }
  }

  .header-subscription-btn {
    display: flex;
    color: ${globalColor.white};
    gap: 8px;
    align-items: center;
    font-weight: 600;
  }

  ${media_breakpoint_exactly_down(564)} {
    justify-content: flex-start;
    flex-wrap: wrap;

    address {
      flex-wrap: wrap;
      margin-bottom: 8px;
      gap: 8px;
    }
  }

  ${media_breakpoint_down('md')} {
    display: none;
  }
`;
