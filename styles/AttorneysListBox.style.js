import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { globalColor, globalShadow, rem } from './global_styles/Global.styles'
import { media_breakpoint_down, media_breakpoint_exactly_down } from './mediaBreakpoints.style'

const titlesFontSize = `
font-size: ${rem(30)};
`

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  article {
    width: 100%;
    padding: 10px 0 10px 10px;
    height: 175px;

    section {
      gap: 10px;
    }

    p {
      margin: 0;
    }
  }

  h3 {
    font-size: 1.1rem;
  }

  h5 {
    ${titlesFontSize}
  }
`

export const ChairBox = styled.div`
  margin-bottom: 20px;
  width: 100%;
  padding-left: 15px;
`

export const AttorneysSliderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 567px;
  overflow-y: hidden;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  .slick-list {
    text-align: start;

    .slick-active {
      margin-bottom: 15px;
    }
  }
`

export const AttorneysTitleBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: ${(props) => (props?.isSingle ? '0 0 20px 15px' : '20px 0 20px 15px')};

  h5 {
    ${titlesFontSize};
    margin-bottom: 0;
  }

  span {
    ${titlesFontSize};
    color: ${globalColor.gray.gray80};
  }
`

export const UpDownBtn = styled(Button)`
  border-radius: 50%;
  transform: ${({ rotate }) => (rotate ? 'rotate(180deg)' : 'none')};
  margin-left: ${({ rotate }) => (rotate ? '5px' : 'none')}; ;
`

export const AttorneysContainer = styled.section`
  display: flex;
  width: 100%;
  padding: 20px;
  box-shadow: ${globalShadow.allSideShadow};
  margin-bottom: 40px;

  h3 {
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
    }

  .chair-box {
    margin-right: 10px;
  }
    
   .attorneys-list-box {
     width: 100%;
     
     > div {
       display: flex;
       flex-wrap: wrap;
       gap: 1%;
       margin-bottom: 1%;
     }
   }
  }

  .vertical-attorney-card {
    margin-bottom: 1%;
    width: 220px;
  }

  ${media_breakpoint_exactly_down(1040)} {
    flex-direction: column;
  }

  ${media_breakpoint_down('lg')} {
    > div {
      justify-content: center;
    }
  }

  ${media_breakpoint_down('md')} {
    justify-content: center;

    > div {
      justify-content: center;

      > div {
        justify-content: space-around;
      }
    }

    .vertical-attorney-card {
      width: 170px;
      padding: 10px;
      margin-bottom: 10px;

      img {
        width: 150px;
        height: 170px;
      }

      h4 {
        margin-top: 8px;
        margin-bottom: 5px;
        font-size: 1rem;
      }

      a {
        width: 100%;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    article {
      margin-bottom: 2%;
    }
  }

  ${media_breakpoint_exactly_down(470)} {
    padding: 20px 5px;

    h3 {
      padding-left: 15px;
    }

    article {
      padding: 5px;
      min-width: 90%;

      h3 {
        padding: 0;
        margin-top: 10px;
        margin-bottom: 5px;
      }
    }
  }

  ${media_breakpoint_exactly_down(370)} {
    article {
      min-width: 310px;
    }
  }
`
