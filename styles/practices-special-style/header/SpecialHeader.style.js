import styled from 'styled-components';
import {
  buttonHoverActive,
  cannabisLawColors,
  globalColor,
} from '../../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../../mediaBreakpoints.style';
import { BsSearch } from 'react-icons/bs';
import { LinksBox } from '../../Header.style';

export const SpecialHeaderContainer = styled.header`
  padding: 20px 1.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  filter: blur(10%);
  background-color: ${cannabisLawColors.cannabisTransparentBlack};
  position: fixed;
  z-index: 1041;
  border-bottom: 4px solid ${cannabisLawColors.cannabisColorGray};
  column-gap: 20px;

  ${({ headerType }) =>
    headerType === 'entAndMedia' &&
    `
    background: rgba(34, 26, 20, 0.40);
    border-bottom: none;
  `}

  .nav-item > a {
    color: ${cannabisLawColors.cannabisColorGray};
  }

  .navbar-nav .show > .nav-link {
    color: ${globalColor.white};
  }

  .dropdown-menu {
    background-color: ${cannabisLawColors.cannabisColorGray};

    a {
      :hover {
        color: ${cannabisLawColors.cannabisColorGray};
        background-color: ${cannabisLawColors.cannabisColorDarkGray};
      }
    }
  }

  ${media_breakpoint_down('lg')} {
    padding-top: 10px;
    padding-bottom: 10px;

    .navContainer {
      display: none;
    }
  }

  ${media_breakpoint_exactly_down(700)} {
    .logo-letters {
      display: none;
    }
  }
`;
export const SearchBoxContainer = styled.div`
  display: ${({ isOpenSearch }) => (isOpenSearch ? 'none' : 'flex')};
  align-items: center;
  position: relative;
  margin-right: 10px;
  margin-left: auto;

  :hover {
    cursor: pointer;
  }

  ${media_breakpoint_down('xl')} {
    svg {
      width: 34px;
      height: 34px;
    }
  }
`;
export const SearchOpenBtn = styled(BsSearch)`
  width: 30px;
  height: 30px;
  margin-right: 20%;
  position: absolute;
  z-index: 1;
  right: 0;
  color: ${globalColor.white};
`;

export const VisibleHiddenSearch = styled.div`
  display: ${({ isOpenBlock }) => (isOpenBlock ? 'flex' : 'none')};
  margin: 5px auto;
  flex: 1;
  position: relative;

  .search-result-container {
    background-color: ${globalColor.graySmoke.smoke};
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-top: 25px;
  }

  form {
    .form-control {
      display: ${({ isOpenBlock }) => (isOpenBlock ? 'flex' : 'none')};
      padding: 6px 12px;
      background-color: ${globalColor.graySmoke.smoke};
      color: ${globalColor.black};
      border-radius: 25px;
      position: relative;
      z-index: 100;
      box-shadow: inset 200px 200px ${globalColor.graySmoke.smoke},
        inset -200px -200px ${globalColor.graySmoke.smoke};

      :focus-visible,
      :focus,
      :active {
        background-color: ${globalColor.graySmoke.smoke};
        border: none;
        outline: none;
      }
    }

    .form-group {
      svg {
        display: ${({ isOpenBlock }) => (isOpenBlock ? 'flex' : 'none')};
        color: ${globalColor.black};

        :hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export const LinksBoxSpecial = styled(LinksBox)`
  display: flex;
  align-items: center;
  gap: 32px;

  .link-btn-header {
    height: 50px;

    ${media_breakpoint_down('lg')} {
      display: none;
    }
  }

  button {
    .icon {
      color: ${globalColor.white};
    }
  }

  ${media_breakpoint_down('xl')} {
    margin-left: 10px;
    margin-right: 10px;

    .link-btn-header {
      width: 34px;
      height: 34px;
    }

    button {
      .icon {
        width: 40px;
        height: 40px;
      }
    }
  }

  ${media_breakpoint_down('lg')} {
    margin-left: 0;
  }
`;
