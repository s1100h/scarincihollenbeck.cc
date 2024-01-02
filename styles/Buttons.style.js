import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { commonBtnStyle } from './ButtonsMenu.style';
import { globalColor, rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const RedButtonLink = styled.a`
  padding: 15px 40px;
  background-color: ${globalColor.red.darkRed};
  font-weight: 600;
  color: ${globalColor.white};
  text-decoration: none;

  :hover {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const RedButtonBootstrap = styled(RedButtonLink)`
  margin-left: 20px;
`;

export const ButtonStandardWidth = styled(Button)`
  width: 200px;
  border-radius: 5px;
`;

export const ClearButton = styled(ButtonStandardWidth)`
  margin-right: 12px;
  margin-left: auto;
  border-radius: 0;
  width: 130px;
  height: 33px;
  padding: 5px 22px;
  border: 1px solid ${globalColor.blue.dirtyBlue};
  color: ${globalColor.blue.dirtyBlue};

  :hover {
    border: 1px solid ${globalColor.blue.dirtyBlue};
    color: ${globalColor.blue.dirtyBlue};
  }

  :focus {
    border: 1px solid ${globalColor.blue.dirtyBlue};
    color: ${globalColor.blue.dirtyBlue};
  }

  :active {
    border: 1px solid ${globalColor.blue.dirtyBlue};
    color: ${globalColor.blue.dirtyBlue} !important;
  }

  ${media_breakpoint_down('lg')} {
    margin-bottom: 0 !important;
  }

  ${media_breakpoint_down('sm')} {
    margin-right: 7px;
  }
`;

export const StandardRedButton = styled(Button)`
  ${commonBtnStyle};
  border: none;
  border-radius: 0;
  background-color: ${globalColor.red.darkRed};
  color: ${globalColor.white};

  :hover {
    background: ${globalColor.red.liteRed};
    color: ${globalColor.white};
  }

  :active {
    background-color: ${globalColor.red.burgundy} !important;
  }

  :focus-visible {
    box-shadow: none;
    background-color: ${globalColor.red.burgundy};
  }

  :disabled {
    background-color: ${globalColor.grayExtraLite.grayExtraLite50};
  }
`;

export const StandardBlueButton = styled(Button)`
  padding: 10px 18px;
  width: 100%;
  border: none;
  border-radius: 0;
  background-color: #164587;
  color: ${globalColor.white};
  font-size: ${rem(16)};
  line-height: 24px;
  font-family: var(--font-roboto);
  font-weight: 500;
  position: relative;
  z-index: 0;

  :hover {
    &::after {
      opacity: 1;
    }
  }

  :active {
    background-color: ${globalColor.red.burgundy} !important;
  }

  :focus-visible {
    box-shadow: none;
    background-color: #377EC4;
  }

  :disabled {
    background-color: rgba(22, 69, 135, 0.20);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: linear-gradient(89deg, #377EC4 2.36%, #AFDCF5 107.09%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;
