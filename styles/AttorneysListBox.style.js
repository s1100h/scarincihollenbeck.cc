import styled from 'styled-components';
import { globalColor, globalShadow } from './global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';
import empty from 'is-empty';

export const AttorneysContainer = styled.section`
  display: flex;
  width: 100%;
  padding: 20px;
  box-shadow: ${globalShadow.allSideShadow};
  margin-bottom: 40px;

  h3 {
    ${({ isNotDefault }) => {
      if (empty(isNotDefault)) {
        return `
          text-transform: uppercase;
          color: ${globalColor.white};
        `;
      }
    }};
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  .chair-box {
    margin-right: 10px;
  }

  .attorneys-list-box {
    width: 100%;

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 1%;
      margin-bottom: 1%;
    }
  }

  .vertical-attorney-card {
    margin-bottom: 1%;
    width: 220px;

    address {
      margin-bottom: 0;
    }
  }

  ${media_breakpoint_exactly_down(1040)} {
    flex-direction: column;
  }

  ${media_breakpoint_down('lg')} {
    > div {
      justify-content: center;
    }
  }

  ${media_breakpoint_down('md')} {
    justify-content: center;

    > div {
      justify-content: center;

      > div {
        justify-content: space-around;
      }
    }

    .vertical-attorney-card {
      width: 170px;
      padding: 10px;
      margin-bottom: 10px;

      img {
        width: 150px;
        height: 170px;
      }

      h4 {
        margin-top: 8px;
        margin-bottom: 5px;
        font-size: 1rem;
      }

      a {
        width: 100%;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    article {
      margin-bottom: 2%;
    }
  }

  ${media_breakpoint_exactly_down(470)} {
    padding: 20px 5px;

    h3 {
      padding-left: 15px;
    }

    article {
      padding: 5px;
      min-width: 90%;

      h3 {
        padding: 0;
        margin-top: 10px;
        margin-bottom: 5px;
      }
    }
  }

  ${media_breakpoint_exactly_down(370)} {
    article {
      min-width: 310px;
    }
  }
`;
