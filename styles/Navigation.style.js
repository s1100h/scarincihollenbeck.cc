import styled from 'styled-components';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { globalColor, globalTransition, rem } from './global_styles/Global.styles';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SidebarMenuItemOpener, SidebarMenuSubitemOpener } from './Sidebar.style';
import { LetterSelectorBtn } from './Filters.style';
import { ClearButton } from './Buttons.style';

export const DropdownFirstLvl = styled.div`
  width: 20vw;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 15px;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: ${rem(24)};
    margin-bottom: 28px;
  }

  > :first-child {
    :hover {
      cursor: pointer !important;
    }
  }

  .dropdown-item {
    padding: 13px 8px;
    color: ${globalColor.white};
    font-size: ${rem(14)};
    font-weight: 700;
    line-height: 13px;
    transition: all 0.3s ease-out;
    position: relative;
    display: flex;
    align-items: center;
    outline: none;
    white-space: normal;

    ::after {
      content: '';
      opacity: 0;
      transition: opacity 0.3s ease-out;
    }

    :hover {
      border-radius: 4px;
      background-color: ${globalColor.blue.darkUltramarine};
    }
  }

  .with-child {
    :hover {
      cursor: pointer;
      ::after {
        content: '';
        position: absolute;
        right: -11px;
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
`;

export const DropdownSecondLvl = styled.div`
  flex: 1;
  width: 30vw;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
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

      ::marker {
        font-size: ${rem(12)};
        transition: all 0.5s ease;
      }

      :hover {
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

        &:hover {
          color: #608ed2;
          background-color: transparent;
        }
      }

      .active {
        color: #afdcf5;

        .dropdown-item {
          color: #afdcf5;
        }
      }
    }
  }
`;

//New styles for Navigation in Header
export const NavbarWrapper = styled.nav`
  margin: 0 auto;
`;

export const NavbarList = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 32px;

  ${media_breakpoint_down('xl')} {
    gap: 24px;
  }

  ${media_breakpoint_down('lg')} {
    gap: 32px;
  }

  ${media_breakpoint_down('md')} {
    gap: 12px;
  }
`;

export const NavbarItem = styled.li``;

export const NavbarItemOpener = styled.button`
  padding: 4px 0 2px;
  border-bottom: 2px solid transparent;
  color: ${globalColor.blue.darkBlue};
  font-size: ${rem(18)};
  line-height: 1.55;
  font-weight: 500;
  transition: ${globalTransition.default};

  &.active {
    color: ${globalColor.blue.blue400};
    border-color: currentColor;
  }

  ${media_breakpoint_down('xl')} {
    font-size: ${rem(16)};
    line-height: 1.5;
  }

  ${media_breakpoint_down('lg')} {
    font-size: ${rem(18)};
    line-height: 1.55;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(16)};
    line-height: 1.5;
  }
`;

export const NavbarItemContent = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background-color: ${globalColor.blue.darkBlue};
  z-index: 0;
  max-height: calc(80dvh - 115px);
  display: flex;

  &.practices-split {
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: ${globalColor.blue.blue6002};
      z-index: -1;

      ${media_breakpoint_down('lg')} {
        display: none;
      }
    }
  }

  .navbar-container {
    display: flex;
    padding-top: 20px;
    padding-bottom: 40px;

    ${media_breakpoint_down('md')} {
      padding-top: 16px;
      padding-bottom: 24px;
    }
  }

  .practices-list {
    width: 100%;

    ${SidebarMenuItemOpener} {
      color: ${globalColor.white};
    }

    ${SidebarMenuSubitemOpener} {
      > span {
        &::after, &::before {
          background-color: ${globalColor.white};
        }
      }
    }
  }

  ${LetterSelectorBtn} {
    color: ${globalColor.white};

    &:disabled {
      color: ${globalColor.gray.gray110};
    }
  }

  ${ClearButton} {
    border: 1px solid ${globalColor.gray.gray500};
    color: ${globalColor.gray.gray1002};

    :hover {
      border: 1px solid ${globalColor.blue.blue500};
      color: ${globalColor.gray.gray1002};
    }

    :focus {
      border: 1px solid ${globalColor.blue.blue500};
      color: ${globalColor.gray.gray1002};
    }

    :active {
      border: 1px solid ${globalColor.blue.blue500};
      color: ${globalColor.gray.gray1002} !important;
    }
  }

  ${media_breakpoint_down('lg')} {
    position: static;
    max-height: 100%;
  }
`;

export const NavbarLeftBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const NavbarLeftList = styled.ul`
  padding-right: 16px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  overflow-y: auto;
`;

export const NavbarLeftItem = styled.li``;

export const NavbarLeftItemOpener = styled(Link)`
  padding: 8px 12px;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  color: ${globalColor.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  border-radius: 4px;
  transition: ${globalTransition.default};

  &:hover {
    background-color: ${globalColor.blue.blue6002};
    color: ${globalColor.white};

    > .item-icon {
      transform: translate(0);
      opacity: 1;
    }
  }

  &.active {
    background-color: ${globalColor.blue.blue6002};
    color: ${globalColor.white};

    > .item-icon {
      transform: translate(0);
      opacity: 1;
    }
  }
`;

export const NavbarLeftItemOpenerIcon = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${globalColor.blue.skyBlue};
  transform: translateX(-25%);
  opacity: 0;
  transition: ${globalTransition.default};

  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const NavbarRightBlock = styled.div`
  padding-left: 16px;
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const NavbarRightTitle = styled.p`
  margin: 0;
  color: ${globalColor.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  text-decoration: underline;
`;

export const NavbarRightList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  list-style: disc;
  overflow-y: auto;
`;

export const NavbarRightItem = styled.li`
  margin: 0 0 0 24px;
  color: ${globalColor.gray.gray300};

  &::marker {
    font-size: 15px;
  }
`;

export const NavbarRightItemLink = styled(Link)`
  color: ${globalColor.gray.gray300};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  transition: ${globalTransition.default};

  &:hover {
    color: inherit;
  }

  @media (hover: hover) {
    &:hover {
      color: ${globalColor.blue.skyBlue};
    }
  }
  
`;

export const NavbarLink = styled(Link)`
  padding: 10px 0 8px 0;
  color: ${globalColor.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  border-bottom: 2px solid ${globalColor.blue.skyBlue};
  transition: ${globalTransition.default};

  &:hover {
    color: ${globalColor.blue.skyBlue};
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 1.43;
    padding: 4px 0 2px 0;
  }
`;