import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const ButtonLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  width: 168px;
  background: #a91110;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: #ffffff;
  text-decoration: none;

  span {
    display: flex;
  }

  svg {
    display: none;
  }

  :hover {
    color: #ffffff;
    text-decoration: none;
  }

  ${media_breakpoint_down('lg')} {
    width: 50px;

    span {
      display: none;
    }

    svg {
      display: block;
      height: 25px;
      width: 25px;
    }
  }
`
