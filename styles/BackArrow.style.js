import Link from "next/link";
import styled from "styled-components";
import { globalColor, globalTransition, rem } from "./global_styles/Global.styles";


export const BackArrowWrapper = styled(Link)`
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  color: ${globalColor.gray.dark};
  font-size: ${rem(16)};

  svg {
    transition: ${globalTransition.default};
  }

  &:hover {
    color: ${globalColor.gray.dark};

    svg {
      transform: translateX(-4px);
    }
  }
`;