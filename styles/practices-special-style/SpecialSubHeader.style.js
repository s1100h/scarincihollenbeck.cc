import styled from 'styled-components';
import { globalColor } from '../global_styles/Global.styles';

export const SpecialSubHeaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 155px 10% 0;
  height: 947px;
  background: url(${({ backgroundImage }) => backgroundImage}) no-repeat;
  position: relative;
  overflow: hidden;

  h1 {
    width: 50%;
    position: absolute;
    bottom: -28px;
    font-size: 12rem;
    font-weight: 300;
    line-height: 142px;
    color: ${globalColor.white};
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  :first-child {
    align-items: start;
  }

  :last-child {
    align-items: center;
  }
`;
