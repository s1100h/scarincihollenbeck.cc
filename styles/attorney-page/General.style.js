import styled from 'styled-components'
import { globalColor, rem } from 'styles/global_styles/Global.styles'

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
`

export const GrayList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props?.isBigWidth ? 'start' : 'center')};
  width: ${(props) => (props?.isBigWidth ? '100%' : '400px')};
  height: 380px;
  ${commonRules}
  gap: 20px;
  overflow-y: auto;

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 12px;
    color: ${globalColor.gray.gray80};
    gap: 7px;
    list-style: disc;
  }
`

export const ClientsBox = styled.div`
  ${commonRules}

  h3 {
    margin-bottom: 20px;
  }
`
