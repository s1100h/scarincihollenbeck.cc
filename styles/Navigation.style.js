import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { media_breakpoint_exactly_down } from './mediaBreakpoints.style';
import { globalColor, rem } from './global_styles/Global.styles';

export const NavbarStyled = styled(Navbar)`
  display: flex;
  margin: 0 auto;
  flex: 4;
  transition: all 0.5s ease-in-out;

  & ::-webkit-scrollbar-track {
    background-color: #0b1136;
    border-radius: 8px;
    opacity: 0;
  }

  & ::-webkit-scrollbar {
    width: 2px;
    height: 4px;
    background-color: #0b1136;
  }

  & ::-webkit-scrollbar-thumb {
    background-color: ${globalColor.blue.darkUltramarine};
    border-radius: 8px;
  }

  .navContainerWrapper {
    width: 100%;
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: center;

    .nav-item {
      &.show {
        .dropdown-menu {
          display: flex;
        }

        > a {
          color: #164587;
        }
      }

      > a {
        transition: all 0.5s ease;

        &:hover {
          color: ${globalColor.blue.skyBlue};
        }
      }
    }

    .dropdown-menu {
      padding: 16px 40px;
      background-color: ${globalColor.blue.darkBlue};
      box-shadow: 2px 8px 20px 0px rgba(6, 11, 42, 0.52);
      column-gap: 32px;

      .dropdown__first-lvl {
        max-height: 70vh;
        overflow-y: auto;
        padding-right: 20px;
      }

      .dropdown__second-lvl {
        overflow: auto;
        max-height: 70vh;

        ul {
          padding-right: 20px;
          margin: 0;
          display: flex;
          flex-direction: column;
          row-gap: 4px;
          list-style: disc;

          li {
            margin-left: 20px;
            color: ${globalColor.white};

            &::marker {
              font-size: ${rem(12)};
              transition: all 0.5s ease;
            }

            &:hover {
              color: #608ed2;
              .dropdown-item {
                background-color: transparent;
                color: #608ed2;
              }
            }

            .dropdown-item {
              padding: 0;
              font-size: ${rem(14)};
              font-weight: 400;
              color: #e6e6e6;
              line-height: 28px;
            }

            &.active {
              color: #afdcf5;

              .dropdown-item {
                color: #afdcf5;
              }
            }
          }
        }
      }
    }

    .dropdown-item {
      padding: 13px 8px;
      color: ${globalColor.white};
      font-size: ${rem(14)};
      font-weight: 700;
      line-height: 13px;
      transition: all 0.5s ease-in-out;
      position: relative;
      display: flex;
      align-items: center;
      outline: none;

      &:focus {
        background-color: ${globalColor.blue.darkUltramarine};

        &::after {
          content: '';
          position: absolute;
          right: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 20px;
          background-color: ${globalColor.blue.darkUltramarine};
          clip-path: polygon(100% 50%, 0 0, 0% 100%);
          opacity: 1;
        }
      }

      &::after {
        content: '';
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        transition-delay: 0.1s;
      }

      &:hover {
        border-radius: 4px;
        background-color: ${globalColor.blue.darkUltramarine};
      }

      &.with-child {
        &:hover {
          &::after {
            content: '';
            position: absolute;
            right: -12px;
            top: 50%;
            transform: translateY(-50%);
            width: 12px;
            height: 20px;
            background-color: ${globalColor.blue.darkUltramarine};
            clip-path: polygon(100% 50%, 0 0, 0% 100%);
            opacity: 1;
          }
        }
      }
    }
  }

  .locations-dropdown {
    .dropdown-menu {
      width: 1140px;
      min-width: 800px;
      left: -600%;

      .dropdown__first-lvl {
        display: flex;
        width: inherit;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding-right: 0;

        .dropdown-item {
          padding: 0;
          max-width: 504px;
          min-width: 306px;

          .location-card-menu {
            width: inherit;
            background-color: ${globalColor.blue.darkUltramarine};

            div {
              padding: 24px;
              transition: 0.5s transform;

              :hover {
                transform: scale(1.04);
              }

              h3 {
                font-size: rem(20);
                line-height: 24px;
                color: ${globalColor.blue.skyBlue};
              }

              address {
                display: flex;
                width: 354px;
                flex-wrap: wrap;
                font-size: 1rem;
                font-weight: 400;
                gap: 12px;
                margin-bottom: 0;

                span {
                  white-space: normal;
                  line-height: 24px;
                }

                a,
                * {
                  color: ${globalColor.white};
                  pointer-events: none;
                }
              }
            }
          }
        }
      }
    }
  }

  a {
    color: ${globalColor.black};
  }

  ${media_breakpoint_exactly_down(1439)} {
    display: none;
  }
`;
