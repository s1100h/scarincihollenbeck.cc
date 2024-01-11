import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import empty from 'is-empty';
import { media_breakpoint_exactly_down } from './mediaBreakpoints.style';

export const InfoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.3fr 0.5fr 1fr;
  grid-gap: 28px;

  > :nth-child(1) {
    grid-column: 1 / 2;
    grid-row: 1 / 1;

    img {
      height: 142px;
      width: 158px;
    }
  }

  > :nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 2;

    img {
      height: 100%;
      width: 200px;
      object-fit: cover;
    }
  }

  > :nth-child(3) {
    grid-column: 2 / 2;
    grid-row: 1 / 3;
    height: auto;
  }

  > :nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 3 / 3;
    flex-direction: row-reverse;
    width: 100%;
    height: 348px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    div {
      width: 30%;
      margin-right: 32px;
      padding-bottom: 0;

      article {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
        margin-top: 0;

        button {
          height: auto;
          padding: 10px 89px;
          line-height: 24px;
          background-color: ${globalColor.blue.blue500};
          position: relative;
          z-index: 0;
          border-radius: 2px;

          &:hover {
            &::after {
              opacity: 1;
            }
          }

          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            opacity: 0;
            background-image: linear-gradient(
              89deg,
              #377ec4 2.36%,
              #afdcf5 107.09%
            );
            transition: all 0.5s ease;
          }
        }
      }
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
    > :nth-child(1) {
      img {
        margin-top: 32px;
      }
    }

    > :nth-child(2) {
      flex-direction: column;

      img {
        width: 100%;
        height: 164px;
      }
    }

    > :nth-child(3) {
      width: 640px;
    }

    > :nth-child(4) {
      div {
        margin-right: 0;
      }
    }
  }
`;

export const ArticleLocationBox = styled.article`
  display: flex;
  background-color: ${globalColor.blue.darkBlue};
  align-items: center;
  ${({ background }) =>
    !empty(background) &&
    `
	background-image: url(${background});
	background-size: cover;
  background-repeat: no-repeat;
	`}

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
    padding-right: 0;
    background-color: ${globalColor.blue.darkBlue};

    p {
      font-weight: 700;
      color: ${globalColor.white};
      line-height: 32px;
      font-size: 1rem;
      margin-bottom: 12px;
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
    align-items: flex-start;

    div {
      padding: 16px;

      p {
        font-size: ${rem(14)};
        line-height: 23px;
      }
    }
  }
`;

export const PracticesLocationBox = styled.div`
  display: flex;
  width: 840px;
  height: 602px;
  background-color: ${globalColor.blue.darkBlue};
  overflow: auto;
  padding: 16px 40px;

  * {
    color: ${globalColor.white};
  }
`;
