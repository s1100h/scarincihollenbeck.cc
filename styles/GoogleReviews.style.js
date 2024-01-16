import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import Link from 'next/link';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const GoogleReviewsSection = styled.section`
  padding: 40px 0;
  background-color: ${globalColor.blue.blue500};

  ${media_breakpoint_down('md')} {
    padding: 32px 0;
  }
`;
export const GoogleReviewsHolder = styled.div`
  .slick-slider {
    padding: 0 48px;
    position: relative;

    ${media_breakpoint_down('md')} {
      padding: 0 30px;
    }
  }

  .slick-list {
    overflow: hidden;
    margin: 0 -16px;
  }

  .slick-slide {
    margin: 0 16px;
    > div {
      height: 100%;
    }
  }

  .slick-next,
  .slick-prev {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    display: block;
    width: 32px;
    height: 32px;
    transform: translateY(-50%);
    cursor: pointer;
    color: ${globalColor.grayExtraLite.grayExtraLite80};

    > svg {
      width: 100%;
      height: 100%;
    }

    ${media_breakpoint_down('md')} {
      width: 20px;
      height: 20px;
    }
  }

  .slick-prev {
    left: 4px;

    ${media_breakpoint_down('md')} {
      left: 0;
    }
  }

  .slick-next {
    right: 4px;

    ${media_breakpoint_down('md')} {
      right: 0;
    }
  }
`;
export const GoogleReviewsCard = styled.div`
  height: 100%;
  width: 32.33%;
  display: flex !important;
  padding: 24px;
  flex-direction: column;
  row-gap: 16px;
  background-color: ${globalColor.white};
  border-radius: 2px;
  box-shadow: -10px 10px 19px 0px rgba(0, 0, 0, 0.06),
    0px -7px 16px 0px rgba(0, 0, 0, 0.06);
  user-select: none;

  .review {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__info {
      display: flex;
      flex-direction: column;
      row-gap: 8px;

      > h4 {
        margin: 0;
        color: ${globalColor.gray.gray110};
        font-size: ${rem(16)};
        line-height: 22px;
        font-weight: 400;
        font-family: var(--font-poppins);
      }
    }

    &__rating {
      display: flex;

      > svg {
        height: 21px;
        width: 21px;
        fill: ${globalColor.yellow.liteYellow};
      }
    }

    &__logo {
      width: 37px;
      height: 37px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__description {
      > p {
        margin: 0;
        color: ${globalColor.gray.gray110};
        font-family: var(--font-poppins);
        font-size: ${rem(16)};
        line-height: 24px;
        font-weight: 400;
        text-align: start;
        max-height: 300px;
        overflow: auto;
      }
    }
  }
`;
