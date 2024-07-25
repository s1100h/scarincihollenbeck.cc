import styled from "styled-components";
import { media_breakpoint_down } from "styles/mediaBreakpoints.style";

const isLandscape = (orientationStr) => orientationStr.includes('landscape');

export const GallerySliderWrapper = styled.div`
  .slide {
    width: max-content;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const GallerySliderCard = styled.div`
  overflow: hidden;
  position: relative;
  width: ${({ orientation }) =>
      isLandscape(orientation) ? '600px' : '340px'};
  height: 424px;

  ${media_breakpoint_down('md')} {
    width: 325px;
  }
`;