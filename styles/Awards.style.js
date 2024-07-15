import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { globalColor, globalGradient, globalTransition, rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const AwardsWrapper = styled.section`
  padding: 60px 0;
  background-color: ${globalColor.blue.darkBlue};

  ${media_breakpoint_down('md')} {
    padding: 40px 0;
  }
`;

export const AwardsHolder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  .custom-prev-button, .custom-next-button {
    color: ${globalColor.white};

    &:disabled {
      color: ${globalColor.grayExtraLite.grayExtraLite50};
      background-color: ${globalColor.blue.blue550};
    }
  }

  > p {
    margin: 0;
    color: ${globalColor.white};
    font-weight: 600;
    text-align: center;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(14)};
      line-height: 1.43;
    }
  }
`;

export const AwardsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    flex-shrink: 0;
    width: max-content;
  }
`;

export const AwardsTitle = styled.h2`
  margin: 0;
  color: ${globalColor.white};
  font-size: ${rem(32)};
  line-height: 1.38;
  font-weight: 600;

  ${media_breakpoint_down('md')} {
    font-size: ${rem(20)};
    line-height: 1.4;
  }
`;

export const AwardCardWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;
  border-radius: 12px;
  background-color: ${globalColor.blue.blue6002};
  overflow: hidden;
  border: 1px solid transparent;
  transition: ${globalTransition.default};

  &:hover {
    border-color: ${globalColor.blue.skyBlue};
  }
`;

export const AwardCardImage = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${media_breakpoint_down('md')} {
    width: 144px;
    height: 144px;
  }
`;

export const AwardCardContent = styled.div`
  flex: 1;
  width: 100%;
  padding: 12px 20px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  align-self: flex-start;
  background-color: ${globalColor.blue.blue550};

  > p {
    margin: 0;
    color: ${globalColor.white};
    font-size: ${rem(18)};
    line-height: 1.56;
    font-weight: 500;
    

    ${media_breakpoint_down('md')} {
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  > span {
    margin-top: auto;
    color: ${globalColor.blue.skyBlue};
    font-size: ${rem(20)};
    line-height: 1.6;
    font-weight: 600;

    ${media_breakpoint_down('md')} {
      font-size: ${rem(18)};
      line-height: 1.56;
    }
  }

  ${media_breakpoint_down('md')} {
    padding: 8px 12px;
  }
`;