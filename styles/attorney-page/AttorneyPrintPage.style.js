import styled from 'styled-components';
import { globalColor, rem } from '../global_styles/Global.styles';
import { Title32, Title20 } from 'styles/common/Typography.style';

export const BioPagePrintContainer = styled.div`
  @media print {
    display: flex !important;
    flex-direction: column;
    padding-top: 10px;
    gap: 20px;

    .wrapper-pdf {
      display: flex;
      gap: 20px;

      .card-image-wrapper {
        min-height: auto;
        margin-top: 6px;
        width: 188px;
        height: 186px;
      }
    }

    .profile-title {
      padding-top: 3px;
      ${Title32} {
        margin: 3px 0 0 0;
      }
      span {
        font-size: ${rem(16)};
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
        font-size: ${rem(10)};
      }
    }

    .address-box {
      * {
        font-size: ${rem(10)};
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

  ${Title20} {
    margin-bottom: 8px;
  }
`;

export const InfoPrintBox = styled.div`
  column-count: 2;
  column-gap: 20px;

  p,
  ul {
    margin-bottom: 8px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
