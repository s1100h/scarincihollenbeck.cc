import styled from "styled-components";
import { ShareSocialBox } from "styles/Post/SocialShare.style";
import { globalColor, rem } from "styles/global_styles/Global.styles";
import { media_breakpoint_exactly_down } from "styles/mediaBreakpoints.style";


export const PracticeContentSection = styled.section`
  padding-top: 40px;
  background-color: ${globalColor.white};

  ${media_breakpoint_exactly_down(1439)} {
    padding-top: 32px;
  }
`;

export const PractiseContentHolder = styled.div`
  display: flex;
  column-gap: 60px;
`;

export const PracticeDescription = styled.div`
  flex: 1;

  .content-block {
    margin-bottom: 40px;
  }

  .collapse-opener {
    transform: translateY(calc(-100% - 48px));
  }

  h4 {
    margin: 0 0 4px 0;
    color: #000;
    font-family: var(--font-poppins);
    font-size: ${rem(28)};
    font-weight: 600;
    line-height: 36px;
  }

  p {
    margin: 0 0 16px 0;
    color: ${globalColor.gray.gray80};
    font-family: var(--font-poppins);
    font-size: ${rem(16)};
    line-height: 29px;
    font-weight: 400;
  }

  ul {

    li {
      color: ${globalColor.gray.gray80};
      font-family: var(--font-poppins);
      font-size: ${rem(16)};
      line-height: 29px;
      font-weight: 400;
    }
  }
`;

export const PracticeSidebar = styled.div`
  width: 30%;
`;

export const PracticeSidebarContent = styled.div`
  padding: 12px 16px;
  background-color: #FBFBFB;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 150px;
  max-height: calc(100vh - 170px);
  overflow: auto;

  ${ShareSocialBox} {
    padding: 8px 0;
    margin: 0 0 12px 0;
  }

  .second-hr {
    color: #164587;
    width: calc(100% + 16px);
    margin-left: -16px;
    height: 1px;
  }

  button {
    margin: 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #164587;
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
    color: #231E1E;
    font-size: ${rem(24)};
    line-height: 32px;
    font-weight: 400;
  }

  p {
    color: #231E1E;
    font-size: ${rem(12)};
    line-height: 16px;
    font-weight: 400;
    font-family: var(--font-roboto);
  }
`;