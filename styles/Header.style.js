import styled from 'styled-components'
import {
  media_breakpoint_down,
  media_breakpoint_up,
  media_breakpoint_exactly,
} from './mediaBreakpoints.style'

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 1.5%;
  padding-right: 1.5%;
  height: 19vh;
  width: 100vw;
  background: #fff;
  box-shadow: ${({ scrollDown }) => (scrollDown ? '-2px 0px 10px rgb(0 0 0 / 13%);' : 'none')};
  position: sticky;
  top: 0;
  z-index: 1020;

  ${media_breakpoint_down('lg')} {
    height: 14vh;
  }

  ${media_breakpoint_down('md')} {
    height: 21vh;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;
  height: 46px;

  .scroll-search {
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    .form-group {
      margin-bottom: 0;
      & > svg {
        transform: translateY(-4%);
      }
    }
  }
`
export const DesktopVisible = styled.div`
  ${media_breakpoint_down('lg')} {
    width: 55%;
  }

  ${media_breakpoint_up('md')} {
    display: flex;
    width: 48%;
  }

  ${media_breakpoint_down('md')} {
    display: none;
  }
`

export const MobileVisible = styled.div`
  ${media_breakpoint_up('md')} {
    display: none;
  }

  ${media_breakpoint_down('md')} {
    display: flex;
    margin-top: 20px;
    margin-left: 3%;

    .scroll-search {
      width: 97%;
    }
  }

  ${media_breakpoint_exactly('430px')} {
    width: 97vw;
  }
`

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
`

export const LinksBox = styled.div`
  display: flex;
  gap: 20px;
`
