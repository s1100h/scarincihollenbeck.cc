import styled from 'styled-components';
import { globalColor } from './global_styles/Global.styles';
import empty from 'is-empty';

export const PhotoCardFigure = styled.figure`
  display: flex;
  flex-direction: column;
  background-color: ${({ isBlackBackground }) =>
    !empty(isBlackBackground)
      ? `${globalColor.black}`
      : `${globalColor.white}`};
  width: 400px;
  height: 550px;
  padding: 20px;
  gap: 48px;

  img {
    object-fit: cover;
  }
`;
