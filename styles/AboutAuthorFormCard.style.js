import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const AboutAuthorFormCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 8%;
  margin-bottom: 20px;

  h4 {
    font-weight: 600;
  }
  ${media_breakpoint_down('lg')} {
    gap: 5px;
  }
`

export const AuthorBox = styled.section`
  .float-start {
    margin-right: 1.5rem;
  }
`
