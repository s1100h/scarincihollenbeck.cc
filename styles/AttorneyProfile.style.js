import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components'

export const ColStyled = styled(Col)`
  position: relative;
  top: ${({ top }) => (top ? top : 'none')};
  bottom: ${({ bottom }) => (bottom ? bottom : 'none')};
`
