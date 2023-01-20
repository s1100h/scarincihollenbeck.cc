import styled from 'styled-components'
import { globalColor } from './global_styles/Global.styles'

export const MainArticleTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 2.2rem;
`

export const DateOfArticle = styled.time`
  display: block;
  font-size: 1.2rem;
  margin: 16px 0;
`

export const ArticleShortDescription = styled.section`
  margin-bottom: 16px;

  p {
    font-size: 1.2rem;
    line-height: 1.8;
  }
`

export const MainVirtualizeContainer = styled.nav`
  height: 600px;
  width: 100%;
  overflow: auto;
  background-color: ${globalColor.graySmoke.liteWhiteSmoke};
  border-radius: 5px;
`

export const VirtualizeListBox = styled.ul`
  height: ${(props) => props?.height}px;
  width: 100%;
  position: relative;
`

export const VirtualListItem = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 28px;
  transform: ${(props) => props?.transform};
  font-size: 1rem;
`
