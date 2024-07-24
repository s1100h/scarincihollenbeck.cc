import styled from 'styled-components';
import {
  globalColor,
  globalIndents,
  globalShadow,
  rem,
} from 'styles/global_styles/Global.styles';

export const ProfileSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: ${globalIndents.attorneyProfilePaddings};
  box-shadow: ${globalShadow.allSideShadow};
`;

// Awards
export const AwardsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

  .additional-info {
    margin-top: 50px;
    font-weight: bold;

    .disclaimer-sidebar {
      font-size: 1rem;
    }
    p {
      margin-bottom: 0;
    }
  }
`;

export const TitleAndLikBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  flex-wrap: wrap;

  > a {
    font-weight: 600;
  }
`;

export const AwardImgLinkBox = styled.a`
  display: block;
  width: 120px;
  margin: 0 10px;
  height: 120px;
`;
