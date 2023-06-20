import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { globalColor, globalShadow } from './global_styles/Global.styles';
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
    backdrop-filter: url(${({ backimg }) => backimg.imgOffice}) blur(5px) saturate(150%);
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

export const LocationsOfficesContainer = styled.section``;

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

export const TileBox = styled.article`
  flex-basis: calc(50% - 10px);
  margin-bottom: 20px;

  &:hover {
    transition: 0.8s;
    box-shadow: ${globalShadow.hoveredShadow};
  }

  ${media_breakpoint_down('sm')} {
    flex-basis: 100%;
  }

  &:first-child,
  &:nth-child(2) {
    flex-basis: calc(25% - 15px);

    ${media_breakpoint_down('xl')} {
      flex-basis: calc(50% - 10px);
    }

    ${media_breakpoint_down('sm')} {
      flex-basis: 100%;
    }
  }

  &:nth-child(3) {
    div {
      padding: 0;
      border: none;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    ${media_breakpoint_down('xl')} {
      flex-basis: 100%;
      order: -1;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 25px;
    border: 1px solid ${globalColor.grayExtraLite.grayExtraLite40};
    height: 100%;

    ${media_breakpoint_down('lg')} {
      padding: 16px;
    }

    h4 {
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 0;
    }

    a {
      font-weight: 500;
      color: ${globalColor.blue.ultramarine};
      cursor: pointer;

      :hover {
        color: ${globalColor.red.darkRed};
      }
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: ${globalColor.blue.ultramarine};
    border-radius: 4px;
    margin-bottom: 20px;

    svg {
      color: ${globalColor.white};
      width: 25px;
      height: 26px;
    }
  }
`;

export const PuzzleContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 80px;
  margin-bottom: 130px;

  ${media_breakpoint_down('xl')} {
    margin-top: 40px;
    margin-bottom: 70px;
  }
`;
