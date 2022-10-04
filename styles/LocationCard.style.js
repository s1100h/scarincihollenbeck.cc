import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const LocationTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 1.2;
  color: #000000;
  font-family: 'Brand';
  text-transform: uppercase;
  margin-bottom: 30px;

  ${media_breakpoint_down('md')} {
    font-size: 38px;
    text-align: center;
  }
`

export const LocationCardMain = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;

  ${media_breakpoint_down('xl')} {
    grid-template-columns: 2fr 1.5fr;
  }

  ${media_breakpoint_down('md')} {
    grid-template-columns: auto;
  }
`

export const MapBox = styled.div`
  height: 100%;
  > div,
  iframe {
    height: 100%;
  }
`

export const LocationOffices = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2vh;
`

export const LocationHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 27px;
  cursor: pointer;

  h1 {
    color: #000;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    margin-bottom: 0;
  }
`

export const ContactInfoCard = styled.article`
  box-shadow: -2px 0 10px rgb(0 0 0 / 13%);

  header {
    background-color: ${(props) => (props.openCard ? 'whitesmoke' : 'none')};
  }

  footer {
    display: ${(props) => (props.openCard ? 'flex' : 'none')};
    justify-content: flex-end;
    padding: 0 27px 27px 0;
  }

  ${media_breakpoint_down('xl')} {
    footer {
      margin-top: 20px;
    }
  }
`

export const ContactInfoContent = styled.main`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  padding: 0 27px 0 27px;
  margin-top: 20px;
`

export const LinkToAttorneys = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  color: #a91110;
  border-bottom: 1.5px solid #a91110;

  :hover {
    color: #a91110;
    text-decoration: none;
  }
`

export const Contact = styled.p`
  display: flex;
  gap: 21px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 0;
`
