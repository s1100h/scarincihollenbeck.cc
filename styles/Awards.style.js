import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { globalColor, globalGradient } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

const common = `
  background: none;
    :hover {
      background: none;
    }
    :before {
      color: black;
    }
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0 25px;
  margin: 0 0 16px 0;

  h2 {
    font-family: var(--font-poppins);
    font-style: normal;
    font-size: 4.5rem;
    color: ${globalColor.black};
    text-transform: uppercase;
    margin-bottom: 0;
  }

  ${media_breakpoint_down('xl')} {
    h2 {
      font-size: 3.5rem;
    }
  }

  ${media_breakpoint_down('lg')} {
    h2 {
      font-size: 2.5rem;
    }
  }

  ${media_breakpoint_down('md')} {
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 3rem;
    }
  }

  ${media_breakpoint_down('sm')} {
    align-items: center;

    h2 {
      font-size: 2rem;
    }
  }
`;

export const Award = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: ${globalGradient.award};
`;

export const AwardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  row-gap: 16px;

  > div {
    width: 90%;
  }

  .disclaimer {
    text-align: center;
    margin: 0;
  }

  .react-multi-carousel-dot-list {
    position: static;
    order: 3;
  }

  ${media_breakpoint_down('xs')} {
    padding: 0 50px;
  }
`;

export const CarouselStyled = styled(Carousel)`
  .react-multiple-carousel__arrow--right {
    right: -17px !important;
    ${common};
  }

  .react-multiple-carousel__arrow--left {
    left: -17px !important;
    ${common};
  }

  ${media_breakpoint_down('sm')} {
    .react-multiple-carousel__arrow {
      display: block !important;
    }
  }
`;
