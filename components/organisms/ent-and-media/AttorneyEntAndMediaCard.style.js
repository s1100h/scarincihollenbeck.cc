import styled from 'styled-components';
import {
  entAndMediaColors,
  globalColor,
  rem,
} from 'styles/global_styles/Global.styles';
import { media_breakpoint_exactly_down } from 'styles/mediaBreakpoints.style';

export const ImageWrapper = styled.div`
  margin-bottom: 20px;
  width: 275px;
  height: 340px;

  ${media_breakpoint_exactly_down(1850)} {
    width: 228px;
    height: 280px;
  }

  ${media_breakpoint_exactly_down(1439)} {
    margin-bottom: 0;
    width: 140px;
    min-width: 140px;
    height: 151px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardEntAndMediaAttorney = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  &:hover {
    ${ImageWrapper} {
      box-shadow: 0 4px 33px 0 rgba(0, 0, 0, 0.33);
    }
  }

  .attorney-info {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;

    ${media_breakpoint_exactly_down(1439)} {
      height: auto;
    }
  }

  .attorney-name {
    margin-bottom: 8px;
    font-family: var(--font-poppins), sans-serif;
    font-size: ${rem(24)};
    font-weight: 600;
    line-height: 36px;
    color: ${globalColor.black};
    flex: 1;
    display: flex;
    align-items: center;
  }

  .attorney-designation,
  .attorney-address {
    color: ${entAndMediaColors.entAndMediaColorMediumGray};
  }

  .attorney-designation {
    margin-bottom: 4px;
  }

  .attorney-address {
    margin-bottom: 12px;
  }

  .attorney-contact {
    margin: 0;
    row-gap: 4px;
    a {
      column-gap: 8px;
      span {
        font-family: var(--font-poppins), sans-serif;
        font-size: ${rem(14)};
        font-weight: 600;
        line-height: 21px;
        color: ${globalColor.black};
        text-decoration: none;
      }

      &:hover {
        span {
          color: ${globalColor.red.darkRed};
          text-decoration: underline;
        }
      }
    }
  }

  .attorney-link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
  }

  ${media_breakpoint_exactly_down(1850)} {
    width: 228px;
  }

  ${media_breakpoint_exactly_down(1439)} {
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
    width: 100%;

    .attorney-name {
      margin-bottom: 4px;
      font-size: ${rem(18)};
      line-height: 27px;
    }

    .attorney-designation,
    .attorney-address {
      font-size: ${rem(14)};
      line-height: 21px;
    }
  }
`;
