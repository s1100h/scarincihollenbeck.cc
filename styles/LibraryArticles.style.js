import styled from 'styled-components'
import { globalColor, globalShadow } from './global_styles/Global.styles'
import { media_breakpoint_down } from './mediaBreakpoints.style'
import Link from 'next/link'

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

export const LinkWithEllipsis = styled(Link)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const SideBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  box-shadow: ${globalShadow.allSideShadow};
  padding: 25px 20px;

  nav {
    margin-bottom: 20px;

    h4 {
      margin-right: 0;
    }

    .second-hr {
      width: 26%;
    }

    ${media_breakpoint_down('lg')} {
      .second-hr {
        width: 66%;
      }
    }

    ${media_breakpoint_down('md')} {
      .second-hr {
        width: 56%;
      }
    }

    ${media_breakpoint_down('md')} {
      .second-hr {
        width: 36%;
      }
    }
  }

  ul {
    li {
      display: flex;
      gap: 5px;
      color: ${globalColor.gray.gray60};
    }
  }

  ${media_breakpoint_down('lg')} {
  }
`

export const AllArticlesTitle = styled.h3`
  font-weight: 600;
  font-size: 3rem;
  font-family: var(--font-poppins), sans-serif;
`
