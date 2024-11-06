import styled, { keyframes } from 'styled-components';
import { ContentTooltip } from 'styles/Tooltip.style';
import {
  entAndMediaColors,
  globalColor,
  rem,
} from 'styles/global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

const fadeIn = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const EntertainmentClientsSection = styled.section`
  padding: 140px 0;
  background-color: ${globalColor.black};

  ${media_breakpoint_exactly_down(1850)} {
    padding: 120px 0;
  }

  ${media_breakpoint_exactly_down(1440)} {
    padding: 100px 0;
  }

  ${media_breakpoint_down('md')} {
    padding: 80px 0;
  }
`;
export const EntertainmentClientsSubtitle = styled.h5`
  margin: 0 0 28px 0;
  color: ${entAndMediaColors.entAndMediaColorMediumGray};
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.6px;

  ${media_breakpoint_exactly_down(1440)} {
    margin: 0 0 20px 0;
    font-size: ${rem(14)};
    line-height: 21px;
    letter-spacing: 1.4px;
  }

  ${media_breakpoint_down('md')} {
    margin: 0 0 16px 0;
  }
`;
export const EntertainmentClientsTitle = styled.h2`
  margin: 0 0 48px 0;
  color: ${entAndMediaColors.entAndMediaColorGold};
  font-family: var(--font-carilo);
  font-style: italic;
  font-size: ${rem(84)};
  font-weight: 400;
  line-height: 100px;

  ${media_breakpoint_exactly_down(1850)} {
    margin: 0 0 40px 0;
    font-size: ${rem(64)};
    line-height: 80px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    margin: 0 0 32px 0;
    font-size: ${rem(48)};
    line-height: 72px;
  }

  ${media_breakpoint_down('md')} {
    margin: 0 0 24px 0;
    font-size: 32px;
    line-height: 48px;
  }
`;
export const EntertainmentClientsDescription = styled.p`
  margin: 0 0 64px auto;
  max-width: 50%;
  color: ${globalColor.white};
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
  text-align: start;

  ${media_breakpoint_exactly_down(1850)} {
    margin: 0 0 48px auto;
    max-width: 60%;
  }

  ${media_breakpoint_exactly_down(1440)} {
    max-width: 80%;
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: 21px;
  }

  ${media_breakpoint_down('md')} {
    max-width: 100%;
  }
`;
export const EntertainmentClientsList = styled.div`
  .pagination {
    margin: 0 0 20px 0;
    gap: 16px;

    .page-item {
      width: 43px;
      height: 43px;
      border-radius: 50px;
      border: 1px solid ${entAndMediaColors.entAndMediaColorGold};
      background-color: transparent;
      overflow: hidden;
      a,
      span {
        color: ${entAndMediaColors.entAndMediaColorGold};
      }

      &.active {
        background-color: ${entAndMediaColors.entAndMediaColorGold};
        span {
          color: ${globalColor.gray.gray130};
        }
      }

      &.disabled {
        .pagination-icon {
          color: ${globalColor.gray.gray130};
        }
      }

      &:hover {
        a,
        span,
        svg {
          color: ${globalColor.white};
        }
      }
    }

    .page-link {
      padding: 0;
      background-color: transparent;
      border: 0;

      span {
        svg {
          color: ${entAndMediaColors.entAndMediaColorGold};
        }
      }

      &:hover, &:focus {
        color: ${globalColor.white};
        svg {
          color: ${globalColor.white};
        }
      }
    }

    ${media_breakpoint_down('md')} {
      gap: 8px;

      .page-item {
        width: 28px;
        height: 28px;
      }

      .page-link {
        font-size: ${rem(14)};
      }
    }

    ${media_breakpoint_down('sm')} {
      gap: 4px;
    }
  }
`;

export const EntertainmentClientsListItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const EntertainmentClientsItem = styled.div`
  ${({ color }) => {
    return `background-color: ${color};`;
  }}
  cursor: pointer;
  animation: ${fadeIn} 1s ease;

  &.open {
    ${(props) => {
      return `
          ${EntertainmentClientsItemOpener} {
            padding: 0;
            display: grid;
            grid-template-rows: 0fr;
            opacity: 0;
            visibility: hidden;
          }
          ${EntertainmentClientsItemContent} {
            padding: 24px;
            grid-template-rows: 1fr;
            opacity: 1;
            visibility: visible;

            ${media_breakpoint_exactly_down(1850)} {
              padding: 20px 26px;
            }

            ${media_breakpoint_exactly_down(1440)} {
              padding: 16px;
            }
          }

          ${EntertainmentClientsItemCategory} {
            :before {
              border-bottom: 0;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              border-top: 5px solid ${globalColor.black};
            }
          }
        `;
    }}
  }
`;

export const EntertainmentClientsItemOpenerWrapper = styled.div`
  min-height: 0;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const EntertainmentClientsItemOpener = styled.div`
  padding: 25px;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 24px;
  color: ${globalColor.black};
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100%;
  opacity: 1;
  visibility: visible;
  transition: all 0.5s ease;

  ${media_breakpoint_exactly_down(1850)} {
    padding: 20px 25px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    padding: 16px;
  }
`;
export const EntertainmentClientsItemCategory = styled.div`
  padding: 0 2.5% 0 20px;
  width: 33.33%;
  column-gap: 7.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 24px;
  color: ${globalColor.black};

  :before {
    content: '';
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid ${globalColor.black};
    border-bottom: 5px solid transparent;
    border-top: 5px solid transparent;
    transition: all 0.5s ease;
  }

  ${ContentTooltip} {
    left: 0;
  }

  ${media_breakpoint_exactly_down(1850)} {
    font-size: ${rem(14)};
    line-height: 21px;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(12)};
    line-height: 18px;
  }
`;
export const EntertainmentClientsItemName = styled.div`
  width: 33.33%;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(18)};
  font-weight: 600;
  line-height: 27px;
  color: ${globalColor.black};
  display: flex;
  justify-content: center;

  ${ContentTooltip} {
    left: 50%;
    transform: translateX(-50%);
  }

  ${media_breakpoint_exactly_down(1850)} {
    font-size: ${rem(16)};
    line-height: 24px;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 21px;
  }
`;
export const EntertainmentClientsItemProfession = styled.div`
  width: 33.33%;
  padding-left: 2.5%;
  column-gap: 7.5%;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: 24px;
  color: ${globalColor.black};
  display: flex;
  justify-content: space-between;

  ${ContentTooltip} {
    right: 0;
  }

  ${media_breakpoint_exactly_down(1850)} {
    font-size: ${rem(14)};
    line-height: 21px;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(12)};
    line-height: 18px;
  }
`;
export const EntertainmentClientsItemContent = styled.div`
  padding: 0;
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s ease;
`;
export const EntertainmentClientsItemContentWrapper = styled.div`
  min-height: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${media_breakpoint_down('md')} {
    align-items: center;
    flex-wrap: wrap;
    row-gap: 12px;
  }
`;
export const EntertainmentClientsItemContentCategory = styled.div`
  width: 25%;
  font-family: var(--font-carilo), sans-serif;
  font-size: ${rem(40)};
  font-weight: 400;
  line-height: 60px;
  color: ${globalColor.black};
  font-style: italic;

  ${media_breakpoint_exactly_down(1850)} {
    font-size: ${rem(32)};
    line-height: 48px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    font-size: ${rem(20)};
    line-height: 30px;
  }

  ${media_breakpoint_down('md')} {
    width: 50%;
    font-size: ${rem(16)};
    line-height: 24px;
    order: 1;
  }
`;
export const EntertainmentActionBlockContentImage = styled.div`
  width: 240px;
  height: 240px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media_breakpoint_exactly_down(1850)} {
    width: 200px;
    height: 200px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    width: 120px;
    height: 120px;
  }

  ${media_breakpoint_down('md')} {
    width: 100px;
    height: 100px;
    order: 3;
  }
`;
export const EntertainmentClientsItemContentName = styled.div`
  width: 25%;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(24)};
  font-weight: 600;
  line-height: 36px;
  color: ${globalColor.black};
  display: flex;
  justify-content: center;

  ${media_breakpoint_exactly_down(1850)} {
    font-size: ${rem(18)};
    line-height: 27px;
  }

  ${media_breakpoint_down('md')} {
    justify-content: flex-end;
    text-align: end;
    width: 50%;
    font-size: ${rem(14)};
    line-height: 21px;
    order: 2;
  }
`;
export const EntertainmentClientsItemContentProfession = styled.div`
  width: 25%;
  color: ${globalColor.black};
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(18)};
  font-weight: 400;
  line-height: 27px;
  display: flex;
  justify-content: flex-end;

  ${media_breakpoint_exactly_down(1850)} {
    font-size: ${rem(14)};
    line-height: 21px;
  }

  ${media_breakpoint_down('md')} {
    text-align: end;
    width: 50%;
    font-size: ${rem(12)};
    line-height: 18px;
    order: 4;
  }
`;
