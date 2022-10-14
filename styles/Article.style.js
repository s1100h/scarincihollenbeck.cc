import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const ArticleContainer = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;

  ${media_breakpoint_down('sm')} {
    text-align: center;
  }
`

export const ArticleBody = styled.section`
  font-size: 1.15rem;
`
