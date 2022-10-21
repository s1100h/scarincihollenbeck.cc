import styled from 'styled-components'
import { media_breakpoint_exactly_down } from './mediaBreakpoints.style'

export const DownloadTheMap = styled.a`
  display: flex;
  gap: 15px;
  color: #a91110;
  width: fit-content;
  margin-bottom: 15px;

  :hover {
    cursor: pointer;
    color: #a91110;
  }
`

export const LinkMapBox = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  margin-bottom: 20px;
`

export const MediaBr = styled.br`
  display: none;

  ${media_breakpoint_exactly_down('450px')} {
    display: block;
  }
`
