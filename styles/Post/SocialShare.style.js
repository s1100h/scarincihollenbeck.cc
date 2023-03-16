import styled from 'styled-components'
import { globalColor } from '../global_styles/Global.styles'

export const ShareSocialBox = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;

  h4 {
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
    width: 10%;
  }

  button {
    margin: 0 10px;

    svg {
      font-size: 1.4rem;
      color: ${globalColor.grayLite.grayLite60};

      :hover {
        color: ${globalColor.black};
      }
    }
  }

  .faceBookBtn {
    :hover {
      color: ${globalColor.socialNetworks.faceBook};
    }
  }

  .twitterBtn {
    :hover {
      color: ${globalColor.socialNetworks.twitter};
    }
  }

  .linkedIn {
    :hover {
      color: ${globalColor.socialNetworks.linkedIn};
    }
  }
`
