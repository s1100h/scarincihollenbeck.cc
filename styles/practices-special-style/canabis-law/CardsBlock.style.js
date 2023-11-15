import styled from 'styled-components';
import { globalColor, rem } from '../../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../../mediaBreakpoints.style';

export const CardsBlockContainer = styled.section`
  display: flex;
  padding: 100px 0;
  justify-content: center;
  background: url('/images/darck_cannabis_background.webp') center/cover
    no-repeat;

  ul {
    display: flex;
    justify-content: center;
    gap: 3%;
  }

  ${media_breakpoint_exactly_down(1310)} {
    .list-card-box {
      overflow: auto;
      justify-content: flex-start;
      padding-left: 20px;
      padding-right: 20px;

      ul {
        gap: 1%;
        width: fit-content;
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    padding: 60px 0;
  }
`;

export const CardCannabis = styled.li`
  width: 522px;
  height: 504px;
  padding: 30px;
  background-color: ${globalColor.white};

  .circle-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    margin-left: 0;
    margin-right: auto;
    border-radius: 50px;
    background: ${globalColor.black} url('/images/cuted_leaf.webp') no-repeat 3%
      0 / contain;
    color: ${globalColor.white};
    font-size: 2rem;
    margin-bottom: 30px;
  }

  article {
    height: 78%;
  }

  p {
    line-height: 30px;
    overflow-y: auto;
    padding-bottom: 5px;
    margin-bottom: 0;
    font-size: 1.2rem;
  }

  ${media_breakpoint_exactly_down(1478)} {
    width: 422px;
    height: 404px;

    .article-common-title {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
      line-height: 20px;
    }
  }

  ${media_breakpoint_down('sm')} {
    .circle-number {
      width: 50px;
      height: 50px;
    }

    .article-common-title {
      font-size: ${rem(20)};
      margin-bottom: 15px;
      line-height: 26px;
    }

    p {
      font-size: 1rem;
      line-height: 24px;
    }
  }

  ${media_breakpoint_exactly_down(445)} {
    width: 400px;
    height: 482px;

    article {
      height: 72%;
    }
  }

  ${media_breakpoint_exactly_down(420)} {
    width: 300px;
    height: 400px;
    padding: 15px;
  }
`;
