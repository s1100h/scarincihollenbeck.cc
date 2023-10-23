import styled, { keyframes } from "styled-components";
import { ContentTooltip } from "styles/Tooltip.style";
import { entAndMediaColors, globalColor, rem } from "styles/global_styles/Global.styles";

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
  padding: ${rem(140)} 0;
  background-color: ${globalColor.black};

  @media (max-width: 1850px) {
    padding: ${rem(120)} 0;
  }

  @media (max-width: 1440px) {
    padding: ${rem(100)} 0;
  }

  @media (max-width: 768px) {
    padding: ${rem(80)} 0;
  }
`;
export const EntertainmentClientsSubtitle = styled.h5`
  margin: 0 0 ${rem(28)} 0;
  color: ${entAndMediaColors.entAndMediaColorMediumGray};
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: ${rem(24)};
  letter-spacing: ${rem(1.6)};

  @media (max-width: 1440px) {
    margin: 0 0 ${rem(20)} 0;
    font-size: ${rem(14)};
    line-height: ${rem(21)};
    letter-spacing: ${rem(1.4)};
  }

  @media (max-width: 768px) {
    margin: 0 0 ${rem(16)} 0;
  }
`;
export const EntertainmentClientsTitle = styled.h2`
  margin: 0 0 ${rem(48)} 0;
  color: ${entAndMediaColors.entAndMediaColorGold};
  font-family: var(--font-poppins), sans-serif;
  font-style: italic;
  font-size: ${rem(84)};
  font-weight: 400;
  line-height: ${rem(100)};
  text-transform: uppercase;

  @media (max-width: 1850px) {
    margin: 0 0 ${rem(40)} 0;
    font-size: ${rem(64)};
    line-height: ${rem(80)};
  }

  @media (max-width: 1440px) {
    margin: 0 0 ${rem(32)} 0;
    font-size: ${rem(48)};
    line-height: ${rem(72)};
  }

  @media (max-width: 768px) {
    margin: 0 0 ${rem(24)} 0;
    font-size: ${rem(32)};
    line-height: ${rem(48)};
  }
`;
export const EntertainmentClientsDescription = styled.p`
  margin: 0 0 ${rem(64)} auto;
  max-width: 50%;
  color: ${globalColor.white};
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: ${rem(24)};
  text-transform: uppercase;
  text-align: start;

  @media (max-width: 1850px) {
    margin: 0 0 ${rem(48)} auto;
    max-width: 60%;
  }

  @media (max-width: 1440px) {
    max-width: 80%;
    font-size: ${rem(14)};
    font-weight: 400;
    line-height: ${rem(21)};
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const EntertainmentClientsList = styled.div`

  .pagination {
    margin: 0 0 ${rem(20)} 0;
    column-gap: ${rem(16)};
  }

  .page-item {
    width: ${rem(43)};
    height: ${rem(12)};
    border-radius: ${rem(20)};
    border: ${rem(1)} solid ${entAndMediaColors.entAndMediaColorGold};
    background-color: transparent;
    overflow: hidden;

    &.active {
      background-color: ${entAndMediaColors.entAndMediaColorGold};
    }
  }

  .page-link {
    width: 100%;
    height: 100%;
    padding: 0;
    color: transparent;
    background-color: transparent;
    border: 0;
  }

  @media (max-width: 1850px) {
    .page-item {
      width: ${rem(30)};
      height: ${rem(10)};
    }
  }

  @media (max-width: 1440px) {
    .page-item {
      width: ${rem(35)};
      height: ${rem(12)};
    }
  }
`;

export const EntertainmentClientsListItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${rem(20)};
`;

export const EntertainmentClientsItem = styled.div`

  ${({color}) => {
      return `background-color: ${color};`
    }
  }
  cursor: pointer;
  animation: ${fadeIn} 1s ease;

  &.open {
    ${props => {
        return `
          ${EntertainmentClientsItemOpener} {
            padding: 0;
            display: grid;
            grid-template-rows: 0fr;
            opacity: 0;
            visibility: hidden;
          }
          ${EntertainmentClientsItemContent} {
            padding: ${rem(24)};
            grid-template-rows: 1fr;
            opacity: 1;
            visibility: visible;

            @media (max-width: 1850px) {
              padding: ${rem(20)} ${rem(26)};
            }

            @media (max-width: 1440px) {
              padding: ${rem(16)};
            }
          }

          ${EntertainmentClientsItemCategory} {
            :before {
              border-bottom: 0;
              border-left: ${rem(5)} solid transparent;
              border-right: ${rem(5)} solid transparent;
              border-top: ${rem(5)} solid ${globalColor.black};
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
  padding: ${rem(25)};
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: ${rem(24)};
  color: ${globalColor.black};
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100%;
  opacity: 1;
  visibility: visible;
  transition: all 0.5s ease;

  @media (max-width: 1850px) {
    padding: ${rem(20)} ${rem(25)};
  }

  @media (max-width: 1440px) {
    padding: ${rem(16)};
  }
`;
export const EntertainmentClientsItemCategory = styled.div`
  padding: 0 2.5% 0 ${rem(20)};
  width: 33.33%;
  column-gap: 7.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: ${rem(24)};
  color: ${globalColor.black};
  
  :before {
    content: '';
    position: absolute;
    left: ${rem(25)};
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: ${rem(5)} solid ${globalColor.black};
    border-bottom: ${rem(5)} solid transparent;
    border-top: ${rem(5)} solid transparent;
    transition: all 0.5s ease;
  }

  ${ContentTooltip} {
    left: 0;
  }

  @media (max-width: 1850px) {
    font-size: ${rem(14)};
    line-height: ${rem(21)};
  }

  @media (max-width: 768px) {
    font-size: ${rem(12)};
    line-height: ${rem(18)};
  }
`;
export const EntertainmentClientsItemName = styled.div`
  width: 33.33%;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(18)};
  font-weight: 600;
  line-height: ${rem(27)};
  color: ${globalColor.black};
  display: flex;
  justify-content: center;

  ${ContentTooltip} {
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 1850px) {
    font-size: ${rem(16)};
    line-height: ${rem(24)};
  }

  @media (max-width: 768px) {
    font-size: ${rem(14)};
    line-height: ${rem(21)};
  }
`;
export const EntertainmentClientsItemProfession = styled.div`
  width: 33.33%;
  padding-left: 2.5%;
  column-gap: 7.5%;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: ${rem(24)};
  color: ${globalColor.black};
  display: flex;
  justify-content: space-between;

  ${ContentTooltip} {
    right: 0;
  }

  @media (max-width: 1850px) {
    font-size: ${rem(14)};
    line-height: ${rem(21)};
  }

  @media (max-width: 768px) {
    font-size: ${rem(12)};
    line-height: ${rem(18)};
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

  @media (max-width: 768px) {
    align-items: center;
    flex-wrap: wrap;
    row-gap: ${rem(12)};
  }
`;
export const EntertainmentClientsItemContentCategory = styled.div`
  width: 25%;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(40)};
  font-weight: 400;
  line-height: ${rem(60)};
  color: ${globalColor.black};
  text-transform: uppercase;
  font-style: italic;

  @media (max-width: 1850px) {
    font-size: ${rem(32)};
    line-height: ${rem(48)};
  }

  @media (max-width: 1440px) {
    font-size: ${rem(20)};
    line-height: ${rem(30)};
  }

  @media (max-width: 768px) {
    width: 50%;
    font-size: ${rem(16)};
    line-height: ${rem(24)};
    order: 1;
  }
`;
export const EntertainmentActionBlockContentImage = styled.div`
  width: ${rem(240)};
  height: ${rem(240)};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1850px) {
    width: ${rem(200)};
    height: ${rem(200)};
  }

  @media (max-width: 1440px) {
    width: ${rem(120)};
    height: ${rem(120)};
  }

  @media (max-width: 768px) {
    width: ${rem(100)};
    height: ${rem(100)};
    order: 3;
  }
`;
export const EntertainmentClientsItemContentName = styled.div`
  width: 25%;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(24)};
  font-weight: 600;
  line-height: ${rem(36)};
  color: ${globalColor.black};
  display: flex;
  justify-content: center;

  @media (max-width: 1850px) {
    font-size: ${rem(18)};
    line-height: ${rem(27)};
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
    text-align: end;
    width: 50%;
    font-size: ${rem(14)};
    line-height: ${rem(21)};
    order: 2;
  }
`;
export const EntertainmentClientsItemContentProfession = styled.div`
  width: 25%;
  color: ${globalColor.black};
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(18)};
  font-weight: 400;
  line-height: ${rem(27)};
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1850px) {
    font-size: ${rem(14)};
    line-height: ${rem(21)};
  }

  @media (max-width: 768px) {
    text-align: end;
    width: 50%;
    font-size: ${rem(12)};
    line-height: ${rem(18)};
    order: 4;
  }
`;