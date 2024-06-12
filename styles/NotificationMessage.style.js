import styled from 'styled-components';
import { globalColor } from './global_styles/Global.styles';

export const MessageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  :hover {
    cursor: pointer;
    h5 {
      color: ${globalColor.blue.dirtyBlue};
    }
  }

  > :nth-child(1) {
    order: 1;
    width: 20%;
    margin-top: 13px;
    margin-right: 7px;
  }

  > :nth-child(2) {
    order: 2;
    width: 70%;
  }

  > :nth-child(3) {
    order: 3;
    height: auto;
    width: 100%;
  }
`;
