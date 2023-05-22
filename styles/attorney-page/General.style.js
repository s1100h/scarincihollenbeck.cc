import styled from 'styled-components'
import { globalColor, rem } from 'styles/global_styles/Global.styles'
import { media_breakpoint_down } from 'styles/mediaBreakpoints.style'

const commonRules = `
padding: 40px 20px 40px;
border: 1px solid ${globalColor.grayLite.grayLite40};
`

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-size: ${rem(32)};
    text-transform: capitalize;
  }
`

export const EducationAdmissionBox = styled.div`
  display: flex;
  gap: 25px;

  ${media_breakpoint_down('sm')} {
    flex-direction: column;
    align-items: center;
  }
`

export const GrayList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props?.hightAuto ? 'start' : 'center')};
  width: 100%;
  height: ${(props) => (props?.hightAuto ? 'auto' : '380px')};
  ${commonRules};
  gap: 20px;
  overflow-y: auto;

  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-left: 12px;
    color: ${globalColor.gray.gray80};
    gap: 7px;
    list-style: disc;

    li {
      ::before {
        content: '';
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    align-items: start;
    width: 100%;
    height: fit-content;
    padding-bottom: 0;
    padding-top: 10px;
  }
`

export const ClientsBox = styled.div`
  ${commonRules}

  h3 {
    margin-bottom: 20px;
  }
`
