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
import { DropdownSecondLvl } from 'styles/Navigation.style';

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
  flex-wrap: wrap;

  &.entertainment-header {
    background: rgba(34, 26, 20, 0.4);
    border-bottom: none;
  }

  &.cannabis-header {
    .navContainerWrapper {
      .dropdown-menu {
        background-color: ${cannabisLawColors.cannabisColorGray};

        .dropdown-item {
          :hover {
            color: ${cannabisLawColors.cannabisColorGray};
            background-color: ${cannabisLawColors.cannabisColorDarkGray};
          }

          &.with-child {
            &:hover {
              &::after {
                background-color: ${cannabisLawColors.cannabisColorDarkGray};
              }
            }
          }
        }

        ${DropdownSecondLvl} {
          ul {
            li {
              &.active {
                color: ${globalColor.black};

                .dropdown-item {
                  background-color: transparent;
                  color: ${globalColor.black};
                }
              }

              &:hover {
                color: ${globalColor.black};

                .dropdown-item {
                  background-color: transparent;
                  color: ${globalColor.black};
                }
              }

              .dropdown-item {
                &:hover {
                  background-color: transparent;
                  color: ${globalColor.black};
                }
              }
            }
          }
        }
      }

      .dropdown-item {
        color: ${cannabisLawColors.cannabisColorDarkGray};
      }
    }

    .nav-item {
      &.show {
        .nav-link {
          color: ${cannabisLawColors.cannabisColorGray};
          > div {
            color: ${cannabisLawColors.cannabisColorGray};
          }
        }
      }

      > a {
        color: ${cannabisLawColors.cannabisColorGray};
      }
    }

    .locations-dropdown
      .dropdown-menu
      .dropdown-location
      .dropdown-item
      .location-card-menu {
      > div {
        background-color: ${cannabisLawColors.cannabisColorDarkGray};
      }

      h3 {
        color: ${cannabisLawColors.cannabisColorGray};
      }
    }
  }

  ${media_breakpoint_down('xl')} {
    padding: 4px 1.5%;
    a.link-btn-header {
      width: 50px;
      height: 50px;
    }

    button {
      svg.icon {
        width: 50px;
        height: 50px;
      }
    }

    > :nth-child(4) {
      svg {
        width: 45px;
        height: 45px;
      }
    }
  }

  ${media_breakpoint_down('lg')} {
    padding-top: 10px;
    padding-bottom: 10px;

    .navContainer {
      display: none;
    }

    > :nth-child(4) {
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  ${media_breakpoint_exactly_down(700)} {
    .logo-letters {
      display: none;
    }
  }

  ${media_breakpoint_exactly_down(530)} {
    justify-content: space-between;
    > :nth-child(1) {
      order: 1;
      width: 20%;
      justify-content: flex-start;
    }
    > :nth-child(3) {
      order: 5;
      width: 85vw;
      margin-top: 10px;
      justify-content: center;
      form {
        .form-group {
          justify-content: center;
        }
      }
      .search-result-container {
        margin-top: 23px;
      }
    }
    > :nth-child(4) {
      order: 2;
      svg {
        width: 24px;
        height: 24px;
      }
    }
    > :nth-child(5) {
      order: 3;
      button {
        svg {
          width: 40px;
          height: 40px;
        }
      }
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
  justify-content: end;
  width: 90%;

  .search-result-container {
    width: inherit;
    background-color: ${globalColor.graySmoke.smoke};
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    margin-top: 25px;
  }

  form {
    width: inherit;
    .form-control {
      display: ${({ isOpenBlock }) => (isOpenBlock ? 'flex' : 'none')};
      padding: 6px 12px;
      background-color: ${globalColor.graySmoke.smoke};
      color: ${globalColor.black};
      border-radius: 25px !important;
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
