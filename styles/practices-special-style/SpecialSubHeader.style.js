import styled from 'styled-components';
import { globalColor, rem } from '../global_styles/Global.styles';

import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../mediaBreakpoints.style';
import { FullHDContainer } from './commonForSpecial.style';
import { BreadcrumbsListContainer } from 'styles/Breadcrumbs.style';

export const SpecialSubHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 155px 0 50px;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat;
  background-size: cover;
  position: relative;
  overflow: hidden;

  ${FullHDContainer} {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .breadcrumb-container {
    li {
      a,
      button {
        color: ${globalColor.grayExtraLite.grayExtraLite50};
        font-size: ${rem(14)};
        line-height: 21px;
        font-weight: 400;
      }

      span {
        color: ${globalColor.gray.gray40};
        font-size: ${rem(14)};
        line-height: 21px;
        font-weight: 400;
      }

      svg {
        color: ${globalColor.grayExtraLite.grayExtraLite50};
      }
    }
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  h1 {
    width: 400px;
    font-size: 12rem;
    font-weight: 300;
    line-height: 170px;
    color: ${globalColor.white};
  }

  ${BreadcrumbsListContainer} {
    position: relative;
    margin-bottom: 40px;

    > :last-child {
      span {
        color: ${globalColor.white};
      }
    }
  }

  ${media_breakpoint_down('xl')} {
    padding: 155px 0 50px;

    h1 {
      width: 350px;
      font-size: 10rem;
    }
  }

  ${media_breakpoint_down('lg')} {
    padding: 112px 0 50px;
    h1 {
      width: 300px;
      font-size: 8rem;
      line-height: 112px;
    }
  }

  ${media_breakpoint_down('md')} {
    padding: 95px 0 50px;
    h1 {
      font-size: 8rem;
    }
  }

  ${media_breakpoint_exactly_down(630)} {
    h1 {
      width: 220px;
      font-size: 6rem;
      line-height: 100px;
    }
  }

  ${media_breakpoint_down('sm')} {
    padding: 95px 0 50px;
    h1 {
      font-size: 5rem;
      line-height: 69px;
    }
  }

  ${media_breakpoint_exactly_down(396)} {
    h1 {
      font-size: 4rem;
      line-height: 56px;
    }
  }
`;

export const MiddleContainer = styled.div`
  margin-bottom: 55px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  position: relative;

  ${media_breakpoint_exactly_down(645)} {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;

    :last-child {
      align-items: start;
    }
  }
`;
