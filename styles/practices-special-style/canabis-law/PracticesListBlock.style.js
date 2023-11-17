import styled from 'styled-components';
import {
  beforeDoteStyledList,
  cannabisLawColors,
  globalColor,
  imageCoverBlock,
  paragraphStyles,
  rem,
} from '../../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../../mediaBreakpoints.style';

export const PracticesListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 0 160px;
  background: ${imageCoverBlock('/images/smoge.webp')};
  position: relative;

  > div {
    display: flex;
    justify-content: center;

    h3 {
      margin-left: 0;
      margin-right: auto;
      margin-bottom: 50px;
      color: ${cannabisLawColors.cannabisColorGray};
      font-size: ${rem(54)};
      line-height: 70px;
      font-weight: 600;
      font-family: var(--font-poppins), sans-serif;

      ${media_breakpoint_down('xxl')} {
        font-size: ${rem(36)};
        line-height: 47px;
      }
    }

    ul {
      column-count: 3;
      column-span: all;
      position: relative;
      z-index: 2;

      li {
        padding-left: 15px;
        a {
          ${paragraphStyles}
          ${beforeDoteStyledList}
				position: relative;

          :before {
            background-color: ${globalColor.white};
            top: 10px;
          }

          :hover {
            cursor: pointer;
            border-bottom: 1px solid ${globalColor.white};
          }
        }
      }
    }

    div {
      width: 100%;
      position: relative;

      .cannabis-leafs-box {
        display: flex;
        top: 80px;
        gap: 23%;
        position: absolute;
        z-index: 1;

        > :first-child {
          margin-left: 22%;
        }
      }
    }

    ${media_breakpoint_exactly_down(870)} {
      ul {
        li {
          a {
            font-size: 1rem;
          }
        }
      }
    }

    ${media_breakpoint_down('md')} {
      ul {
        column-count: 2;

        li {
          a {
            font-size: 1.2rem;
          }
        }
      }
    }

    ${media_breakpoint_down('sm')} {
      h3 {
        font-size: ${rem(24)};
        line-height: 32px;
      }
    }

    ${media_breakpoint_exactly_down(520)} {
      .cannabis-leafs-box {
        > :last-child {
          display: none;
        }
      }

      ul {
        column-count: 1;
      }
    }
  }

  ${media_breakpoint_down('lg')} {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;
