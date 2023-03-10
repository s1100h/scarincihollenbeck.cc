import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'
import { ButtonLinkCss, buttonsHoverActive } from './global_styles/Global.styles'

export const AboutAuthorFormCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 8%;
  margin-bottom: 20px;
  width: inherit;

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

export const ContactNowBtn = styled.button`
  ${ButtonLinkCss};
  width: 100%;
  height: 55px;

  ${buttonsHoverActive};

  ${media_breakpoint_down('lg')} {
    width: 80%;

    span {
      display: flex;
    }
  }
`

export const FormBox = styled.div`
  width: 500px;
  padding-left: 1px;
  height: content-box;

  h4 {
    margin-bottom: 20px;
  }

  ${media_breakpoint_down('sm')} {
    width: 100%;
  }
`
