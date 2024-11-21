import styled from 'styled-components';
import Link from 'next/link';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
  media_breakpoint_range_exacly,
} from './mediaBreakpoints.style';
import { globalBorderRadius, globalColor, globalShadow, globalTransition, rem } from './global_styles/Global.styles';
import { PracticeContentSection } from './practices/PracticeContent.style';
import { TitleH2 } from './common/Typography.style';

const addressPointConst = `
      span {
        span {
          :first-child {
            align-self: flex-start;
          }
        }
      }
`;

export const LocationPageContainer = styled(PracticeContentSection)``;

export const LinkMapBox = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  row-gap: 16px;
`;

export const DownloadTheMap = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${globalColor.blue.ultramarine};
  width: fit-content;
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
  flex-direction: column;
  gap: 8px;

  ${media_breakpoint_down('sm')} {
    order: -1;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const BlueLinkTab = styled(Link)`
  padding: 7px 16px;
  color: ${globalColor.white};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  position: relative;
  display: flex;
  align-items: center;
  outline: none;
  transition: ${globalTransition.default};
  border-radius: ${globalBorderRadius.extraSmall};
  ${({ $isActiveLocation }) =>
    $isActiveLocation &&
    `
      background-color: ${globalColor.blue.blue6002};
      pointer-events: none;
    `}

  :before {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%) rotate(180deg);
    width: 12px;
    height: 20px;
    background-color: ${globalColor.blue.blue6002};
    clip-path: polygon(100% 50%, 0 0, 0% 100%);
    opacity: ${({ $isActiveLocation }) => $isActiveLocation ? '1' : '0'};
    transition: ${globalTransition.default};

    ${media_breakpoint_down('sm')} {
      display: none;
    }
  }

  :hover {
    background-color: ${globalColor.blue.blue6002};
    color: ${globalColor.white};

    :before {
      opacity: 1;
    }
  }

  ${media_breakpoint_down('sm')} {
    padding: 8px 12px;
    width: calc(50% - 4px);
    justify-content: center;
    font-size: ${rem(14)};
    font-weight: ${({ $isActiveLocation }) => $isActiveLocation ? '700' : '400'};
  }
`;

export const OfficeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0 20px;
  box-shadow: ${globalShadow.allSideShadow};
  ${({ backgroundColor }) => `
    background-color: ${backgroundColor};
  `}

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

export const OfficeLocationBoxTitle = styled(TitleH2)`
  margin: 0 0 24px 0;
  text-transform: uppercase;
  font-weight: 500;

  ${media_breakpoint_down('md')} {
    margin: 0 0 12px 0;
  }
`;
