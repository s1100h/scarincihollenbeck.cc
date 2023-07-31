import styled from 'styled-components';
import { cannabisLawColors, globalColor } from '../../global_styles/Global.styles';

export const PhotoBlockContainer = styled.section`
  display: flex;
  padding: 0 185px;
  background-color: ${cannabisLawColors.cannabisColorGray};
`;

export const PhotoCannabisBox = styled.div`
  display: flex;
  gap: 20px;
  height: 780px;

  figure {
    background-color: ${globalColor.white};
    width: 416px;
    height: 556px;
  }

  & > :first-child {
    margin-top: auto;
    margin-bottom: 0;
  }
  & > :last-child {
    margin-top: 0;
    margin-bottom: auto;
  }
`;
