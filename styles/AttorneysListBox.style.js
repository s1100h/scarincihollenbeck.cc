import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import { globalColor, rem } from './global_styles/Global.styles'

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
