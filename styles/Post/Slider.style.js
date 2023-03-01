import styled from 'styled-components'
import Slider from 'react-slick'
import { media_breakpoint_down, media_breakpoint_exactly_down } from '../mediaBreakpoints.style'

const commonStyleSlider = `
  :before {
    font-size: 30px;
    color: black;
  }
`
export const SliderStyled = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-next {
    right: 2%;
    top: -27%;
    ${commonStyleSlider};

    ${media_breakpoint_exactly_down(445)} {
      right: 0;
      top: 50%;
    }
  }

  .slick-prev {
    left: 90%;
    top: -27%;
    ${commonStyleSlider};

    ${media_breakpoint_down('md')} {
      left: 85%;
    }

    ${media_breakpoint_down('sm')} {
      left: 80%;
    }

    ${media_breakpoint_exactly_down(445)} {
      left: -5%;
      top: 50%;
    }
  }
`
