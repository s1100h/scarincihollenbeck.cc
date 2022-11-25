import { Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { globalColor, globalShadow } from './global_styles/Global.styles'

export const ProfileHeaderContainer = styled(Container)`
  padding: 40px 60px;
  margin-top: 5%;
  margin-bottom: 40px;
  box-shadow: ${globalShadow.allSideShadow};
`

export const ColStyled = styled(Col)`
  position: relative;
  top: ${({ top }) => (top ? top : 'none')};
  bottom: ${({ bottom }) => (bottom ? bottom : 'none')};
`

export const SubTitleProfileBox = styled.div`
  margin-top: 0px;
  margin-bottom: 36px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${globalColor.graySmoke.extraLiteSmoke};

  h2 {
    color: ${globalColor.gray.gray80};
    font-size: 1rem;
    margin: 10px 0 2px;
  }
`

export const AddressBox = styled.address`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${globalColor.gray.gray80};
    margin-bottom: 0;
  }
`

export const DetailsBox = styled.div`
  display: flex;
`
