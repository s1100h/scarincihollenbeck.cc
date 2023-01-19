import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const AboutAuthorFormCardContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  ${media_breakpoint_down('lg')} {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

export const AuthorBox = styled.section`
  .float-start {
    margin-right: 1.5rem;
  }
`
