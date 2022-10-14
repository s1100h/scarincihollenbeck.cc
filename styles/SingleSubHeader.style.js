import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const BackgroundContainer = styled.section`
  display: flex;
  justify-content: ${({ props }) => (props?.isTabs || props?.isBlog ? 'flex-start' : 'center')};
  background: url(${({ props }) =>
      props?.isHoliday ? '/images/red-holiday-banner.webp' : '/images/dark-blue-banner.webp'})
    no-repeat center center;
  background-size: cover;
  height: auto;
  padding-top: 3.5em;
  padding-bottom: ${({ props }) => (props?.isTabs ? '6.5em' : '4em')};
  margin-bottom: 50px;
`

export const SubHeaderContent = styled.article`
  border-bottom: 3px solid #db2220;
  margin-bottom: 20px;

  h1 {
    ${(props) => (!props.isBlog ? 'font-size: 3rem' : '')};
    font-weight: 600;
    text-shadow: '2px 3px 3px #000';
    ${(props) => (props.isBlog ? 'margin-bottom: 5px' : '')};

    ${media_breakpoint_down('sm')} {
      font-size: ${(props) => (props.isBlog ? '2.6rem' : '2rem')};
    }
  }
`

export const Description = styled.span`
  display: block;
  font-size: 1.2rem;
`
