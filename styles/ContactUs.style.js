import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { globalColor, globalShadow } from './global_styles/Global.styles'

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
			background-size: 50% 138%;
			background-position: right top 29%;
			pointer-events: none;

			div {
    		width:  86%;
  		}
			`
    )
  }}
  border: none;

  :hover {
    box-shadow: ${globalShadow.hoveredShadow};
    background-color: ${globalColor.white};
    background: no-repeat url(${({ backimg }) => backimg.imgOffice});
    background-size: 50% 138%;
    backdrop-filter: url(${({ backimg }) => backimg.imgOffice}) blur(5px) saturate(150%);
    background-position: right top 29%;

    div {
      width: 86%;
    }
  }

  :first-child:active {
    background-color: ${globalColor.white};
  }
`

export const LocationsOfficesContainer = styled.section``

export const CardListBox = styled.div`
  display: flex;
  gap: 25px;

  > :first-child {
    width: 57%;
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 13px;

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
          width: 50%;
          top: 0;
          right: 0;
          background: rgba(255, 255, 255, 60%);
          z-index: 1;
        }
      }
    }
  }
`

export const TileBox = styled.article`
  display: flex;
  flex-direction: column;
  padding: 25px;
  border: 1px solid ${globalColor.gray.gray60};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: ${globalColor.blue.ultramarine};
    border-radius: 4px;

    svg {
      color: ${globalColor.white};
      width: 25px;
      height: 26px;
    }
  }
`

export const PuzzleCotainer = styled.section`
  display: flex;
`
