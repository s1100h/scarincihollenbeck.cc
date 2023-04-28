import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown'
import { media_breakpoint_down } from './mediaBreakpoints.style'
import { globalColor, globalShadow } from './global_styles/Global.styles'

export const ButtonTabToggle = styled(Dropdown.Toggle)`
  display: flex;
  width: 100%;
  padding: 10px 30px;
  justify-content: ${({ props }) => (props?.isButtonLink ? 'center' : 'space-between')};
  align-items: center;
  border: 1px solid
    ${({ props }) =>
      props?.isButtonLink
        ? globalColor.blue.ultramarine
        : globalColor.grayExtraLite.grayExtraLite100};
  text-decoration: none;
  transition: All 1s ease;
  -webkit-transition: All 1s ease;
  -moz-transition: All 1s ease;
  border-radius: 0;
  text-align: center;
  font-weight: 600;

  a {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${globalColor.gray.gray80};

    :hover {
      color: ${globalColor.red.darkRed};
      text-decoration: underline;
    }
  }

  :hover {
    background-color: ${({ props }) =>
      props?.isButtonLink ? globalColor.blue.dirtyBlue : globalColor.graySmoke.whiteSmoke};
    color: ${({ props }) => (props?.isButtonLink ? globalColor.white : globalColor.gray.gray100)};
    text-decoration: none;
  }

  :focus {
    box-shadow: none;
  }

  :after {
    display: none;
  }

  svg {
    transition: 0.8s;
    fill: ${globalColor.gray.gray40};
    ${({ props }) => (props?.open ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)')};
  }

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

export const DropMenu = styled(Dropdown.Menu)`
  height: fit-content;
  max-height: 250px;
  overflow-y: auto;
`

export const DropdownItemPractice = styled(Dropdown.Item)`
  font-size: 1rem;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`

export const BlockListBox = styled.section`
  margin-top: 3rem;

  .container {
    padding: 0;
  }
`

export const ListSimple = styled.ul`
  column-count: 3;
  column-gap: 40px;
  padding-left: 15px;
  list-style: decimal;

  li {
    margin-bottom: 10px;

    a {
      color: ${globalColor.blue.dirtyBlue};

      :hover {
        color: ${globalColor.red.darkRed};
      }
    }
  }

  ${media_breakpoint_down('lg')} {
    column-count: 2;
  }

  ${media_breakpoint_down('sm')} {
    column-count: 1;
  }
`

export const SearchWithArticle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7vw;
  gap: 5vw;

  ${media_breakpoint_down('xl')} {
    flex-direction: column-reverse;
  }
`

export const SideBarPracticeBox = styled.nav`
  padding: 10px 20px 20px;
  box-shadow: ${globalShadow.allSideShadow};
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }
  ul {
    padding-left: 25px;
    list-style: decimal;
    margin-bottom: 0;

    li {
      a {
        font-weight: 500;
      }
    }
  }
`
