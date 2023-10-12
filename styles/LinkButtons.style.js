import styled from 'styled-components';
import {
  ButtonLinkCss,
  buttonsHoverActive,
} from './global_styles/Global.styles';
import Link from 'next/link';

export const ButtonLink = styled(Link)`
  ${ButtonLinkCss};
  ${buttonsHoverActive};
`;
