import styled from 'styled-components'
import { globalColor, rem } from './global_styles/Global.styles'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const BackgroundContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: ${({ props }) => (props?.isTabs || props?.isBlog ? 'flex-start' : 'center')};
  background: url(${({ props }) =>
      props?.isHoliday ? '/images/red-holiday-banner.webp' : '/images/skyscraper.png'})
    no-repeat center center;
  background-size: cover;
  height: auto;
  padding-top: 3.5em;
  padding-bottom: ${({ props }) => (props?.isTabs ? '6.5em' : '4em')};
  margin-bottom: 50px;
  box-shadow: ${rem(21)} 0 ${rem(32)} rgb(0 0 0 / 10%);
`

export const SubHeaderContent = styled.article`
  padding: 0 6.9vw;
  h1 {
    margin-bottom: 0;
    font-family: 'Kenjo I';
    font-size: ${rem(64)};

    color: ${globalColor.black};
    ${(props) => (!props.isBlog ? 'font-size: 3rem' : '')};
    text-shadow: '2px 3px 3px #000';
    ${(props) => (props.isBlog ? 'margin-bottom: 5px' : '')};

    ${media_breakpoint_down('sm')} {
      font-size: ${(props) => (props.isBlog ? '2.6rem' : '2rem')};
    }
  }
`

export const Description = styled.section`
  width: 44.5vw;
  color: ${globalColor.gray.gray80};

  ${media_breakpoint_down('xl')} {
    width: 60vw;
  }

  ${media_breakpoint_down('sm')} {
    width: 100%;
  }
`
