import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { globalColor } from './global_styles/Global.styles';

export const PaginationBtn = styled(Button)`
  svg {
    color: ${globalColor.white};
    width: 33px;
    font-size: 33px;
  }

  :disabled {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    cursor: default;
  }
`;
