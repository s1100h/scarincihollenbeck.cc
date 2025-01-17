import Link from "next/link";
import styled from "styled-components";
import { globalColor, globalTransition, rem } from "./global_styles/Global.styles";
import { media_breakpoint_down } from "./mediaBreakpoints.style";

const defaultSocialHover = `
  transition: ${globalTransition.default};

  @media (hover: hover) {
    &:hover {
      color: ${globalColor.blue.skyBlue};
    }
  }

  &:active {
    color: ${globalColor.blue.skyBlue};
  }
`;

export const SocialsContainer = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  ${media_breakpoint_down('md')} {
    padding: 4px 0;
    gap: 8px;
  }
`;

export const SocialsHr = styled.hr`
  flex: 1;
  color: ${globalColor.blue.darkBlue};
`;

export const SocialsLabel = styled.p`
  margin: 0;
  color: ${globalColor.blue.darkBlue};
  font-size: ${rem(16)};

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
  }
`;

export const SocialsLinks = styled.nav`
  display: flex;
  gap: 12px;

  svg {
    width: 24px;
    height: 24px;

    ${media_breakpoint_down('md')} {
      width: 20px;
      height: 20px;
    }
  }

  .copy-button {
    ${defaultSocialHover};
  }

  ${media_breakpoint_down('md')} {
    gap: 8px;
  }
`;

export const SocialsLink = styled(Link)`
  color: ${globalColor.blue.darkBlue};

  &.social {
    ${defaultSocialHover};
  }

  &.social--facebook {
    @media (hover: hover) {
      &:hover {
        color: ${globalColor.socialNetworks.faceBook};
      }
    }

    &:active {
      color: ${globalColor.socialNetworks.faceBook};
    }
  }

  &.social--x {
    @media (hover: hover) {
      &:hover {
        color: ${globalColor.socialNetworks.twitter};
      }
    }
    &:active {
      color: ${globalColor.socialNetworks.twitter};
    }
  }

  &.social--linkedin {
    @media (hover: hover) {
      &:hover {
        color: ${globalColor.socialNetworks.linkedIn};
      }
    }

    &:active {
      color: ${globalColor.socialNetworks.linkedIn};
    }
  }
`;