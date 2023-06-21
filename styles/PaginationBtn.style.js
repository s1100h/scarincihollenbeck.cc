import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const PaginationBtn = styled(Button)`
  :disabled {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    cursor: default;
  }
`;
