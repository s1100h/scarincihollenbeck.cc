import styled from "styled-components";
import { rem } from "styles/global_styles/Global.styles";
import { media_breakpoint_down } from "styles/mediaBreakpoints.style";


export const PracticeTitle = styled.h3`
  color: #000;
  font-family: var(--font-poppins);
  font-size: ${rem(28)};
  font-weight: 600;
  line-height: 36px;

  ${media_breakpoint_down("sm")} {
    font-size: ${rem(16)};
    line-height: 20px;
    font-weight: 700;
    color: #0D0D0D;
  }
`;