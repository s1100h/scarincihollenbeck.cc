import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {
  cannabisLawColors,
  globalColor,
  rem,
} from './global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';
import empty from 'is-empty';

export const BurgerBtn = styled.button`
  display: none;
  padding: 0;
  background-color: transparent;
  outline: 0;
  border: 0;

  .icon {
    width: 50px;
    height: 50px;
    color: black;
  }

  ${media_breakpoint_exactly_down(1439)} {
    display: block;
  }
`;

export const OffcanvasContainer = styled(Offcanvas)`
  margin-top: 116px;
  width: 100%;
  --bs-offcanvas-width: 100%;

  &.menu-cannabis {
    margin-top: 128px;
    .accordion-item {
      .accordion-body {
        .mobile-menu__first-lvl {
          .mobile-item__with-child {
            &.active {
              color: ${cannabisLawColors.cannabisColorGray};
            }
          }
        }
        .mobile-menu__second-lvl {
          li {
            a {
              color: ${globalColor.black};
            }
            color: ${globalColor.black};
          }
        }
      }
    }
  }

  &.menu-entertainment {
    margin-top: 96px;
  }

  ${media_breakpoint_exactly_down(1439)} {
    margin-top: 149px;

    &.menu-entertainment {
      margin-top: 92px;
    }
  }

  ${media_breakpoint_down('lg')} {
    margin-top: 112px;

    &.menu-cannabis {
      margin-top: 76px;
    }

    &.menu-entertainment {
      margin-top: 72px;
    }
  }

  ${media_breakpoint_down('md')} {
    margin-top: 68px;
  }
`;
export const OffcanvasBody = styled(Offcanvas.Body)`
  padding: 0;
  background-color: ${({ background }) =>
    !empty(background) ? background : globalColor.blue.darkBlue};
`;
export const NavList = styled.div`
  margin: 0;
  padding: 16px 32px 20px;

  .menu-item {
    display: flex;
    width: 100%;
    color: ${globalColor.white};
    padding-bottom: 20px;
    border-bottom: 1px solid ${globalColor.blue.darkUltramarine};
  }

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

  scrollbar-color: ${globalColor.blue.darkUltramarine} #0b1136;
  scrollbar-width: thin;

  ${media_breakpoint_down('md')} {
    padding: 16px 12px 20px;
  }
`;
export const AccordionStyled = styled(Accordion)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .menu-item {
    color: ${({ menuprops }) =>
      !empty(menuprops) ? globalColor.black : globalColor.white};
  }

  .accordion-item:last-of-type .accordion-button.collapsed {
    border-radius: 0;
  }

  .accordion-item {
    background-color: transparent;
    border: 0;
    border-radius: 0;
    box-shadow: none;

    button.accordion-button {
      color: ${({ menuprops }) =>
        !empty(menuprops) ? globalColor.black : globalColor.white};
      border-radius: 0;
      justify-content: space-between;

      ${({ menuprops }) =>
        !empty(menuprops)
          ? `
          :after {
            display: none;
          }`
          : `
          .chevron-down {
            display: none;
          }
        `};
    }

    :hover {
      box-shadow: none;
    }

    .accordion-body {
      padding: 0 0 44px;
      border-bottom: 1px solid ${globalColor.blue.darkUltramarine};
      display: flex;
      column-gap: 40px;

      .mobile-menu__first-lvl {
        margin: 0;
        display: flex;
        flex-direction: column;

        li {
          display: flex;

          ${media_breakpoint_down('md')} {
            flex-direction: column;
          }

          a,
          .mobile-item__with-child {
            width: 100%;
            padding: 13px 8px 11px;
            font-size: ${rem(14)};
            color: ${({ menuprops }) =>
              !empty(menuprops) ? globalColor.black : globalColor.white};
            font-weight: 700;
            line-height: 13px;
            text-align: start;
            transition: all 0.5s ease-in-out;

            &:hover {
              background-color: transparent;
              color: #377ec4;
            }

            &.active {
              border-radius: 4px;
              background-color: ${globalColor.blue.darkUltramarine};
            }
          }

          a.mobile-item__with-child {
            display: flex;
            align-items: flex-start;
            text-align: start;
            position: relative;

            &::after {
              content: '';
              opacity: 0;
              transition: opacity 0.5s ease-in-out;
              transition-delay: 0.1s;
            }

            &.active {
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

              &:hover {
                color: ${globalColor.white};
              }
            }
          }
        }

        .mobile-menu__second-accordion {
          .accordion-item {
            width: 100%;
          }

          .accordion-button {
            padding: 13px 8px;
            border-bottom: none;
            color: ${({ menuprops }) =>
              !empty(menuprops) ? globalColor.black : globalColor.white};
            font-size: ${rem(14)};
            font-weight: 700;
            line-height: 13px;

            &:after {
              content: none;
            }
          }

          .accordion-button:not(.collapsed) {
            margin-bottom: 4px;
            background-color: ${({ menuprops }) =>
              !empty(menuprops)
                ? cannabisLawColors.cannabisColorDarkGrayLight
                : globalColor.blue.darkUltramarine};
            border-radius: 4px;
            color: ${globalColor.white};
          }

          .accordion-body {
            padding: 0;
            border-bottom: none;

            ul {
              display: flex;
              flex-direction: column;
              row-gap: 4px;
              list-style: disc;

              li {
                display: list-item;
                margin-left: 20px;
                color: ${({ menuprops }) =>
                  !empty(menuprops) ? globalColor.black : globalColor.white};

                &::marker {
                  font-size: ${rem(12)};
                }

                a {
                  padding: 0;
                  font-size: ${rem(14)};
                  font-weight: 400;
                  color: ${({ menuprops }) =>
                    !empty(menuprops) ? globalColor.black : globalColor.white};
                  line-height: 28px;

                  &:hover {
                    background-color: transparent;
                    text-decoration: underline;

                    &:after {
                      content: none;
                    }
                  }
                }

                &.active {
                  color: ${({ menuprops }) =>
                    !empty(menuprops) ? globalColor.black : '#afdcf5'};

                  > a {
                    color: ${({ menuprops }) =>
                      !empty(menuprops) ? globalColor.black : '#afdcf5'};
                  }
                }
              }
            }
          }
        }

        ${media_breakpoint_down('md')} {
          width: 100%;
        }
      }

      .mobile-menu__second-lvl {
        flex: 1;
        margin: 0;
        display: flex;
        flex-direction: column;
        column-gap: 12px;
        row-gap: 4px;
        list-style: disc;
        overflow: auto;

        li {
          margin-left: 20px;
          color: ${globalColor.white};

          &::marker {
            font-size: ${rem(12)};
          }

          &:hover {
            color: ${globalColor.blue.skyBlue};

            a {
              background-color: transparent;
              color: ${globalColor.blue.skyBlue};

              &:after {
                content: none;
              }
            }
          }

          a {
            padding: 0;
            font-size: ${rem(14)};
            font-weight: 400;
            color: #e6e6e6;
            line-height: 28px;
          }

          &.active {
            color: #afdcf5;

            > a {
              color: #afdcf5;
            }
          }
        }
      }

      ${media_breakpoint_down('md')} {
        padding: 0 0 20px;
      }
    }

    .accordion-button {
      border-radius: 0;
      padding: 0;
      color: ${globalColor.white};
      background-color: transparent;
      padding-bottom: 20px;
      border-bottom: 1px solid ${globalColor.blue.darkUltramarine};
      --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
      transition: border 0s;
      outline: none;

      .collapsed {
        border-radius: 0;
      }

      :focus {
        box-shadow: none;
      }

      &::after {
        margin-right: 80%;

        ${media_breakpoint_down('md')} {
          margin-right: 0;
        }
      }
    }
    .accordion-button:not(.collapsed) {
      border-bottom: 0;
      background-color: transparent;
      box-shadow: none;
    }
  }
`;

export const AccordionMobile = styled(Accordion)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .accordion-item {
    background-color: transparent;
    border: 0;
    border-radius: 0;
    box-shadow: none;

    :hover {
      box-shadow: none;
    }

    .mobile-menu__first-lvl {
      margin: 0;
      display: flex;
      flex-direction: column;

      li {
        display: flex;

        ${media_breakpoint_down('md')} {
          flex-direction: column;
        }

        a,
        .mobile-item__with-child {
          width: 100%;
          padding: 13px 8px 11px;
          font-size: ${rem(14)};
          color: ${globalColor.white};
          font-weight: 700;
          line-height: 13px;
          transition: all 0.5s ease-in-out;

          &:hover {
            background-color: transparent;
            color: #377ec4;
          }

          &.active {
            border-radius: 4px;
            background-color: ${globalColor.blue.darkUltramarine};
          }
        }

        .mobile-item__with-child {
          display: flex;
          align-items: flex-start;
          text-align: start;
          position: relative;

          &::after {
            content: '';
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            transition-delay: 0.1s;
          }

          &.active {
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

            &:hover {
              color: ${globalColor.white};
            }
          }
        }
      }

      .mobile-menu__second-accordion {
        .accordion-item {
          width: 100%;
        }

        .accordion-button {
          padding: 13px 8px;
          border-bottom: none;
          color: ${globalColor.white};
          font-size: ${rem(14)};
          font-weight: 700;
          line-height: 13px;

          &:after {
            content: none;
          }
        }

        .accordion-button:not(.collapsed) {
          margin-bottom: 4px;
          background-color: ${globalColor.blue.darkUltramarine};
          border-radius: 4px;
        }

        .accordion-body {
          padding: 0;
          border-bottom: none;

          ul {
            display: flex;
            flex-direction: column;
            row-gap: 4px;
            list-style: disc;

            li {
              display: list-item;
              margin-left: 20px;
              color: ${globalColor.white};

              &::marker {
                font-size: ${rem(12)};
              }

              a {
                padding: 0;
                font-size: ${rem(14)};
                font-weight: 400;
                color: #e6e6e6;
                line-height: 28px;

                &:hover {
                  background-color: transparent;
                  text-decoration: underline;

                  &:after {
                    content: none;
                  }
                }
              }

              &.active {
                color: #afdcf5;

                > a {
                  color: #afdcf5;
                }
              }
            }
          }
        }
      }

      ${media_breakpoint_down('md')} {
        width: 100%;
      }
    }

    .mobile-menu__second-lvl {
      flex: 1;
      margin: 0;
      display: flex;
      flex-direction: column;
      column-gap: 12px;
      row-gap: 4px;
      list-style: disc;
      overflow: auto;

      li {
        margin-left: 20px;
        color: ${globalColor.white};

        &::marker {
          font-size: ${rem(12)};
        }

        &:hover {
          color: ${globalColor.blue.skyBlue};

          a {
            background-color: transparent;
            color: ${globalColor.blue.skyBlue};

            &:after {
              content: none;
            }
          }
        }

        a {
          padding: 0;
          font-size: ${rem(14)};
          font-weight: 400;
          color: #e6e6e6;
          line-height: 28px;
        }

        &.active {
          color: #afdcf5;

          > a {
            color: #afdcf5;
          }
        }
      }
    }

    ${media_breakpoint_down('md')} {
      padding: 0 0 20px;
    }

    .accordion-button {
      border-radius: 0;
      padding: 0;
      color: ${globalColor.white};
      background-color: transparent;
      padding-bottom: 20px;
      border-bottom: 1px solid ${globalColor.blue.darkUltramarine};
      --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
      transition: border 0s;
      outline: none;

      .collapsed {
        border-radius: 0;
      }

      :focus {
        box-shadow: none;
      }

      &::after {
        margin-right: 80%;

        ${media_breakpoint_down('md')} {
          margin-right: 0;
        }
      }
    }
    .accordion-button:not(.collapsed) {
      border-bottom: 0;
      background-color: transparent;
      box-shadow: none;
    }
  }
`;

export const GrayButtonLink = styled.a`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 15px 0 15px 22px;
  color: inherit;

  :hover {
    background-color: ${globalColor.grayExtraLite.grayExtraLite40};
  }
`;

export const ButtonLinkBox = styled.div`
  padding: 0 32px 16px;
  display: flex;
  gap: 20px;

  .link-btn-header {
    padding: 15px 40px;
    min-width: max-content;
    position: relative;
    z-index: 0;
    border: 1.5px solid ${cannabisLawColors.cannabisColorDarkGray};

    span {
      display: flex;
      color: ${cannabisLawColors.cannabisColorDarkGray};
    }

    svg {
      display: none;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        266deg,
        ${globalColor.blue.darkBlue} -13.67%,
        #c00100 79.43%,
        #df143d 125.91%
      );
      z-index: -1;
      opacity: 0;
      transition: all 0.5s ease;
    }

    &:hover {
      span {
        color: ${globalColor.white};
      }
      &::after {
        opacity: 1;
      }
    }

    ${media_breakpoint_down('sm')} {
      padding: 12.5px 25px;
      flex: 1;
    }
  }

  ${media_breakpoint_down('md')} {
    padding: 0 12px 16px;
  }

  ${media_breakpoint_down('sm')} {
    padding: 0 12px 20px;
    column-gap: 12px;
  }
`;

export const CommunicationLinks = styled.div`
  padding: 8px 12px 16px;
  display: none;
  flex-direction: column;
  row-gap: 20px;
  align-items: flex-start;

  .communication-link {
    color: ${({ menuprops }) =>
      !empty(menuprops) ? globalColor.black : globalColor.white};
    display: flex;
    column-gap: 8px;
    align-items: center;

    svg {
      fill: ${({ menuprops }) =>
        !empty(menuprops) ? globalColor.black : globalColor.white};
    }

    &.underline {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }

    &:hover {
      text-decoration: underline;
    }
  }

  ${media_breakpoint_down('md')} {
    display: flex;
  }
`;
