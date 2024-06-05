import styled from 'styled-components';
import { cannabisLawColors, entAndMediaColors, globalColor, rem } from 'styles/global_styles/Global.styles';
import { LinkToCategory, TitleButtonBox } from '../ArticlesBlock.style';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';
import { BottomSection, TextNews } from 'styles/FirmNews.style';

export const ArticlesSection = styled.section`
  padding: 140px 0;

  ${TitleButtonBox} {
    h3 {
      color: ${globalColor.black};
      font-family: var(--font-carilo);
      font-size: ${rem(84)};
      font-weight: 400;
      line-height: 100px;
      font-style: italic;
      text-transform: capitalize;

      ${media_breakpoint_exactly_down(1850)} {
        font-size: ${rem(64)};
        line-height: 80px;
      }

      ${media_breakpoint_exactly_down(1440)} {
        font-size: ${rem(48)};
        line-height: 72px;
      }

      ${media_breakpoint_down('md')} {
        font-size: ${rem(32)};
        line-height: 48px;
      }
    }

    ${LinkToCategory} {
      border: 2px solid ${globalColor.black};
      background-color: transparent;
      color: ${globalColor.black};
      font-size: ${rem(18)};
      font-weight: 600;
      line-height: 27px;
      font-family: var(--font-poppins), sans-serif;

      &:hover {
        background-color: ${globalColor.black};
        color: ${globalColor.white};
      }

      ${media_breakpoint_exactly_down(1850)} {
        padding: 12px 24px;
        font-size: ${rem(16)};
        line-height: 24px;
      }

      ${media_breakpoint_exactly_down(1440)} {
        font-size: ${rem(14)};
        line-height: 21px;
      }

      ${media_breakpoint_down('md')} {
        margin-left: auto;
      }
    }

    ${media_breakpoint_exactly_down(1850)} {
      margin: 0 0 32px 0;
    }

    ${media_breakpoint_down('md')} {
      column-gap: 15px;
      flex-wrap: wrap;
    }
  }

  .entertainment-news {
    padding: 0;
    width: 32%;
    box-shadow: none;
    background-color: transparent;

    .link-wrapper {
      img {
        transition: all 0.3s ease;
      }
    }

    ${media_breakpoint_down('lg')} {
      h2 {
        font-size: 1rem;
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
      box-shadow: none;
      .link-wrapper {
        img {
          transform: scale(1.1);
        }
      }
    }

    ${TextNews} {
      h2 {
        font-size: ${rem(24)};
        font-family: var(--font-poppins), sans-serif;
        line-height: 36px;
        font-weight: 600;
        color: ${globalColor.black};

        ${media_breakpoint_exactly_down(1850)} {
          font-size: ${rem(20)};
          line-height: 30px;
        }

        ${media_breakpoint_exactly_down(1440)} {
          font-size: ${rem(18)};
          line-height: 27px;
        }

        ${media_breakpoint_down('md')} {
          font-size: ${rem(16)};
          line-height: 24px;
        }
      }
    }
  }

  .pagination {
    --bs-pagination-color: ${globalColor.black};
    --bs-pagination-active-bg: ${entAndMediaColors.entAndMediaColorGold};
    --bs-pagination-active-border-color: ${entAndMediaColors.entAndMediaColorGold};
    --bs-pagination-border-color: ${entAndMediaColors.entAndMediaColorGold};
    --bs-pagination-hover-bg: ${entAndMediaColors.entAndMediaColorGray};
    --bs-pagination-hover-border-color: ${entAndMediaColors.entAndMediaColorGold};
    --bs-pagination-hover-color: ${entAndMediaColors.entAndMediaColorGold};
    --bs-pagination-focus-color: ${entAndMediaColors.entAndMediaColorGold};
    --bs-pagination-focus-bg: ${entAndMediaColors.entAndMediaColorGray};
  }

  .pagination-icon {
    color: ${globalColor.black};
  }

  .page-link {
    &:focus, &:hover {
      .pagination-icon {
        color: ${entAndMediaColors.entAndMediaColorGold};
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    padding: 70px 0 0;
  }
`;
