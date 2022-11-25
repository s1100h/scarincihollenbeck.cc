import styled from 'styled-components'
import { globalColor, globalShadow } from './global_styles/Global.styles'
import { media_breakpoint_down, media_breakpoint_exactly_down } from './mediaBreakpoints.style'

export const ContainerXXL = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  align-items: center;
`

export const CentralizedBox = styled.div`
  display: flex;
  border-radius: 2px;
  align-items: center;
  width: 86vw;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  background-color: ${(props) => (props?.notSurface ? 'none' : globalColor.white)};
  box-shadow: ${(props) => (props?.notSurface ? 'none' : globalShadow.allSideShadow)};
  ${({ toColumn }) =>
    toColumn && toColumn === 'true' ? 'flex-direction: column;' : 'flex-wrap: wrap;'}

  ${media_breakpoint_down('xl')} {
    width: 97vw;
    ${(props) => props?.notSurface && 'padding: 0 60px;'}
  }

  ${media_breakpoint_down('lg')} {
    width: 76vw;
  }

  ${media_breakpoint_exactly_down('612px')} {
    width: 100vw;
    border: none;
    ${(props) => props?.notSurface && 'padding: 0 30px;'}
  }
`
export const BoxTitle = styled.h2`
  display: flex;
  width: 100%;
  padding: 45px;
  padding-bottom: 0;
  justify-content: ${({ isBigBoss }) => (isBigBoss === 'true' ? 'center' : 'flex-start')};
  text-transform: uppercase;
`

export const RowSpecial = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
  flex-wrap: wrap;

  ${media_breakpoint_exactly_down('1500px')} {
    justify-content: space-between;
  }

  ${media_breakpoint_down('lg')} {
    justify-content: center;
  }
`

export const TwoColumnsContainer = styled.section`
  display: grid;
  grid-template-columns: 0.33fr 1.8fr 0.7fr 0.33fr;

  ${media_breakpoint_down('lg')} {
    grid-template-columns: 0.22fr 1.8fr 0.7fr 0.22fr;
  }
`
export const FirstColumn = styled.div`
  grid-area: 2/2;
  padding-right: 4vw;

  ${media_breakpoint_exactly_down('1100px')} {
    grid-area: 1/2/1/4;
  }
`

export const SecondColumn = styled.div`
  grid-area: 2/3;

  ${media_breakpoint_exactly_down('1100px')} {
    grid-area: 2/2/2/4;
  }
`

export const BottomContainer = styled.section`
  grid-area: 3/2/3/4;
`
