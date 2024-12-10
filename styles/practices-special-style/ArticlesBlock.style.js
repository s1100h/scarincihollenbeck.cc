import styled from 'styled-components';
import Link from 'next/link';
import {
  cannabisLawColors,
  globalColor,
  rem,
} from '../global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from '../mediaBreakpoints.style';
import { BottomSection } from 'styles/FirmNews.style';

export const ArticlesContainer = styled.section`
  background-color: ${cannabisLawColors.cannabisColorDarkGray};
`;

export const PostsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;

  > div {
    margin-left: 20px;
    width: 100%;

    ${media_breakpoint_down('md')} {
      margin: 10px;
    }
  }

  &.cannabis-law-posts {
    .pagination {
      --bs-pagination-color: ${cannabisLawColors.cannabisColorGray};
      --bs-pagination-active-bg: transparent;
      --bs-pagination-active-border-color: ${cannabisLawColors.cannabisColorGray};
      --bs-pagination-disabled-bg: ${cannabisLawColors.cannabisTransparentBlack};
      --bs-pagination-disabled-border-color: transparent;
      --bs-pagination-hover-bg: ${cannabisLawColors.cannabisColorDarkGrayLight};
      --bs-pagination-hover-border-color: ${cannabisLawColors.cannabisColorDarkGrayLight};
      --bs-pagination-hover-color: ${cannabisLawColors.cannabisColorGray};
      --bs-pagination-focus-color: ${cannabisLawColors.cannabisColorGray};
      --bs-pagination-focus-bg: ${cannabisLawColors.cannabisTransparentBlack};
    }

    .pagination-icon {
      color: ${cannabisLawColors.cannabisColorGray};
    }
  }

  .cannabis-law-news {
    width: 32%;
    background-color: ${cannabisLawColors.cannabisColorGray};

    h2 {
      font-family: var(--font-poppins), sans-serif;
      font-size: ${rem(18)};
      line-height: 27px;
      font-weight: 700;
      color: ${cannabisLawColors.cannabisColorDarkGray};
      text-transform: uppercase;
    }

    ${BottomSection} {
      span {
        color: ${cannabisLawColors.cannabisColorDarkGrayLight};
        font-family: var(--font-rajdhani), sans-serif;
        font-size: ${rem(16)};
        font-weight: 500;
        line-height: 24px;
        text-transform: uppercase;
      }
    }

    .news-card-footer {
      color: ${cannabisLawColors.cannabisColorDarkGrayLight};
      font-family: var(--font-rajdhani), sans-serif;
      font-size: ${rem(16)};
      font-weight: 500;
      line-height: 24px;
      text-transform: uppercase;
    }

    ${media_breakpoint_down('lg')} {
      h2 {
        font-size: ${rem(16)};
      }

      section {
        flex-direction: column;
        gap: 3px;
      }
    }

    ${media_breakpoint_down('md')} {
      width: 100%;
    }

    ${media_breakpoint_exactly_down(633)} {
      .link-wrapper {
        flex-direction: column;
      }

      .news-card-footer {
        display: flex;
      }
    }

    :hover {
      box-shadow: -2px 0 10px rgba(255, 255, 255, 0.13);
    }
  }

  ${media_breakpoint_down('md')} {
    flex-direction: column;
  }
`;

export const TitleButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
  align-items: center;

  h2 {
    font-family: var(--font-poppins), sans-serif;
    color: ${cannabisLawColors.cannabisColorGray};
    font-size: ${rem(54)};
    line-height: 70px;
    font-weight: 600;
    text-transform: uppercase;

    ${media_breakpoint_down('xxl')} {
      font-size: ${rem(36)};
      line-height: 47px;
    }

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(32)};
    }
  }
`;

export const LinkToCategory = styled(Link)`
  padding: 16px 24px;
  border-radius: 41px;
  background-color: ${cannabisLawColors.cannabisColorDarkGrayLight};
  color: ${globalColor.white};
  transition: background-color 0.8s;
  font-family: var(--font-poppins), sans-serif;
  font-size: ${rem(18)};
  font-weight: 600;
  line-height: 27px;

  :hover {
    color: ${globalColor.black};
    background-color: ${cannabisLawColors.cannabisColorGray};
  }

  ${media_breakpoint_down('sm')} {
    padding: 10px 24px;
    font-size: ${rem(16)};
  }
`;
