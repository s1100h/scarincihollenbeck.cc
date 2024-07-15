import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { commonBtnStyle } from './ButtonsMenu.style';
import { globalColor, globalTransition, rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import Link from 'next/link';

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

export const ClearButton = styled(Button)`
  margin: 0;
  padding: 3px 15px;
  border: 1px solid ${globalColor.blue.dirtyBlue};
  border-radius: 4px;
  color: ${globalColor.blue.dirtyBlue};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  overflow: hidden;

  :hover {
    border: 1px solid ${globalColor.blue.blue500};
    color: ${globalColor.blue.dirtyBlue};
  }

  :focus {
    border: 1px solid ${globalColor.blue.blue500};
    color: ${globalColor.blue.dirtyBlue};
  }

  :active {
    border: 1px solid ${globalColor.blue.blue500};
    color: ${globalColor.blue.dirtyBlue} !important;
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

export const StandardBlueButton = styled.button`
  padding: 10px 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background-color: ${globalColor.blue.blue500};
  color: ${globalColor.white};
  font-size: 1rem;
  line-height: 1.5;
  font-family: var(--font-poppins);
  font-weight: 600;
  position: relative;
  z-index: 0;

  @media (hover: hover) {
    :hover {
      &::after {
        opacity: 1;
      }
    }
  }

  &:hover {
    color: ${globalColor.white};
  }

  :active {
    color: ${globalColor.white};
    background-color: ${globalColor.blue.darkBlue};
  }

  :disabled {
    pointer-events: none;
    background-color: rgba(22, 69, 135, 0.2);
    opacity: 0.65;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    z-index: -1;
    background-image: linear-gradient(87deg, #164587 -9.15%, #060B2A 100%);;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${media_breakpoint_down('sm')} {
    font-size: ${rem(14)};
    line-height: 1.43;
  }
`;

export const StandardLightBlueButton = styled(StandardBlueButton)`
  background-color: ${globalColor.blue.blue400};
`;

export const ButtonRed = styled(Link)`
  width: max-content;
  padding: 8px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  border-radius: 4px;
  background-color: ${globalColor.red.newRed};
  color: ${globalColor.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  overflow: hidden;
  position: relative;
  z-index: 0;
  transition: ${globalTransition.default};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(88deg, #8F1B11 -16.23%, #3D0804 102.61%);
    z-index: -1;
    opacity: 0;
    transition: ${globalTransition.default};
  }

  @media (hover:hover) {
    &:hover {
      box-shadow: 0px 2px 8px 0px rgba(64, 64, 64, 0.39);

      &::after {
        opacity: 1;
      }
    }
  }

  &:hover {
    color: ${globalColor.white};
  }

  &:active {
    background-color: ${globalColor.red.сoffee};
  }

  ${media_breakpoint_down('sm')} {
    padding: 10px 40px;
    font-size: ${rem(14)};
    line-height: 1.43;
  }
`;

export const UnderlinedLink = styled(Link)`
  width: max-content;
  padding: 4px 0 2px;
  margin-top: auto;
  color: ${globalColor.blue.darkBlue};
  font-weight: 600;
  border-bottom: 2px solid ${globalColor.blue.skyBlue};
  transition: ${globalTransition.default};

  &:hover {
    color: ${globalColor.blue.blue400};
    border-color: ${globalColor.blue.blue400};
  }

  ${media_breakpoint_down('sm')} {
    font-size: 0.875rem;
    line-height: 1.43;
  }
`;