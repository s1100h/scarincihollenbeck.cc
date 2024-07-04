import styled from "styled-components";
import { globalColor, globalTransition } from "./global_styles/Global.styles";
import { motion } from "framer-motion";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SelectOpener = styled.div`
  position: relative;
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
  border-radius: ${({ $selectActive }) => ($selectActive ? '4px 4px 0 0' : '4px')};
  cursor: pointer;
  transition: ${globalTransition.default};

  &::placeholder {
    color: ${globalColor.gray.gray110};
    opacity: 1;
  }

  &:focus-visible {
    border: 0;
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
  padding: 8px 16px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  z-index: 2;
  background-color: ${globalColor.gray.gray300};
  border-radius: 0px 0px 4px 4px;
  transition: ${globalTransition.default};
  max-height: 30dvh;
  overflow: auto;
`;

export const SelectOption = styled.li`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  color: ${globalColor.blue.darkBlue};
  cursor: pointer;
  transition: ${globalTransition.default};
`;

