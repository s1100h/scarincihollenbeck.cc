import styled from 'styled-components';
import { cannabisLawColors, globalColor } from '../../global_styles/Global.styles';
import { media_breakpoint_exactly_down } from '../../mediaBreakpoints.style';
import { BsSearch } from 'react-icons/bs';

export const SpecialHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.5%;
  padding-right: 1.5%;
  height: fit-content;
  width: 100%;
  filter: blur(10%);
  position: fixed;
  z-index: 1000;
  border-bottom: 4px solid ${cannabisLawColors.cannabisColorGray};

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

  ${media_breakpoint_exactly_down(1365)} {
    flex-wrap: wrap;
    justify-content: space-between;

    .navContainer {
      display: flex;
      width: 100%;
      order: 3;

      .navbar-nav {
        justify-content: center;
      }
    }
  }
`;
export const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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
  position: relative;
  z-index: 1001;
  width: 50%;

  form {
    width: 50%;
    .form-control {
      display: ${({ isOpenBlock }) => (isOpenBlock ? 'flex' : 'none')};
      width: ${({ isOpenBlock }) => (isOpenBlock ? '100%' : '0')};
      padding: 0.375rem 0.75rem;
    }

    .form-group {
      svg {
        display: ${({ isOpenBlock }) => (isOpenBlock ? 'flex' : 'none')};
      }
    }
  }
`;
