import styled from 'styled-components';
import { globalColor } from '../global_styles/Global.styles';

export const BioPagePrintContainer = styled.div`
  display: none;
  -webkit-print-color-adjust: exact; /* For Chrome */
  color-adjust: exact; /* For Firefox */

  @media print {
    * {
      font-size: 10px;
    }

    display: flex !important;
    flex-direction: column;
    padding-top: 10px;
    gap: 20px;

    .wrapper-pdf {
      display: flex;
      gap: 20px;

      .card-image-wrapper {
        margin-top: 6px;
        width: 188px;
        height: 186px;
      }
    }

    .profile-title {
      padding-top: 3px;
      h1 {
        margin-top: 3px;
        font-size: 1.2rem;
      }
      span {
        font-size: 1rem;
      }
    }

    .profile-services-wrapper {
      box-shadow: none;
      background-color: ${globalColor.gray.gray10};
    }

    .bio-list-info-boxes {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;

      ul {
        row-gap: 4px;
      }
    }

    .item-info-box {
      width: 250px;
      background-color: ${globalColor.gray.gray10};
      box-shadow: none;
      row-gap: 4px;

      div {
        row-gap: 4px;
      }

      li {
        font-size: 10px;
      }
    }

    .address-box {
      * {
        font-size: 10px;
      }
      svg {
        width: 12px;
        height: 12px;
      }
      flex: 1 1 calc((100% - 24px) / 2);
      box-shadow: none;
    }
  }

  .print-pdf-clients {
    column-count: 3;
    column-gap: 20px;
  }

  .print-pdf-representative-matters {
    column-count: 2;
    column-gap: 20px;
  }

  .print-pdf-title {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const InfoPrintBox = styled.div`
  column-count: 2;
  column-gap: 20px;
`;

export const FooterPrintVersionContainer = styled.div`
  display: none;
  -webkit-print-color-adjust: exact; /* For Chrome */
  color-adjust: exact; /* For Firefox */
  padding: 12px 20px;

  @media print {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 24px;
    background-color: ${globalColor.blue.blue6002};
    color: ${globalColor.white};
    .advertising-title-print {
      font-size: 10px;
      margin-bottom: 4px;
    }

    .advertising-text-print {
      font-size: 9px;
      margin-bottom: 24px;
    }
  }
`;

export const ContactsWrapperPrintVersion = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;

export const ContactsPrintVersion = styled.div`
  .location-print-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 8px;

    > :last-child {
      :after {
        content: '';
      }
    }

    &:nth-of-type(2) {
      font-weight: 700;
      margin-top: 8px;
    }
  }

  .location-print-item {
    color: ${globalColor.white};
    font-size: 12px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 8px;

    &:after {
      content: '•';
      color: ${globalColor.white};
    }
  }
`;

export const QRCodesBoxForPDF = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  right: 10px;
  top: 10px;
`;
