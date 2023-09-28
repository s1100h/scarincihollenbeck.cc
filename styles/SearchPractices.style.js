import styled from 'styled-components';
import { globalColor, globalShadow } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const SearchPracticesBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  padding: 28px 41px;
  box-shadow: ${globalShadow.allSideShadow};
  position: relative;

  form {
    margin: 0;

    .form-group {
      .form-control {
        text-transform: capitalize;
      }
    }
  }

  ${media_breakpoint_down('xl')} {
    width: 50%;
  }

  ${media_breakpoint_down('lg')} {
    width: 50%;
  }

  ${media_breakpoint_down('md')} {
    width: 100%;

    form {
      width: 100%;
    }
  }

  ${media_breakpoint_down('sm')} {
    width: 100%;
  }
`;

export const DropDownResults = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: fit-content;
  max-height: 350px;
  padding: 15px 0;
  overflow-y: auto;
  background-color: ${globalColor.white};
  box-shadow: -10px 10px 19px 0px rgba(0, 0, 0, 0.06), 0px -7px 16px 0px rgba(0, 0, 0, 0.06);
  position: absolute;
  z-index: 10;
  top: 85%;

  li {
    color: ${globalColor.gray.gray80};
    padding: 10px 20px;

    :hover {
      cursor: pointer;
      background-color: ${globalColor.graySmoke.smoke};
    }

    a {
      width: 100%;
      color: ${globalColor.black};

      :hover {
        text-decoration: none;
      }
    }
  }

  hr {
    height: 2px;
    width: 90%;
    margin: 10px auto;
    color: ${globalColor.gray.gray80};
  }
`;
