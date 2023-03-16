import styled from 'styled-components'
import { globalColor, globalShadow } from '../global_styles/Global.styles'

export const RelatedPostsContainer = styled.div`
  padding-top: 60px;

  h5 {
    font-size: 2rem;
  }
`
export const RelatedPostsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 20px;
`
export const RelatedPostItem = styled.li`
  a {
    display: flex;
    padding: 10px;
    box-shadow: ${globalShadow.allSideShadow};
    gap: 10px;
    color: ${globalColor.black};
    align-items: center;

    :hover {
      color: ${globalColor.black};
      cursor: pointer;
      transition: 0.8s;
      box-shadow: ${globalShadow.hoveredShadow};
    }

    h6 {
      font-size: 1rem;
      margin-bottom: 0;
    }
  }
`
