import styled from 'styled-components'
import { globalColor, globalGradient } from '../global_styles/Global.styles'

export const ContactLinksBox = styled.section`
  display: flex;
  flex-direction: column;
  padding: 8%;

  h3 {
    font-weight: 400;
  }

  img {
    width: 100px;
    height: 120px;
  }

  article {
    width: 100%;
    padding: 10px 0 10px 10px;
    margin-top: 10px;
    border: none;
    box-shadow: none;

    section {
      gap: 10px;
    }

    h3 {
      font-size: 1.1rem;
    }

    p {
      margin-bottom: 0;
    }

    address {
      margin-bottom: 0;
    }
  }

  > a {
    margin-top: 30px;
    width: 100%;
    height: 50px;
    cursor: pointer;
  }
`

export const GradientPracticeBox = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px 8%;
  align-items: start;
  justify-content: center;
  width: 100%;
  background: ${globalGradient.award};

  h3 {
    font-weight: 400;
    color: ${globalColor.white};
    margin-bottom: 10px;
  }

  ul {
    height: 263px;
    overflow-y: auto;

    li {
      a {
        color: ${globalColor.white};
        font-size: 1.1rem;
        :before {
          content: '☞';
          margin-right: 5px;
        }
        :hover {
          color: ${globalColor.red.darkRed};
        }
      }
    }
  }
`
