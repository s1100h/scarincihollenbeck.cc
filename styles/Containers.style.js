import styled from 'styled-components';
import { globalColor, globalShadow } from './global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';

export const ContainerXXL = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  align-items: center;
`;

export const CentralizedBox = styled.div`
  display: flex;
  border-radius: 2px;
  align-items: center;
  width: 86vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  background-color: ${(props) =>
    props?.notSurface ? 'transparent' : globalColor.white};
  box-shadow: ${(props) =>
    props?.notSurface ? 'none' : globalShadow.allSideShadow};
  ${({ toColumn }) =>
    toColumn && toColumn === 'true'
      ? 'flex-direction: column;'
      : 'flex-wrap: wrap;'}

  ${media_breakpoint_down('xl')} {
    width: 97vw;
    ${(props) => props?.notSurface && 'padding: 0 60px;'}
  }

  ${media_breakpoint_down('lg')} {
    width: 76vw;
  }

  ${media_breakpoint_exactly_down(612)} {
    width: 100vw;
    border: none;
    ${(props) => props?.notSurface && 'padding: 0 30px;'};
  }
`;

export const ContainerDefault = styled.div`
  width: min(100%, 1816px);
  max-width: 100%;
  margin: 0 auto;
  padding: 0 80px;

  ${media_breakpoint_down('xl')} {
    padding: 0 32px;
  }

  ${media_breakpoint_down('md')} {
    padding: 0 12px;
  }

  @media print {
    padding: 0;
  }
`;
