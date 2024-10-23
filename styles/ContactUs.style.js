import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import {
  globalBorderRadius,
  globalColor,
  globalShadow,
  globalTransition,
  rem,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { GradientWrapper } from './SingleSubHeader.style';

const linearGradientPosition = (position) => `
    to right,
    rgba(255, 255, 255, 0) 0%,
    #fafafa ${position}%,
    rgba(255, 255, 255, 0) 100%
`;

export const OfficeBtn = styled(Button)`
  display: flex;
  padding: 20px 25px;
  border-radius: 0;
  width: 100%;
  background-color: ${globalColor.white};
  box-shadow: ${globalShadow.allSideShadow};
  font-weight: bold;
  position: relative;
  z-index: 7;

  span {
    position: relative;
    z-index: 4;
  }

  ${(props) => {
    return (
      props.backimg.isChosen &&
      `
			background: no-repeat url(${props.backimg.imgOffice});
			background-size: 47% 138%;
			background-position: right top 29%;
			pointer-events: none;

			div {
    		width:  86%;
  		}
			`
    );
  }}
  border: none;

  :hover {
    box-shadow: ${globalShadow.hoveredShadow};
    background-color: ${globalColor.white};
    background: no-repeat url(${({ backimg }) => backimg.imgOffice});
    background-size: 47% 138%;
    backdrop-filter: url(${({ backimg }) => backimg.imgOffice}) blur(5px)
      saturate(150%);
    background-position: right top 29%;

    div {
      width: 100%;
      background: linear-gradient(${linearGradientPosition(47)});
    }
  }

  :first-child:active {
    background-color: ${globalColor.white};
  }
`;

export const OfficeBtnGradientWrapper = styled(GradientWrapper)`
  width: 100%;
  background: linear-gradient(${linearGradientPosition(54)});

  ${media_breakpoint_down('md')} {
    background: linear-gradient(${linearGradientPosition(58)});
  }
`;

export const LocationsOfficesContainer = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const CardListBox = styled.div`
  display: flex;
  gap: 25px;

  ${media_breakpoint_down('xl')} {
    flex-wrap: wrap;
  }

  ${media_breakpoint_down('lg')} {
    flex-wrap: nowrap;
  }

  ${media_breakpoint_down('md')} {
    flex-wrap: wrap;
  }

  > :first-child {
    flex-basis: 50%;

    ${media_breakpoint_down('xl')} {
      flex-basis: 100%;
    }

    ${media_breakpoint_down('lg')} {
      flex-basis: 50%;
    }

    ${media_breakpoint_down('md')} {
      flex-basis: 100%;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    gap: 13px;
    margin-bottom: 0;

    ${media_breakpoint_down('xl')} {
      flex-basis: 100%;
    }

    ${media_breakpoint_down('lg')} {
      flex-basis: 50%;
    }

    ${media_breakpoint_down('md')} {
      flex-basis: 100%;
    }

    li {
      width: 100%;
      position: relative;

      .hover-blur {
        display: none;
        position: absolute;
      }

      :hover {
        .hover-blur {
          display: flex;
          height: 100%;
          width: 47%;
          top: 0;
          right: 0;
          background: rgba(255, 255, 255, 25%);
          z-index: 1;
        }
      }
    }
  }
`;

export const TileContactWrapper = styled.article`
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  border-radius: ${globalBorderRadius.small};
  background-color: ${globalColor.white};
  box-shadow: ${globalShadow.shadowM};
  transition: ${globalTransition.default};
  overflow: hidden;

  &:hover {
    box-shadow: ${globalShadow.hoveredShadow};
  }

  &:has(img) {
    padding: 0 !important;
    border: 0 !important;
  }
`;

export const TileContactHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

  &:empty {
    display: none;
  }
`;

export const TileContactIcon = styled.span`
  padding: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${globalColor.blue.blue400};
  color: ${globalColor.white};

  ${media_breakpoint_down('md')} {
    width: 32px;
    height: 32px;
  }

  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const TileContactTitle = styled.h4`
  margin: 0;
  color: ${globalColor.blue.blue500};
  font-size: ${rem(32)};
  line-height: 1.5;
  font-weight: 600;
  font-family: var(--font-poppins);
  text-transform: capitalize;

  ${media_breakpoint_down('lg')} {
    font-weight: 500;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(24)};
    line-height: 1.33;
  }
`;

export const TileContactBody = styled.div`
  flex: 1;
  > p {
    margin: 0;
    font-family: var(--font-poppins);
    color: ${globalColor.gray.gray110};

    strong {
      color: ${globalColor.black};
    }

    ${media_breakpoint_down('md')} {
      font-size: ${rem(14)};
      line-height: 1.42;
    }

    > a {
      color: ${globalColor.blue.blue400};
      transition: ${globalTransition.default};

      &:hover {
        color: ${globalColor.red.darkRed};
      }
    }
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PuzzleContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 80px;
  margin-bottom: 130px;

  ${media_breakpoint_down('xl')} {
    margin-top: 40px;
    margin-bottom: 70px;
  }

  ${TileContactWrapper} {
    width: calc((100% - 20px) / 2);
    padding: 28px;
    border: 2px solid ${globalColor.gray.gray10};

    &:nth-child(1),
    &:nth-child(2) {
      width: calc(25% - 15px);

      ${media_breakpoint_down('xl')} {
        width: calc((100% - 20px) / 2);
      }

      ${media_breakpoint_down('sm')} {
        width: 100%;
      }
    }

    &:has(img) {
      ${media_breakpoint_down('xl')} {
        width: 100%;
        order: -1;
      }
    }

    ${media_breakpoint_down('lg')} {
      padding: 16px;
    }

    ${media_breakpoint_down('sm')} {
      width: 100%;
    }
  }

  ${TileContactHeader} {
    align-items: flex-start;
    flex-direction: column;
    row-gap: 20px;
  }

  ${TileContactIcon} {
    background-color: ${globalColor.blue.ultramarine};
  }

  ${TileContactTitle} {
    color: ${globalColor.black};
  }
`;
