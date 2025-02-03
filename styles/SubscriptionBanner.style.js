import styled from "styled-components";
import { Title32 } from "./common/Typography.style";
import { globalColor, rem } from "./global_styles/Global.styles";
import { media_breakpoint_down } from "./mediaBreakpoints.style";

export const SubscriptionBannerSection = styled.section`
  padding: 80px 0;
  background-color: ${globalColor.blue.darkBlue};
  color: ${globalColor.white};

  ${media_breakpoint_down('xl')} {
    padding: 60px 0;
  }

  ${media_breakpoint_down('lg')} {
    padding: 40px 0;
  }
`;

export const SubscriptionBannerHolder = styled.div`
  --banner-gap: 64px;
  display: flex;
  gap: var(--banner-gap);

  ${media_breakpoint_down('lg')} {
    --banner-gap: 16px;
    flex-direction: column;
  }
`;

export const SubscriptionBannerTitle = styled(Title32)`
  max-width: 270px;
  color: inherit;
  text-transform: uppercase;

  ${media_breakpoint_down('lg')} {
    max-width: 100%;
  }
`;

export const SubscriptionBannerContent = styled.div`
  flex: 1;
  padding-left: var(--banner-gap);
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  border-left: 1px solid ${globalColor.gray.gray500};

  button {
    max-width: 240px;
  }

  ${media_breakpoint_down('lg')} {
    border-left: none;
    padding-left: 0;
    border-top: 1px solid ${globalColor.gray.gray500};
    padding-top: var(--banner-gap);
  }

  ${media_breakpoint_down('md')} {
    row-gap: 16px;
  }
`;

export const SubscriptionBannerSubtitle = styled.h3`
  margin: 0 0 -8px 0;
  color: inherit;
  font-family: var(--font-lato);
  font-size: ${rem(24)};
  line-height: 1.5;
  font-weight: 400;
  text-transform: uppercase;

  ${media_breakpoint_down('xxl')} {
    margin: 0 0 -12px 0;
  }

  ${media_breakpoint_down('lg')} {
    margin: 0 0 -16px 0;
  }

  ${media_breakpoint_down('md')} {
    margin: 0 0 -8px 0;
    font-size: ${rem(16)};
  }
`;

export const SubscriptionBannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  p {
    margin: 0;
  }

  ${media_breakpoint_down('md')} {
    row-gap: 16px;
  }
`;