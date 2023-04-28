import styled from 'styled-components'
import { globalColor } from './global_styles/Global.styles'
import { media_breakpoint_exactly_down } from './mediaBreakpoints.style'

export const AttorneyCardBox = styled.article`
  display: flex;
  border: 0.9px solid ${globalColor.graySmoke.smoke};
  min-width: 450px;
  flex-basis: calc(33.3% - 15px);
  padding: 20px 0 17px 20px;
  box-shadow: 0 0.25rem 0.33rem rgba(0, 0, 0, 0.1);

  :hover {
    cursor: pointer;
    transition: 0.8s;
    box-shadow: rgb(99 98 98 / 90%) -2px 0px 18px;
  }

  ${media_breakpoint_exactly_down(612)} {
    width: 90vw;
    min-width: 100%;
  }
`

export const LinkBox = styled.section`
  display: flex;
  width: 100%;
  text-decoration: none;
  color: black;
  gap: 20px;

  :hover {
    text-decoration: none;
    color: inherit;

    h3 {
      color: ${globalColor.red.darkRed};
    }
  }

  ${media_breakpoint_exactly_down(612)} {
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

export const InfoBox = styled.section`
  display: flex;
  flex-direction: column;

  p {
    font-size: 1rem;
    color: ${globalColor.gray.gray80};
  }
`

export const UserName = styled.h3`
  font-size: 1.4rem;
  line-height: 1.3;
  margin-bottom: 0;

  ${media_breakpoint_exactly_down(612)} {
    font-size: 1.1rem;
  }
`

export const ContactBox = styled.address`
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    gap: 15px;

    svg {
      fill: ${globalColor.gray.gray80};
      width: 20px;
    }

    span {
      font-weight: 600;
      text-decoration: 1px underline;
    }
  }
`
