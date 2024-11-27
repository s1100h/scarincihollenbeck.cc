import styled from 'styled-components';
import { globalColor } from '../global_styles/Global.styles';

export const ShareSocialBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;

  > h3 {
    font-size: 1.1rem;
    margin-right: 5%;
    margin-bottom: 0;
    font-weight: bold;
  }

  hr {
    margin: 0 2%;
  }

  .first-hr {
    width: 50%;
  }

  .second-hr {
    width: ${({ isPracticeHr }) => (isPracticeHr ? '35%' : '10%')};
  }

  button {
    margin: 0 10px;

    svg {
      font-size: 1.4rem;
      color: ${globalColor.grayLite.grayLite60};

      @media (hover: hover) {
        &:hover {
          color: ${globalColor.black};
        }
      }

      &:active {
        color: ${globalColor.black};
      }
    }
  }

  .faceBookBtn {
    @media (hover: hover) {
      &:hover {
        color: ${globalColor.socialNetworks.faceBook};
      }
    }

    &:active {
      color: ${globalColor.socialNetworks.faceBook};
    }
  }

  .twitterBtn {
    @media (hover: hover) {
      &:hover {
        color: ${globalColor.socialNetworks.twitter};
      }
    }
    &:active {
      color: ${globalColor.socialNetworks.twitter};
    }
  }

  .linkedIn {
    @media (hover: hover) {
      &:hover {
        color: ${globalColor.socialNetworks.linkedIn};
      }
    }

    &:active {
      color: ${globalColor.socialNetworks.linkedIn};
    }
  }

  .copy-button {
    svg {
      @media (hover: hover) {
        &:hover {
          color: ${globalColor.blue.skyBlue};
        }
      }

      &:active {
        color: ${globalColor.blue.skyBlue};
      }
    }
  }
`;
