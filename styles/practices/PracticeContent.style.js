import styled from 'styled-components';
import { globalColor, rem } from 'styles/global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const PracticeContentSection = styled.section`
  padding-top: 40px;
  background-color: ${globalColor.white};

  ${media_breakpoint_exactly_down(1439)} {
    padding-top: 32px;
  }
`;

export const PracticeContentHolder = styled.div`
  display: flex;
  column-gap: 60px;

  ${media_breakpoint_exactly_down(1850)} {
    column-gap: 24px;
  }

  ${media_breakpoint_down('lg')} {
    column-gap: 16px;
  }

  ${media_breakpoint_down('sm')} {
    column-gap: 8px;
  }
`;

export const PracticeDescription = styled.div`
  flex: 1;
  max-width: 100%;

  .content-block {
    margin-bottom: 40px;

    ${media_breakpoint_exactly_down(1439)} {
      margin-bottom: 16px;
    }

    &:last-of-type {
      ${media_breakpoint_exactly_down(1439)} {
        margin-bottom: 40px;
      }
      ${media_breakpoint_down('md')} {
        margin-bottom: 32px;
      }
    }

    h2,
    h3,
    h4 {
      margin: 0 0 8px 0;
      color: #000;
      font-family: var(--font-poppins);
      font-size: ${rem(26)};
      font-weight: 600;
      line-height: 34px;

      & * {
        font-style: normal;
        color: #000;
        font-family: var(--font-poppins);
        font-weight: 600;
      }

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(20)};
        line-height: 28px;
        font-weight: 700;
      }
    }

    h3,
    h4,
    h5,
    h6 {
      font-size: ${rem(22)};
      line-height: 30px;

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(18)};
        line-height: 26px;
      }
    }
  }

  strong,
  b {
    font-weight: 600;
    color: ${globalColor.black};
  }

  p {
    margin: 0 0 16px 0;
    color: ${globalColor.gray.gray80};
    font-family: var(--font-poppins);
    font-size: ${rem(16)};
    line-height: 29px;
    font-weight: 400;

    &:last-child {
      margin: 0;
    }

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(14)};
      line-height: 24px;
    }
  }

  ul {
    li {
      color: ${globalColor.gray.gray80};
      font-family: var(--font-poppins);
      font-size: ${rem(16)};
      line-height: 29px;
      font-weight: 400;

      &:last-child {
        margin: 0;
      }

      ${media_breakpoint_down('sm')} {
        font-size: ${rem(14)};
        line-height: 24px;
      }
    }

    &:last-child {
      margin: 0;
    }
  }

  .table-wrapper {
    
    width: 100%;
    overflow-x: auto;

    table {
      min-width: 500px;
    }
  }

  ${media_breakpoint_down('lg')} {
    max-width: calc(100% - 56px);
  }

  ${media_breakpoint_down('sm')} {
    max-width: calc(100% - 40px);
  }
`;

export const PracticeSidebar = styled.div`
  margin-bottom: 40px;
  width: 25%;

  ${media_breakpoint_exactly_down(1850)} {
    width: 35.5%;
  }

  ${media_breakpoint_exactly_down(1439)} {
    margin-bottom: 32px;
  }

  ${media_breakpoint_down('lg')} {
    width: auto;
  }
`;
