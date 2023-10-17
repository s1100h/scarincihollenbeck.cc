import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import { GradientPracticeBox } from './Post/PostSideBar.style';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';

export const ArticleBox = styled.article`
  h1 {
    font-size: ${rem(64)};
    font-weight: 600;
    margin-bottom: 30px;
  }
`;

export const TilesBox = styled.div`
  display: flex;
  gap: 10px;

  article {
    flex-basis: auto;

    &:first-child,
    &:nth-child(2) {
      flex-basis: auto;
    }
  }

  ${media_breakpoint_down('sm')} {
    flex-direction: column;
  }
`;

export const LinkListBox404 = styled(GradientPracticeBox)`
  display: flex;
  justify-content: space-between;
  background: none;
  padding-left: 0;
  padding-right: 0;

  h3 {
    font-size: 1.2rem;
    color: ${globalColor.gray.gray80};
  }

  ul {
    height: fit-content;

    li {
      a {
        color: ${globalColor.blue.dirtyBlue};

        :hover {
          color: ${globalColor.red.darkRed};
        }
      }
    }
  }
`;

export const ImageBlindLady = styled.div`
  display: flex;
  width: 90%;
  height: 550px;
  position: relative;

  ${media_breakpoint_down('xl')} {
    height: 450px;
  }

  ${media_breakpoint_down('lg')} {
    display: none;
  }
`;

export const ImageAttorneysGroup = styled.div`
  display: none;

  ${media_breakpoint_down('lg')} {
    display: flex;
    width: 350px;
    height: 150px;
    position: relative;
    bottom: 20%;
    margin-right: 0;
    margin-left: auto;
  }

  ${media_breakpoint_exactly_down(485)} {
    width: 55vw;
    bottom: 21vh;
  }
`;
