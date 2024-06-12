import styled from 'styled-components';
import { globalColor } from './global_styles/Global.styles';

export const SearchedItem = styled.section`
  padding: 10px 30px;

  :hover {
    background-color: ${globalColor.graySmoke.whiteSmoke};
  }

  a {
    display: flex;
    color: ${globalColor.grayLite.grayLite80};

    article {
      display: flex;
      flex-direction: column;

      h4 {
        width: 100%;
        display: flex;
        gap: 10px;

        svg {
          width: 20px;
          height: 20px;
        }

        .ais-Highlight {
          color: ${globalColor.black};
          width: 100%;
          font-weight: bolder;

          .ais-Highlight-highlighted {
            -webkit-text-stroke: 0.5px ${globalColor.red.ultraLiteRed};
          }
        }

        strong {
          color: ${globalColor.black};
          width: 100%;
        }
      }

      p {
        display: flex;
        gap: 5px;
        font-size: 0.9rem;
        margin-left: 30px;
        margin-bottom: 0;
      }
    }
  }
`;
