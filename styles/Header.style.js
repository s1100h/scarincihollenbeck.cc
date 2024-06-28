import styled from 'styled-components';
import {
  media_breakpoint_down,
  media_breakpoint_range,
  media_breakpoint_exactly_down,
  media_breakpoint_up,
} from './mediaBreakpoints.style';
import { globalColor, globalTransition, rem } from './global_styles/Global.styles';
import { NavbarStyled } from './Navigation.style';
import { SearchForm, SearchInput } from './GlobalSearch.style';
import Link from 'next/link';
import { ButtonRed } from './Buttons.style';
import { motion } from 'framer-motion';

const HeaderTopLineItemStyles = `
  padding: 4px 4px 2px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${globalColor.white};
  font-size: ${rem(16)};
  font-weight: 600;
  line-height: 1.5;
  border-bottom: 2px solid transparent;
  transition: ${globalTransition.default};

  @media (hover: hover) {
    &:hover {
      border-color: ${globalColor.blue.skyBlue};

      > span {
        color: ${globalColor.blue.skyBlue};
      }
    }
  }

  &:hover {
    color: ${globalColor.white};
  }

  &:active {
    border-color: ${globalColor.blue.skyBlue};
    color: ${globalColor.blue.skyBlue};

    > span {
      color: ${globalColor.blue.skyBlue};
    }
  }

  ${media_breakpoint_down('md')} {
    padding: 4px 0;
    font-size: ${rem(14)};
    line-height: 1.42;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  width: 100%;
  background: ${globalColor.white};
  box-shadow: ${({ scrollDown }) =>
    scrollDown ? '-2px 0px 10px rgb(0 0 0 / 13%);' : 'none'};
  position: sticky;
  top: 0;
  z-index: 1020;

  @media print {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: min(100%, 2184px);
  max-width: 100%;
  margin: 0 auto;
  padding: 10px 132px;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  flex-wrap: wrap;

  ${NavbarStyled} {
    max-width: ${({ isOpenBlock }) => (isOpenBlock ? '0' : '925px')};
    pointer-events: ${({ isOpenBlock }) => (isOpenBlock ? 'none' : 'auto')};
    opacity: ${({ isOpenBlock }) => (isOpenBlock ? '0' : '1')};
  }

  ${media_breakpoint_exactly_down(1850)} {
    padding: 10px 1.5%;
  }

  ${media_breakpoint_down('md')} {
    padding: 8px 1.5%;
  }

  ${media_breakpoint_exactly_down(640)} {
    > :nth-child(1) {
      order: 1;
      width: 77%;
      justify-content: flex-start;
    }
    > :nth-child(3) {
      order: 5;
      width: 100%;
      margin-top: 10px;
      .form-group {
        width: 100%;
      }
    }
    > :nth-child(5) {
      order: 2;
    }
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

  ${media_breakpoint_down('md')} {
    .search-result-container {
      width: -webkit-fill-available;
    }
  }

  ${media_breakpoint_exactly_down(1439)} {
    max-width: ${({ isOpenBlock }) => (isOpenBlock ? '48%' : '134px')};
    margin-left: auto;
    transition: all 0.5s ease;
  }

  ${media_breakpoint_exactly_down(640)} {
    max-width: none;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: flex-start;

  ${media_breakpoint_down('md')} {
    display: ${({ $isHide }) => ($isHide ? 'none' : 'flex')};
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
        ${globalColor.blue.darkBlue} -13.67%,
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

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${globalColor.white};
  position: sticky;
  top: 0;
  z-index: 1020;

  * {
    &::-webkit-scrollbar-track {
      background-color: ${globalColor.blue.blue6002};
      border-radius: 8px;
      opacity: 0;
    }

    &::-webkit-scrollbar {
      width: 3px;
      height: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${globalColor.blue.blue400};
      border-radius: 8px;
    }

    // FireFox
    @supports not selector(::-webkit-scrollbar-thumb) {
      scrollbar-color: ${globalColor.blue.blue400} ${globalColor.blue.blue6002};
      scrollbar-width: thin;
    }
  }
`;

export const HeaderTopLineWrapper = styled.div`
  padding: 4px 0;
  background-color: ${globalColor.blue.darkBlue};
  width: 100%;
`;

export const HeaderTopLineItems = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  ${media_breakpoint_down('md')} {
    gap: 16px;
  }
`;

export const HeaderTopLineItem = styled(motion.li)`
  width: ${({ $open }) => ($open ? '100%' : '')};

  .header-subscription-btn {
    ${HeaderTopLineItemStyles}
  }

  &.mobile-hide {
    ${media_breakpoint_down('md')} {
      display: none;
    }
  }
`;

export const HeaderTopLineLink = styled(Link)`
  ${HeaderTopLineItemStyles}

`;

export const HeaderTopLineIcon = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  transition: ${globalTransition.default};

  > svg {
    width: 100%;
    height: 100%;
  }

  ${media_breakpoint_down('md')} {
    display: none;
  }
`;

export const HeaderSearchWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 876px;

  ${media_breakpoint_down('md')} {
    width: ${({ $open }) => ($open ? '100%' : '')};
  }

  > div {
    position: relative;
    z-index: 10;
  }
`;

export const SearchOpener = styled(motion.button)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${globalColor.white};
  border-radius: 4px;
  color: ${globalColor.gray.gray110};

  > svg {
    width: 24px;
    height: 24px;
  }
`;

export const HeaderMain = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderMainButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${media_breakpoint_down('md')} {
    width: ${({ $wide }) => ($wide ? '100%' : '')};
  }

  ${HeaderSearchWrapper} {
    ${SearchOpener} {
      width: 36px;
      height: 36px;
    }

    ${media_breakpoint_up('md')} {
      display: none;
    }
  }

  > ${ButtonRed} {
    ${media_breakpoint_down('md')} {
      display: none;
    }
  }
`;

export const SidebarOpener = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  background: transparent;

  ${media_breakpoint_down('md')} {
    display: ${({ $isHide }) => ($isHide ? 'none' : 'flex')};
    width: 36px;
    height: 36px;
  }

  &:before,
  &:after {
    content: "";
  }

  &:before,
  &:after,
  .burger-line {
    position: absolute;
    left: 50%;
    transform: scale(1, 1);
    margin-left: -12.5px;
    background: ${globalColor.gray.gray110};
    border-radius: 2px;
    height: 3px;
    width: 24px;
    transition: all 0.15s linear;
    transform: translateY(-50%);
  }

  &:before {
    top: ${({$isSidebarOpen}) => $isSidebarOpen ? '50%' : 'calc(50% - 8px)'};
    transform: ${({$isSidebarOpen}) => $isSidebarOpen ? 'rotate(45deg)' : ''};
  }

  .burger-line {
    top: 50%;
    transform: ${({$isSidebarOpen}) => $isSidebarOpen ? 'scale(0, 1)' : ''};
  }

  &:after {
    top: ${({$isSidebarOpen}) => $isSidebarOpen ? '50%' : 'calc(50% + 8px)'};
    transform: ${({$isSidebarOpen}) => $isSidebarOpen ? 'rotate(-45deg)' : ''};
  }
`;

export const SidebarMenuWrapper = styled.div`
  position: absolute;
  width: 50vw;
  height: ${({ $headerHeight }) => $headerHeight};
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: ${globalColor.white};
  z-index: 2;
  transition: ${globalTransition.default};
  pointer-events: ${({ $isSidebarOpen }) => `${$isSidebarOpen ? 'auto' : 'none'}`};
  opacity: ${({ $isSidebarOpen }) => `${$isSidebarOpen ? 1 : 0}`};
  overflow: ${({ $isSidebarOpen }) => `${$isSidebarOpen ? 'auto' : 'hidden'}`};

  ${media_breakpoint_down('lg')} {
    width: 100%;
  }
`;

export const SidebarMenuContainer = styled.div`
  max-width: 908px;
  width: 100%;
  margin: 0 auto 0 0;
  padding: 0 80px 0 40px;

  ${media_breakpoint_down('xl')} {
    padding-right: 32px;
    padding-left: 32px;
  }

  ${media_breakpoint_down('lg')} {
    max-width: 100%;
  }

  ${media_breakpoint_down('md')} {
    padding-right: 12px;
    padding-left: 12px;
  }
`;

export const SidebarMenuBackdrop = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: ${({ $headerHeight }) => `calc(100dvh - ${$headerHeight}px)`};
  background-color: rgba(1, 2, 10, 0.68);
  z-index: ${({ $isSidebarOpen }) => `${$isSidebarOpen ? 1 : -1}`};
  opacity: ${({ $isSidebarOpen }) => `${$isSidebarOpen ? 1 : 0}`};
  pointer-events: ${({ $isSidebarOpen }) => `${$isSidebarOpen ? 'auto' : 'none'}`};
  transition: ${globalTransition.default};

  ${media_breakpoint_down('lg')} {
    display: none;
  }
`;


export const SidebarMenuList = styled.ul`
  margin: 0;
  padding-top: 8px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;

  ${media_breakpoint_down('md')} {
    padding-top: 4px;
  }
`;

export const SidebarMenuItem = styled.li`
  border-bottom: 1px solid ${globalColor.gray.gray10};
  transition: ${globalTransition.default};
  padding-bottom: ${({ $open }) => $open ? '10px' : '0'};
  overflow: ${({ $open }) => $open ? 'hidden' : ''};
`;

export const SidebarMenuItemOpener = styled(Link)`
  padding-top: 16px;
  padding-bottom: ${({ $open }) => $open ? '18px' : '16px'};
  display: flex;
  align-items: center;
  column-gap: 12px;
  color: ${({ $open }) => $open ? globalColor.blue.blue400 : globalColor.blue.darkBlue};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  text-transform: capitalize;
  transition: ${globalTransition.default};

  &:hover {
    color: ${globalColor.blue.blue400};
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 1.43;
  }
`;

export const SidebarMenuItemIcon = styled.span`
  color: ${globalColor.blue.blue400};
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media_breakpoint_down('md')} {
    width: 24px;
    height: 24px;
  }
`;

export const SidebarMenuItemArrow = styled.span`
  margin-left: auto;
  transition: ${globalTransition.default};
  rotate: ${({ $open }) => $open ? '180deg' : '0deg'};
  color: ${({ $open }) => $open ? globalColor.blue.blue400 : ''};
`;

export const SidebarMenuItemContent = styled.div`
  display: grid;
  grid-template-rows: ${({ $open }) => $open ? '1fr' : '0fr'};
  opacity: ${({ $open }) => $open ? '1' : '0'};;
  overflow: ${({ $open }) => $open ? '' : 'hidden'};;
  pointer-events: ${({ $open }) => $open ? '' : 'none'};;
  transition: ${globalTransition.default};
`;

export const SidebarMenuItemContentList = styled.ul`
  min-height: 0;
`;

export const SidebarMenuSubitem = styled.li`
  transition: ${globalTransition.default};
  padding-bottom: ${({ $open }) => $open ? '6px' : '0'};
  overflow: ${({ $open }) => $open ? 'hidden' : ''};
`;

export const SidebarMenuSubitemOpener = styled(SidebarMenuItemOpener)`
  padding: 6px 0;
  column-gap: 4px;
  color: ${({ $open }) => $open ? globalColor.blue.darkBlue : globalColor.gray.gray110};
  font-weight: ${({ $isStrong }) => $isStrong ? 600 : 400};

  &:hover {
    color: ${globalColor.blue.darkBlue};
  }
`;

export const SidebarMenuSubitemIcon = styled.span`
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 2px;
    background-color: ${globalColor.gray.gray110};
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 12px;
    background-color: ${globalColor.gray.gray110};
    translate: ${({ $open }) => $open ? '0 100%' : ''};
    opacity: ${({ $open }) => $open ? '0' : '1'};;
    transition: ${globalTransition.default};
    
  }
`;

export const SidebarMenuSubitemContentItem = styled.li`
  margin-left: 24px;
`;

export const SidebarMenuSubitemContentLink = styled(SidebarMenuSubitemOpener)``;

export const SidebarMenuLinks = styled.div`
  padding-top: 16px;
  padding-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 20px;

  ${media_breakpoint_down('md')} {
    padding-bottom: 20px;
  }

  ${media_breakpoint_down('sm')} {
    flex-direction: column;
  }
`;

export const SidebarMenuLink = styled(Link)`
  padding: 4px 0;
  color: ${globalColor.blue.darkBlue};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  text-transform: capitalize;
  transition: ${globalTransition.default};

  &:hover {
    color: ${globalColor.blue.blue400};
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 1.43;
  }
`;


const sidebarBtnStyle = `
  padding: 11px 15px;
  border-radius: 4px;
  border: 1px solid ${globalColor.gray.gray500};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  color: ${globalColor.blue.darkBlue};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  transition: ${globalTransition.default};

  @media (hover: hover) {
    &:hover {
      color: ${globalColor.blue.darkBlue};
      border-color: ${globalColor.blue.blue400};

      > span {
        color: ${globalColor.blue.blue400};
      }
    }
  }

  &:hover {
    color: ${globalColor.blue.darkBlue};
  }
  
  &:active {
    color: ${globalColor.blue.blue400};
    border-color: ${globalColor.blue.blue400};

    > span {
      color: ${globalColor.blue.blue400};
    }
  }

  ${media_breakpoint_down('md')} {
    max-width: 50%;
    width: 100%;
    margin: 0 auto;
  }

  ${media_breakpoint_down('sm')} {
    padding: 9px 15px;
    max-width: 100%;
    font-size: ${rem(14)};
    line-height: 1.43;
  }
`;

export const SidebarMenuFooter = styled.div`
  margin-top: auto;
  padding: 24px 0;
  background-color: ${globalColor.gray.gray300};

  ${SidebarMenuContainer} {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  ${media_breakpoint_down('md')} {
    padding: 20px 0;
  }
`;

export const SidebarMenuButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 16px;
  justify-content: space-between;

  .sidebar-subscription-btn {
    ${sidebarBtnStyle};
  }

  .sidebar-contact-btn {
    display: none;

    ${media_breakpoint_down('md')} {
      margin: 0 auto;
      display: flex;
      max-width: 50%;
      width: 100%;
    }

    ${media_breakpoint_down('sm')} {
      max-width: 100%;
    }
  }

  ${media_breakpoint_down('md')} {
    flex-direction: column;
  }
`;

export const SidebarMenuButton = styled(Link)`
  ${sidebarBtnStyle};
`;

export const SidebarMenuButtonIcon = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${globalTransition.default};
`;