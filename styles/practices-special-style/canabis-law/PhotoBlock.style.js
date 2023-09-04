import styled from 'styled-components';
import { cannabisLawColors } from '../../global_styles/Global.styles';
import { media_breakpoint_down, media_breakpoint_exactly_down, media_breakpoint_range_exacly } from '../../mediaBreakpoints.style';

export const PhotoBlockContainer = styled.section`
  display: flex;
  padding: 120px 84px 140px;
  background-color: ${cannabisLawColors.cannabisColorGray};
  gap: 8%;
  align-items: center;

  ${media_breakpoint_exactly_down(1478)} {
    justify-content: center;
    gap: 4%;
    padding-left: 42px;
    padding-right: 42px;
  }

  ${media_breakpoint_down('xl')} {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${media_breakpoint_down('lg')} {
    flex-direction: column;
    padding-top: 80px;
    padding-bottom: 60px;
  }
`;

export const PhotoCannabisBox = styled.div`
  display: flex;
  gap: 20px;
  height: 780px;
  position: relative;
  margin-bottom: 40px;

  .words-picture {
    position: absolute;
    bottom: -93px;
    right: 19%;
  }

  & > :first-child {
    margin-top: auto;
    margin-bottom: 0;
  }

  & > :last-child {
    align-items: flex-end;
  }

  ${media_breakpoint_range_exacly(992, 1478)} {
    figure {
      width: 316px;
      height: 456px;
      padding: 18px;
      gap: 32px;

      > :first-child {
        width: 278px;
      }
    }
  }

  ${media_breakpoint_down('lg')} {
    figure {
      width: 316px;
      height: 456px;
      padding: 18px;
      gap: 32px;

      > :first-child {
        width: 278px;
      }
    }
  }

  ${media_breakpoint_exactly_down(685)} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: auto;

    figure {
      width: 96%;
      height: 115vw;

      > :first-child {
        width: 100%;
        height: 100%;
      }
      > :last-child {
        margin-bottom: 20px;
      }
    }

    & > :first-child {
      margin-top: 0;
    }

    & > :nth-child(2) {
      display: none;
    }

    .words-picture {
      position: initial;
      margin-top: -45px;
    }
  }

  ${media_breakpoint_down('sm')} {
    .words-picture {
      width: 300px;
      height: 120px;
    }
  }
`;

export const ArticlePhotoContainer = styled.div`
  width: 35%;

  article {
    > :first-child {
      margin-bottom: 22px;
      line-height: 20px;
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

  ${media_breakpoint_exactly_down(685)} {
    margin-top: auto;
  }

  ${media_breakpoint_down('sm')} {
    .article-common-title {
      font-size: 1.8rem;
      margin-bottom: 15px;
    }
  }
`;
