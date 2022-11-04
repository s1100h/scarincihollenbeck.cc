import styled from 'styled-components'
import { media_breakpoint_exactly_down } from './mediaBreakpoints.style'

export const AttorneyCardBox = styled.section`
  display: flex;
  border: 0.9px solid #e9e9e9;
  width: 450px;
  box-shadow: 0 0.25rem 0.33rem rgba(0, 0, 0, 0.1);
  height: 148px;

  :hover {
    cursor: pointer;
    transition: 0.8s;
    box-shadow: rgb(99 98 98 / 90%) -2px 0px 18px;
  }

  ${media_breakpoint_exactly_down('612px')} {
    width: 310px;
  }
`

export const LinkBox = styled.a`
  display: flex;
  width: 100%;
  text-decoration: none;
  color: black;
  gap: 20px;

  :hover {
    text-decoration: none;
    color: inherit;
  }

  ${media_breakpoint_exactly_down('612px')} {
    gap: 10px;
  }
`

export const ImageBox = styled.div`
  width: 108px;
  height: 148px;
  background-image: url(${'/images/sh-mini-diamond-PNG.png'});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: center;
`

export const PhotoBox = styled.div``

export const InfoBox = styled.article`
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  p {
    font-size: 0.8rem;
    font-weight: 600;
  }
`

export const UserName = styled.h1`
  color: #b50000;
  font-size: 1.4rem;
  line-height: 1.5;
  text-transform: uppercase;
  margin-bottom: 0;

  ${media_breakpoint_exactly_down('612px')} {
    font-size: 1.1rem;
  }
`
