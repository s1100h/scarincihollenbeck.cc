import styled from 'styled-components';
import { rem } from './global_styles/Global.styles';

export const BigGrayTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  background-color: #e9e9e9;
  padding: 10px;
  margin-bottom: 1.3rem;
  font-size: ${rem(19.2)};
  text-transform: capitalize;
`;
