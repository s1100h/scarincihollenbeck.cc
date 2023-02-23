import styled from 'styled-components'
import { globalColor } from './global_styles/Global.styles'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const ArticleContainer = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`

export const Title = styled.h3`
  font-size: ${({ props }) => (props?.size ? props.size : '1.5rem')};
  font-weight: 600;
  margin-bottom: 10px;
  font-family: ${({ props }) =>
    props?.isKenjoFont ? 'var(--font-KenjoI)' : 'var(--font-GothamPro)'};

  ${media_breakpoint_down('sm')} {
    text-align: center;
  }
`

export const ArticleBody = styled.section`
  font-size: 1.15rem;
  color: ${globalColor.gray.gray80};

  ul {
    padding: 0;
    li {
      margin-bottom: 15px;
      ::before {
        content: '➤';
        margin-right: 10px;
      }
    }
  }
`
