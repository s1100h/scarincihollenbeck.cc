import styled from "styled-components";
import { media_breakpoint_down } from "./mediaBreakpoints.style";
import { globalColor, globalTransition } from "./global_styles/Global.styles";

export const RenderSelectedIcon = styled.span`
  --icon-size: ${({ $sizes }) => $sizes && `${$sizes}px`};
  --icon-size-mobile: ${({ $mobileSizes }) => $mobileSizes && `${$mobileSizes}px`};
  flex-shrink: 0;
  width: var(--icon-size);
  height: var(--icon-size);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${globalColor.gray.gray500};
  transition: ${globalTransition.default};

  ${media_breakpoint_down('md')} {
    width: var(--icon-size-mobile);
    height: var(--icon-size-mobile);
  }
`;

export const RenderUploadedImage = styled(RenderSelectedIcon)`
  mask: ${({image}) => image && `url(${image})`} center/cover no-repeat;
  background-color: currentColor;
`;