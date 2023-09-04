import styled from 'styled-components';
import { media_breakpoint_down, media_breakpoint_range, media_breakpoint_exactly_down } from './mediaBreakpoints.style';
import { globalColor } from './global_styles/Global.styles';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 1.5%;
  padding-right: 1.5%;
  height: fit-content;
  width: 100%;
  background: ${globalColor.white};
  box-shadow: ${({ scrollDown }) => (scrollDown ? '-2px 0px 10px rgb(0 0 0 / 13%);' : 'none')};
  position: sticky;
  top: 0;
  z-index: 1020;

  @media print {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${media_breakpoint_range('sm', 'lg')} {
    margin-top: 5px;
  }
`;
export const DefaultHeaderSearchContainer = styled.div`
  position: relative;
  margin-right: 50px;
  flex: 3;

  .search-result-container {
    margin-top: 0;
    width: 100%;
  }

  ${media_breakpoint_down('lg')} {
    width: 80%;
    margin: auto auto 10px;
    order: 3;
    flex: none;
  }

  ${media_breakpoint_down('md')} {
    .search-result-container {
      width: -webkit-fill-available;
    }
  }

  ${media_breakpoint_down('sm')} {
    width: 100%;
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
  margin-right: 10px;

  .link-btn-header {
    height: 50px;
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
`;
