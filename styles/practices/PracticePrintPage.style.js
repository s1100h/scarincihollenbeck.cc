import styled from 'styled-components';
import { globalColor, rem } from 'styles/global_styles/Global.styles';
import { SubHeaderDescription, SubHeaderInteractive } from './SubHeader.style';
import { QRCodesBoxForPDF } from 'styles/attorney-page/AttorneyPrintPage.style';
import { TitleH2, TitleH3 } from 'styles/common/Typography.style';
import { AttorneyCardBox, LinkBox } from 'styles/AttorneyCard.style';
import { WhyChooseUsSection } from './WhyChooseUs.style';
import { CombinedLogo } from 'styles/SiteLogo.style';

export const PracticePrintPageContainer = styled.div`
  display: none;
  flex-direction: column;
  gap: 40px;

  @media print {
    @page {
      size: A3 !important;
      margin: 10mm;
    }
  }

  @media print {
    display: flex !important;
  }

  ${WhyChooseUsSection} {
    padding: 0;
  }
`;

export const HeaderWrapperPrintVersion = styled.div`
  background-color: ${globalColor.gray.gray10};
  padding: 40px 0;
`;

export const HeaderPrintVersionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  padding: 12px 24px;
  border-radius: 16px;
  border: 1px solid #cbcbcb;
  margin-bottom: 32px;

  .contacts-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-shrink: 0;
  }

  .contacts-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${globalColor.blue.darkBlue};
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;

    &:hover,
    &:focus {
      color: ${globalColor.blue.blue500};
    }

    svg {
      width: 16px;
      height: 16px;
      fill: ${globalColor.blue.blue500};
    }
  }

  .locations-list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
  }

  .locations-list {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 0 8px;

    > :nth-child(1) {
      :before {
        display: none;
      }
    }

    .locations-item {
      display: flex;
      align-items: center;
      gap: 8px;

      &:before {
        content: '•';
        color: ${globalColor.blue.darkBlue};
      }
    }
  }

  .locations-item {
    color: ${globalColor.blue.darkBlue};
    font-size: 12px;
    line-height: 16px;

    &:hover,
    &:focus {
      color: ${globalColor.blue.blue500};
    }
  }

  ${CombinedLogo} {
    flex-shrink: 0;
  }
`;

export const SubHeaderPrintVersionContainer = styled.div`
  max-width: 100%;
  display: flex;
  /* display: grid;
  grid-template-columns: 0.35fr 0.65fr; */
  /* grid-template-columns: repeat(2, 1fr); */
  gap: 24px;

  ${SubHeaderInteractive} {
    width: 40%;
    flex-shrink: 0;
    flex: unset;
    border-radius: 12px;
    padding: 12px 24px;

    ${AttorneyCardBox} {
      img {
        filter: none;
        width: 120px;
        height: 120px;
      }

      ${LinkBox} {
        > img {
          width: 120px;
          height: 120px;
        }
      }

      .contact-offices {
        @media print {
          display: none;
        }
      }
    }
  }

  ${QRCodesBoxForPDF} {
    gap: 24px;
    padding-left: 128px;
    margin-top: 20px;
  }
`;

export const SubHeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  ${TitleH2} {
    color: ${globalColor.black};
  }

  a {
    word-break: break-word;
    color: ${globalColor.blue.blue500};

    &:hover,
    &:focus {
      color: ${globalColor.blue.blue400};
    }
  }

  ${SubHeaderDescription} {
    flex: 1;
    background-color: ${globalColor.gray.gray1002};
    border-radius: 12px;
    padding: 16px 24px;
    box-shadow: 0px 2px 16px 0px rgba(10, 62, 108, 0.08);
    font-size: ${rem(14)};
    line-height: 20px;
  }
`;

export const DescriptionSectionPrint = styled.section`
  ${TitleH2} {
    margin-bottom: 20px;
    font-size: ${rem(32)};
    line-height: 1.38;
    font-weight: 600;
  }

  ${TitleH3} {
    margin-bottom: 8px;
    font-size: ${rem(20)};
    line-height: 1.6;
    font-weight: 600;
  }

  h3,
  h4 {
    color: ${globalColor.blue.darkBlue};
    font-size: ${rem(18)};
    line-height: 1.6;
    font-weight: 600;
    font-family: var(--font-poppins);

    strong {
      font-weight: inherit;
    }
  }
`;

export const DescriptionArticlePrint = styled.article`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;
