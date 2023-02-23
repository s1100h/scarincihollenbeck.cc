import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { globalColor, rem } from './global_styles/Global.styles'
import { media_breakpoint_down, media_breakpoint_exactly_down } from './mediaBreakpoints.style'

export const BackgroundContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: ${({ props }) => (props?.isTabs || props?.isBlog ? 'flex-start' : 'center')};
  background: no-repeat
    url(${({ props }) =>
      props?.isHoliday ? '/images/holiday-banner.webp' : '/images/skyscraper2.png'});
  background-position: ${({ props }) =>
    props?.isHoliday ? 'right 1% bottom 31%' : 'right 9% bottom 45%'};
  background-size: ${({ props }) => (props?.isHoliday ? 'auto' : 'contain')};
  height: auto;
  padding-top: 3.5em;
  padding-bottom: ${({ props }) => {
    if (props?.isFilter) return '6.5em'
    if (props?.isTabs) return '1.5em'
    return '4em'
  }};
  margin-bottom: 50px;
  box-shadow: ${rem(21)} 0 ${rem(32)} rgb(0 0 0 / 10%);

  ${media_breakpoint_down('xl')} {
    ${({ props }) =>
      props?.isHoliday
        ? ''
        : `background-position: right 9% bottom 0%;
      background-size: 50%;
      padding-bottom: ${props?.isFilter ? '6.5em' : '2em'};
      `};
  }

  ${media_breakpoint_down('lg')} {
    background-size: ${({ props }) => (props?.isHoliday ? 'auto' : 'contain')};
    /* background-position: ${({ props }) => (props?.isHoliday ? 'right 1% bottom 31%' : '')}; */
  }

  ${media_breakpoint_down('md')} {
    background-position: ${({ props }) => (props?.isHoliday ? '' : 'left 54vw bottom 0%')};
  }

  ${media_breakpoint_exactly_down('504px')} {
    background-size: ${({ props }) => (props?.isHoliday ? '' : '100%')};
    background-position: ${({ props }) => (props?.isHoliday ? '' : 'bottom 0%')};
  }
`

export const SubHeaderContent = styled(Container)`
  h1 {
    margin-bottom: 0;
    font-family: var(--font-KenjoI);
    font-size: ${rem(64)};

    color: ${globalColor.black};
    ${(props) => (!props.isBlog ? 'font-size: 3rem' : '')};
    text-shadow: '2px 3px 3px #000';
  }
`

export const Description = styled.section`
  width: 50vw;
  color: ${globalColor.gray.gray80};

  ${media_breakpoint_down('xl')} {
    width: 60vw;
  }

  ${media_breakpoint_down('md')} {
    color: ${globalColor.black};
  }

  ${media_breakpoint_down('sm')} {
    width: 100%;
  }
`
