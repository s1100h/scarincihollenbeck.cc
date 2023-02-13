import styled from 'styled-components'
import { globalColor } from '../global_styles/Global.styles'

export const ShareSocialBox = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  h4 {
    font-size: 1.1rem;
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

  h4 {
    font-weight: bold;
    margin: 0;
  }
`
