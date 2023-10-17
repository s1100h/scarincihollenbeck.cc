import styled from 'styled-components';
import { rem } from '../global_styles/Global.styles';

const isLandscape = (orientationStr) => orientationStr.includes('landscape');
export const ImagesList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3%;
  height: fit-content;
`;

export const ImageAlbumBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    position: relative;
    width: ${({ orientation }) =>
      isLandscape(orientation) ? '300px' : '170px'};
    height: ${({ orientation }) =>
      isLandscape(orientation) ? '200px' : '200px'};
    object-fit: contain;
  }

  p {
    display: flex;
    text-align: center;
    font-size: ${rem(14)};
    margin-bottom: 5%;
  }
`;
