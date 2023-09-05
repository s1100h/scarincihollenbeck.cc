import styled from 'styled-components';
import { cannabisLawColors, imageCoverBlock, paragraphStyles } from '../../global_styles/Global.styles';
import { media_breakpoint_down, media_breakpoint_exactly_down } from '../../mediaBreakpoints.style';

export const NewsPaperContainer = styled.section`
  display: flex;
  gap: 50px;
  justify-content: center;
  background-color: ${cannabisLawColors.cannabisColorDarkGray};
  padding: 140px 20px;

  > div {
    display: flex;
    justify-content: space-between;
    background: url('/images/sport-smoke.webp') no-repeat right;
    padding-right: 3%;
    padding-left: 3%;
  }

  ${media_breakpoint_down('xl')} {
    div {
      margin-top: 0;

      article {
        .article-common-title {
          font-size: 1.8rem;
        }

        p {
          font-size: 1.1rem;
        }
      }
    }
  }

  ${media_breakpoint_exactly_down(1120)} {
    background: url('/images/sport-smoke.webp') ${cannabisLawColors.cannabisColorDarkGray} no-repeat bottom;

    > div {
      flex-direction: column;
      align-items: center;
      background-image: none;

      div {
        width: 80%;

        article {
          align-items: center;
          margin-bottom: 80px;

          .article-common-title {
            font-size: 2.3rem;
            margin-bottom: 30px;
            text-align: center;
          }

          p {
            font-size: 1.3rem;
            text-align: center;
          }
        }
      }

      > :last-child {
        width: 80vw;
        height: 65vw;
      }
    }
  }

  ${media_breakpoint_down('lg')} {
    padding-top: 80px;
    padding-bottom: 80px;

    > div {
      width: 96%;

      > :last-child {
        p {
          font-size: 1rem;
          margin-bottom: 0;
        }

        figure {
          margin-right: 0;
        }
      }
    }
  }

  ${media_breakpoint_exactly_down(880)} {
    > div {
      > :last-child {
        p {
          font-size: 0.9rem;
          margin-bottom: 0;
        }

        figure {
          width: 150px;
          height: 180px;
          margin-right: -15px;

          img {
            width: 125px;
            height: 136px;
          }
        }
      }
    }
  }

  ${media_breakpoint_down('md')} {
    > div {
      > :last-child {
        width: 98vw;
        height: 80vw;
        padding-bottom: 10px;
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    > div {
      > div {
        width: 100%;

        article {
          align-items: start;

          .article-common-title {
            font-size: 1.5rem;
            text-align: left;
          }

          p {
            font-size: 1rem;
            text-align: left;
          }
        }
      }

      > :last-child {
        padding-left: 15px;

        p {
          height: 190px;
          overflow-y: auto;
          font-size: 0.7rem;
        }

        figure {
          width: 120px;
          height: 150px;
          margin-right: -25px;
          margin-bottom: 10px;

          img {
            width: 95px;
            height: 106px;
          }
        }
      }
    }
  }

  ${media_breakpoint_exactly_down(400)} {
    > :last-child {
      p {
        height: 158px;
      }
    }
  }
`;

export const NewsPaperBox = styled.div`
  display: flex;
  background: ${imageCoverBlock('/images/daily_news_with_leaf.webp')};
  width: 800px;
  height: 560px;
  align-items: flex-end;
  padding: 0 60px 44px 50px;
  justify-content: space-between;

  p {
    ${paragraphStyles};
    font-size: 1rem;
    color: ${cannabisLawColors.cannabisColorDarkGray};
    text-align: start;
    width: 420px;
  }

  figure {
    width: 200px;
    height: 254px;
    padding: 10px;
    transform: rotate(15deg);
    margin-right: 20px;
    margin-bottom: 0;

    img {
      width: 181px;
      height: 182px;
    }
  }
`;
