import styled from 'styled-components';
import {
  cannabisLawColors,
  globalColor,
  rem,
} from '../../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
  media_breakpoint_range_exacly,
} from '../../mediaBreakpoints.style';
import { PhotoCardFigure } from 'styles/PhotoCardPolaroid.style';
import { motion } from 'framer-motion';

export const PhotoBlockContainer = styled.section`
  display: flex;
  padding: 120px 0 140px;
  background-color: ${cannabisLawColors.cannabisColorGray};
  align-items: center;
  justify-content: center;
  position: relative;

  .photo-article-box {
    display: flex;
    justify-content: space-between;
    gap: 3%;
  }

  .disclaimer {
    position: absolute;
    bottom: 0;
  }

  ${media_breakpoint_exactly_down(1478)} {
    .photo-article-box {
      justify-content: center;
    }
  }

  ${media_breakpoint_down('lg')} {
    padding: 0;

    .photo-article-box {
      align-items: center;
      flex-direction: column;
      padding-top: 80px;
      padding-bottom: 60px;
    }
  }

  ${media_breakpoint_down('md')} {
    .disclaimer {
      padding: 0 16px;
    }
  }
`;

export const PhotoCannabisBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 100px);
  gap: 20px;
  position: relative;

  .prev-arrow,
  .next-arrow {
    display: none;
    position: absolute;
    top: 280px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .prev-arrow {
    left: -44px;
  }

  .next-arrow {
    right: -50px;
  }

  ${PhotoCardFigure} {
    margin: 0;
    width: 100%;

    img {
      border: 1px solid rgba(0, 0, 0, 0.38);
      width: 100%;
      height: 100%;
      max-height: 410px;

      ${media_breakpoint_down('md')} {
        max-height: 260px;
      }
    }

    figcaption {
      font-family: var(--font-licorice), sans-serif;
      font-size: ${rem(52)};
      font-weight: 400;
      color: ${cannabisLawColors.cannabisColorDarkGray};
      line-height: 52px;
      letter-spacing: 2.6px;
    }

    ${media_breakpoint_down('lg')} {
      height: 100%;
    }
  }

  .big-image {
    margin: 0 30px 30px 0;
    grid-area: 1 / 1 / 6 / 5;
  }

  ${media_breakpoint_exactly_down(1440)} {
    grid-template-columns: repeat(4, 100px);

    .big-image {
      margin: 0;
    }
  }

  ${media_breakpoint_down('lg')} {
    .prev-arrow,
    .next-arrow {
      font-size: 44px;
      color: ${globalColor.white};
      display: block;
    }
  }

  ${media_breakpoint_down('md')} {
    grid-template-columns: repeat(3, 100px);
    gap: 8px;
    justify-items: center;

    .prev-arrow,
    .next-arrow {
      top: 193px;
      font-size: 30px;
    }

    .prev-arrow {
      left: -15px;
    }

    .next-arrow {
      right: -20px;
    }

    ${PhotoCardFigure} {
      gap: 36px;
    }

    .big-image {
      margin-bottom: 16px;
      grid-area: 1 / 1 / 6 / 4;
      width: 300px;
      height: 385px;
    }
  }
`;

export const PhotoCardLink = styled(motion.a)`
  cursor: pointer;

  &:hover {
    ${PhotoCardFigure} {
      figcaption {
        color: #314af5;
      }
    }
  }
`;

export const PhotoClient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  cursor: pointer;
  filter: grayscale(100%);

  &.active {
    filter: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ArticlePhotoContainer = styled.div`
  flex: 1;

  article {
    > :first-child {
      margin-bottom: 32px;
      line-height: 20px;

      ${media_breakpoint_down('xxl')} {
        margin-bottom: 24px;
      }
    }
  }

  .article-common-title {
    margin-bottom: 48px;
    font-family: var(--font-poppins), sans-serif;
    font-size: ${rem(54)};
    line-height: 70px;
    font-weight: 600;

    ${media_breakpoint_down('xxl')} {
      margin-bottom: 32px;
      font-size: ${rem(36)};
      line-height: 47px;
    }
  }

  p {
    font-size: ${rem(20)};
    line-height: 30px;
    font-weight: 500;

    ${media_breakpoint_down('xxl')} {
      font-size: ${rem(16)};
      line-height: 24px;
    }
  }

  ${media_breakpoint_range_exacly(992, 1478)} {
    .article-common-title {
      font-size: 2rem;
    }
  }

  ${media_breakpoint_down('lg')} {
    margin-top: 100px;
    width: 80%;

    article {
      align-items: center;
      text-align: center;
    }
  }

  ${media_breakpoint_down('md')} {
    margin-top: 32px;
  }

  ${media_breakpoint_down('sm')} {
    justify-content: flex-start;
    width: 100%;

    article {
      align-items: flex-start;
    }

    h3.article-common-title {
      text-align: start;
      font-size: ${rem(24)};
      line-height: ${rem(32)};
      margin-bottom: 15px;
    }

    p {
      font-size: 1rem;
      text-align: start;
      line-height: 24px;
    }
  }
`;
