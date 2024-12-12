import styled from 'styled-components';
import { globalColor, globalShadow, rem } from './global_styles/Global.styles';

export const CareerCard = styled.div`
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  box-shadow: ${globalShadow.allSideShadow};
  transition: 0.8s;

  h3 {
    font-size: ${rem(16)};
    font-weight: 600;
    color: ${globalColor.blue.dirtyBlue};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }

  .position-location-box {
    display: flex;
    justify-content: space-between;
  }

  .icon-and-info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;

    svg {
      color: ${globalColor.gray.gray80};
    }
  }

  .position-type {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    width: fit-content;
    height: 30px;
    background-color: ${globalColor.graySmoke.whiteSmoke};
    border-radius: 28px;
  }

  .job-mini-description {
    display: -webkit-box;
    color: ${globalColor.gray.gray80};
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 30px;
    font-size: ${rem(14)};
  }

  :hover {
    cursor: pointer;
    box-shadow: ${globalShadow.hoveredShadow};
  }
`;
