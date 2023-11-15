import styled from 'styled-components';
import {
  entAndMediaColors,
  globalColor,
  rem,
} from 'styles/global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const EntertainmentInfoSection = styled.section`
  padding: 140px 0;
  position: relative;
  overflow: hidden;

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
export const EnterntainmentTabNumber = styled.span`
  margin: 0 0 32px 0;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  line-height: 24px;
  font-weight: 400;
  color: ${entAndMediaColors.entAndMediaColorGray};
  display: flex;
  align-items: center;
  column-gap: 10px;

  :before {
    content: '';
    display: flex;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 5px solid ${entAndMediaColors.entAndMediaColorGray};
    border-bottom: 5px solid transparent;
  }

  ${media_breakpoint_exactly_down(1440)} {
    margin: 0 0 26px 0;
    font-size: ${rem(14)};
    line-height: 21px;
  }
`;
export const EnterntainmentTabHeader = styled.div`
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;

  .delimiter {
    margin: 40px 100px 0;

    svg {
      width: 100%;
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
    align-items: center;

    .delimiter {
      margin: 25px 50px 0;
      align-self: flex-start;
    }
  }

  ${media_breakpoint_down('md')} {
    margin-bottom: 26px;
    align-items: flex-start;
    flex-direction: column;

    .delimiter {
      display: none;
    }
  }
`;
export const EnterntainmentTabTitleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const EnterntainmentTabTitle = styled.h2`
  margin: 0;
  color: ${globalColor.black};
  font-family: var(--font-carilo), sans-serif;
  font-size: ${rem(84)};
  line-height: 100px;
  font-weight: 400;
  font-style: italic;

  &.title-indent {
    margin-left: 90px;
  }

  ${media_breakpoint_exactly_down(1850)} {
    font-size: ${rem(64)};

    &.title-indent {
      margin-left: 70px;
    }
  }

  ${media_breakpoint_exactly_down(1440)} {
    font-size: ${rem(48)};
    line-height: 72px;

    &.title-indent {
      margin-left: 50px;
    }
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(32)};
    line-height: 48px;

    &.title-indent {
      margin-left: 30px;
    }
  }
`;
export const EnterntainmentTabBtns = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  column-gap: 24px;

  ${media_breakpoint_exactly_down(1850)} {
    margin-top: 25px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    margin-top: 0;
    align-items: flex-end;
    flex-direction: column;
    row-gap: 24px;
  }

  ${media_breakpoint_down('md')} {
    row-gap: 16px;
    align-self: flex-end;
  }
`;
export const EnterntainmentTabBtn = styled.a`
  min-width: max-content;
  cursor: pointer;
  padding: 16px 24px;
  font-size: ${rem(18)};
  font-weight: 600;
  line-height: 27px;
  font-family: var(--font-poppins), sans-serif;
  color: ${globalColor.white};
  background-color: ${globalColor.black};
  border-radius: 40px;
  border: 2px solid transparent;
  transition: all 0.5s ease;
  display: block;

  &:hover {
    border: 2px solid ${globalColor.black};
    background-color: ${globalColor.white};
    color: ${globalColor.black};
  }

  &.btn-white {
    border: 2px solid ${globalColor.black};
    background-color: ${globalColor.white};
    color: ${globalColor.black};

    &:hover {
      background-color: ${globalColor.black};
      color: ${globalColor.white};
    }
  }

  ${media_breakpoint_exactly_down(1850)} {
    padding: 12px 24px;
    font-size: ${rem(16)};
    line-height: 24px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: ${rem(14)};
    line-height: 21px;
  }
`;
export const EnterntainmentTabNavbar = styled.div`
  margin: 0 0 48px 0;
  display: flex;
  flex-direction: column;
  row-gap: 11px;

  ${media_breakpoint_exactly_down(1440)} {
    font-size: ${rem(14)};
    line-height: 21px;
    margin-bottom: 32px;
  }
`;
export const EnterntainmentTabNavbarItem = styled.div`
  width: max-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: ${rem(16)};
  font-family: var(--font-poppins), sans-serif;
  font-weight: 400;
  line-height: 24px;
  color: ${globalColor.grayExtraLite.grayExtraLite50};
  transition: all 0.5s ease;

  ::before {
    content: '';
    display: flex;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 5px solid ${globalColor.grayExtraLite.grayExtraLite50};
    border-bottom: 5px solid transparent;
    transition: all 0.5s ease;
  }

  &.active,
  &:hover {
    color: ${globalColor.black};

    ::before {
      border-left: 5px solid ${globalColor.black};
    }
  }
`;
export const EnterntainmentTabContent = styled.div`
  padding: 0 140px;
  display: grid;
  grid-template-columns: 1fr 40%;
  align-items: center;
  gap: 48px;

  &.full-image {
    grid-template-columns: 1fr;
    row-gap: 32px;
    ${() => {
      return `
        ${EnterntainmentTabImage} {
          max-height: 328px;
          order: 2;
        }
        ${EnterntainmentTabDescription} {
          order: 1;
        }
        ${EnterntainmentTabList} {
          order: 3;
          display: grid;
          column-gap: 20px;
          grid-template-columns: 1fr 1fr;

          ${media_breakpoint_down('md')} {
            grid-template-columns: 1fr;
          }
        }
      `;
    }}
  }

  &.right-image {
    grid-template-columns: 1fr 1fr;
    ${() => {
      return `
        ${EnterntainmentTabImage} {
          order: 3;
          grid-column: 2 / 3;
          grid-row: 1 / span 2;
          height: 552px;

          ${media_breakpoint_down('md')} {
            grid-column: 1;
            grid-row: 1;
            height: 240px;
          }
        }
        ${EnterntainmentTabDescription} {
          order: 1;
        }
        ${EnterntainmentTabList} {
          max-width: 537px;
          order: 2;
          margin-left: auto;
        }
      `;
    }}

    ${media_breakpoint_down('md')} {
      grid-template-columns: 1fr;
    }
  }

  ${media_breakpoint_exactly_down(1850)} {
    padding: 0 108px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    padding: 0;
    gap: 32px;
    grid-template-columns: 1fr 1fr;
  }

  ${media_breakpoint_down('md')} {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;
export const EnterntainmentTabImage = styled.div`
  width: 100%;
  max-height: 624px;
  height: 100%;
  grid-row: span 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-width: 100%;
    filter: grayscale(100%);
  }

  ${media_breakpoint_down('md')} {
    height: 240px;
  }
`;
export const EnterntainmentTabDescription = styled.div`
  color: ${entAndMediaColors.entAndMediaColorMediumGray};
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  line-height: 24px;
  font-weight: 400;
  text-transform: uppercase;

  ${media_breakpoint_exactly_down(1440)} {
    font-size: ${rem(14)};
    line-height: 21px;
  }
`;
export const EnterntainmentTabList = styled.ul`
  margin: 0;
`;
export const EnterntainmentTabListItem = styled.li`
  color: ${globalColor.black};
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  line-height: 24px;
  font-weight: 600;
  display: flex;

  ::before {
    content: '•';
    color: ${globalColor.black};
    margin-right: 0.5em;
  }

  ${media_breakpoint_exactly_down(1440)} {
    font-size: ${rem(14)};
    line-height: 21px;
  }
`;
