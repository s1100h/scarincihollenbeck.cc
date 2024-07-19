import styled from 'styled-components';
import {
  globalColor,
  globalTransition,
  rem,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SelectOpener = styled.div`
  position: relative;
  z-index: ${({ $selectActive }) => ($selectActive ? '3' : '1')};
`;

export const SelectInput = styled.input`
  padding: 14px 48px 14px 16px;
  width: 100%;
  background-color: ${globalColor.gray.gray10};
  border: 0;
  outline: 0;
  color: ${globalColor.blue.darkBlue};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  border-radius: ${({ $selectActive }) =>
    $selectActive ? '4px 4px 0 0' : '4px'};
  cursor: pointer;
  transition: ${globalTransition.default};

  &::placeholder {
    color: ${globalColor.gray.gray110};
    opacity: 1;
  }

  &:focus-visible {
    border: 0;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 1.43;
  }
`;

export const SelectIcon = styled.span`
  position: absolute;
  right: 16px;
  top: 14px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  rotate: ${({ $selectActive }) => ($selectActive ? '180deg' : '0deg')};
  transition: ${globalTransition.default};
  cursor: pointer;
`;

export const SelectOptions = styled.ul`
  margin: 0;
  padding: 2px 16px;
  position: absolute;
  top: 99%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background-color: ${globalColor.gray.gray300};
  border-radius: 0px 0px 4px 4px;
  transition: ${globalTransition.default};
  max-height: 30dvh;
  overflow: auto;
  box-shadow: 0px 2px 16px 0px rgba(10, 62, 108, 0.22);

  &::-webkit-scrollbar-track {
    background-color: #c5c5c5;
    border-radius: 8px;
    opacity: 0;
  }

  &::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${globalColor.gray.gray500};
    border-radius: 8px;
  }

  // FireFox
  @supports not selector(::-webkit-scrollbar-thumb) {
    scrollbar-color: ${globalColor.gray.gray500} rgba(146, 146, 146, 0.38);
    scrollbar-width: thin;
  }
`;

export const SelectOption = styled.li`
  padding: 6px 0;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  color: ${globalColor.blue.darkBlue};
  cursor: pointer;
  transition: ${globalTransition.default};

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 1.43;
  }
`;
