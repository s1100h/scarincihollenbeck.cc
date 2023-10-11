import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';

export const BackgroundContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: ${({ props }) =>
    props?.isTabs || props?.isBlog ? 'flex-start' : 'center'};
  background: no-repeat
    url(${({ props }) =>
      props?.isHoliday
        ? '/images/holiday-banner.webp'
        : '/images/skyscraper2.png'});
  background-position: ${({ props }) =>
    props?.isHoliday?.length > 0
      ? 'right 1% bottom 31%'
      : 'right 9% bottom 45%'};
  background-size: ${({ props }) =>
    props?.isHoliday?.length > 0 ? 'auto' : 'contain'};
  height: auto;
  padding-top: 3.5em;
  padding-bottom: ${({ props }) => {
    if (props?.isFilter) return '6.5em';
    if (props?.isTabs || props?.isBlog) return '1.5em';
    return '4em';
  }};
  margin-bottom: 50px;
  box-shadow: ${rem(21)} 0 ${rem(32)} rgb(0 0 0 / 10%);
  position: relative;

  ${media_breakpoint_down('lg')} {
    background-size: ${({ props }) => (props?.isHoliday ? 'auto' : 'contain')};
  }

  ${({ props }) => {
    return (
      props?.backgroundImage?.length > 0 &&
      `
      background: no-repeat url(${props?.backgroundImage});
      background-size: 50% 138%;
      background-position: right top 29%;
      
      ${media_breakpoint_down('lg')} {
         background-size: 50%;
        }
        
      ${media_breakpoint_down('md')}{
          padding-top: 0;
          padding-bottom: 0;
        }
      `
    );
  }}

  ${({ props }) => {
    return props?.isHoliday?.length > 0
      ? `${media_breakpoint_down('xl')} {
             background-position: right 9% bottom 0;
             background-size: 50%;
             padding-bottom: ${props?.isFilter ? '6.5em' : '2em'};
          }
          `
      : '';
  }}

  ${media_breakpoint_down('md')} {
    background-position: ${({ props }) =>
      props?.isHoliday ? '' : 'left 50vw bottom 0%'};
    background-size: 100%;
    padding-bottom: 20px;
  }

  ${media_breakpoint_exactly_down(504)} {
    background-size: ${({ props }) => (props?.isHoliday ? '' : '108%')};
    background-position: ${({ props }) =>
      props?.isHoliday ? '' : 'bottom 0%'};
  }

  @media print {
    display: none;
  }
`;

export const GradientWrapper = styled.div`
  height: 100%;
  width: 100vw;
  position: absolute;
  top: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 27%,
    ${globalColor.graySmoke.extraLiteWhiteSmoke} 50%,
    rgba(255, 255, 255, 0) 68%
  );
`;

export const SubHeaderContent = styled(Container)`
  h1 {
    margin-bottom: 0;
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
    color: ${globalColor.black};
  }

  ${media_breakpoint_down('sm')} {
    h1 {
      font-size: 1.85rem;
    }
  }
`;

export const Description = styled.div`
  width: 50vw;
  color: ${({ whiteVariant }) =>
    whiteVariant ? globalColor.white : globalColor.gray.gray80};
  margin-bottom: 0;
  font-size: ${rem(20)};

  ${media_breakpoint_down('xl')} {
    width: 60vw;
  }

  ${media_breakpoint_down('md')} {
    background-color: rgb(255 255 255 / 58%);
    color: ${globalColor.black};
  }

  ${media_breakpoint_down('sm')} {
    width: 100%;
  }
`;
