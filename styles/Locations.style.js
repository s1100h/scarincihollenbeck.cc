import styled from 'styled-components';
import Link from 'next/link';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
  media_breakpoint_range_exacly,
} from './mediaBreakpoints.style';
import { globalColor, globalShadow, rem } from './global_styles/Global.styles';

const addressPointConst = `
      span {
        span {
          :first-child {
            position: relative;
            top: -18px;
            margin-top: 0;
          }
        }
      }
`;
export const LinkMapBox = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const DownloadTheMap = styled.a`
  display: flex;
  gap: 15px;
  color: #a91110;
  width: fit-content;
  margin-bottom: 15px;
  font-size: 1.2rem;
`;

export const MediaBr = styled.br`
  display: none;

  ${media_breakpoint_exactly_down(450)} {
    display: block;
  }
`;

export const OfficeTabs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  position: relative;
  z-index: 20;
  top: -50px;

  ${media_breakpoint_down('md')} {
    gap: 10px;
  }

  ${media_breakpoint_down('sm')} {
    top: -20px;
  }
`;

export const OfficeTab = styled(Link)`
  display: flex;
  justify-content: start;
  width: 220px;
  padding: 15px 10px;
  box-shadow: ${globalShadow.allSideShadow};
  text-transform: uppercase;
  font-weight: 600;
  position: relative;

  > div {
    width: 91%;
  }

  span {
    z-index: 1;
  }

  ${(props) => {
    return (
      props?.imgurl?.length > 0 &&
      `
      background: no-repeat url(${props?.imgurl});
      background-size: 50% 138%;
      background-position: right top 29%;
      color: ${globalColor.red.darkRed};
      box-shadow: ${globalShadow.hoveredShadow};
      cursor: default;
      pointer-events: none;
      `
    );
  }}

  :hover {
    box-shadow: ${globalShadow.hoveredShadow};
  }

  ${media_breakpoint_down('sm')} {
    width: 48%;
  }

  ${media_breakpoint_exactly_down(420)} {
    transition: 0.7s;
    width: ${(props) => (props?.imgurl?.length > 0 ? '76%' : '220px')};
  }
`;

export const OfficeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0 20px;
  box-shadow: ${globalShadow.allSideShadow};

  address {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px 0;
    font-size: 1.2rem;

    ${media_breakpoint_range_exacly(992, 1500)} {
      ${addressPointConst}
    }

    ${media_breakpoint_down('md')} {
      ${addressPointConst};
    }

    svg {
      color: ${globalColor.gray.gray80};
      margin-right: 5px;
    }

    > * {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

export const OfficeAttorneysContainer = styled.div`
  h4 {
    font-size: ${rem(32)};
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.8%;

    li {
      margin-bottom: 1.8%;
      article {
        width: 410px;
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    ul {
      li {
        width: 100%;
        article {
          width: 100%;
        }
      }
    }
  }
`;

export const OfficeLocationBoxTitle = styled.h4`
  font-size: ${rem(32)};
  text-transform: uppercase;
`;
