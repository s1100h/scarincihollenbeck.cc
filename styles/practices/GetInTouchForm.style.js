import styled from 'styled-components';
import { ShareSocialBox } from 'styles/Post/SocialShare.style';
import { globalColor, rem } from 'styles/global_styles/Global.styles';
import { media_breakpoint_down } from 'styles/mediaBreakpoints.style';

export const GetInTouchFormWrapper = styled.div`
  padding: 12px 16px;
  background-color: #fbfbfb;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.06);
  ${({ isSticky }) =>
    isSticky &&
    'position: sticky; top: 210px; overflow: auto; max-height: calc(100vh - 230px);'}
  border: 1px solid transparent;
  transition: all 0.5s ease-in-out;

  &:hover {
    border: 1px solid ${globalColor.blue.blue500};
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.11),
      0px 0px 8px 0px rgba(6, 11, 42, 0.09);
  }

  ${ShareSocialBox} {
    padding: 8px 0;
    margin: 0 0 12px 0;
  }

  .second-hr {
    color: ${globalColor.blue.blue500};
    width: calc(100% + 16px);
    margin-left: -16px;
    height: 1px;
  }

  .react-share__ShareButton {
    margin: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${globalColor.blue.blue500};
      transition: all 0.3s ease;
      width: 20px;
      height: 20px;
    }

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  > h3 {
    margin: 0 0 4px 0;
    color: #231e1e;
    font-size: ${rem(24)};
    line-height: 32px;
    font-weight: 400;
    font-family: var(--font-roboto);
  }

  p {
    color: #231e1e;
    font-size: ${rem(12)};
    line-height: 16px;
    font-weight: 400;
    font-family: var(--font-roboto);
  }

  &:has(.kw-alert-success:not([style='display: none;'])) {
    background-color: ${globalColor.blue.blue500};

    ${ShareSocialBox} {
      margin: 0 0 28px 0;
      .second-hr {
        color: ${globalColor.white};
      }

      .react-share__ShareButton {
        svg {
          color: ${globalColor.white};
        }
      }
    }

    > h3 {
      display: none;
    }

    > p {
      display: none;
    }

    .kw-alert-success {
      justify-content: flex-start;
    }
  }

  ${media_breakpoint_down('lg')} {
    ${({ isMobileBtn }) => isMobileBtn && `display: none;`}
  }
`;

export const GetInTouchMobileBtn = styled.div`
  position: sticky;
  top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  padding: 20px 12px;
  cursor: pointer;

  span {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    color: ${globalColor.blue.blue500};
    font-family: var(--font-roboto);
    font-size: ${rem(24)};
    line-height: 32px;
    font-weight: 400;

    ${media_breakpoint_down('sm')} {
      font-size: ${rem(16)};
      line-height: 20px;
      font-weight: 400;
    }
  }

  svg {
    width: 32px;
    height: 32px;
    color: ${globalColor.blue.blue500};

    ${media_breakpoint_down('sm')} {
      width: 24px;
      height: 24px;
    }
  }

  ${media_breakpoint_down('lg')} {
    top: 220px;
  }

  ${media_breakpoint_down('md')} {
    top: 160px;
  }

  ${media_breakpoint_down('sm')} {
    padding: 8px 6px;
    row-gap: 12px;
  }
`;
