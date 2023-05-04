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
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-shadow: ${globalShadow.allSideShadow};
  margin-bottom: 40px;

  h3 {
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
  }

  article {
    max-width: 430px;
    min-width: 410px;
    margin-bottom: 1%;
    margin-right: 0.93%;
    height: fit-content;
  }

  ${media_breakpoint_down('lg')} {
    article {
      min-width: 407px;
    }

    > div {
      justify-content: center;
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
    }
  }

  ${media_breakpoint_exactly_down(370)} {
    article {
      min-width: 310px;
    }
  }
`
