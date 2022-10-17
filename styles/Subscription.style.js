import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { media_breakpoint_exactly_down } from './mediaBreakpoints.style'

export const SubscriptionButton = styled(Button)`
  width: 100%;
  border-radius: 5px;

  ${media_breakpoint_exactly_down('800px')} {
    width: 30%;
  }
`
