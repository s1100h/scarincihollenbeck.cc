import styled from 'styled-components';
import {
  entAndMediaColors,
  globalColor,
  rem,
} from 'styles/global_styles/Global.styles';
import { EnterntainmentTabBtn } from './EntertainmentInfoBlock.style';
import { motion } from 'framer-motion';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from 'styles/mediaBreakpoints.style';

export const EntertainmentModal = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background-color: ${globalColor.white};
  box-shadow: 0 4px 33px 0 rgba(0, 0, 0, 0.33);
  z-index: 1;
  overflow: auto;

  ${media_breakpoint_exactly_down(1440)} {
    width: 75%;
  }

  ${media_breakpoint_down('md')} {
    width: 100%;
  }
`;
export const EntertainmentModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0;
`;
export const EntertainmentModalContent = styled.div`
  padding: 40px 135px 0 40px;

  ${media_breakpoint_exactly_down(1850)} {
    padding: 40px 84px 0 40px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    padding: 40px 32px 0 40px;
  }

  ${media_breakpoint_down('md')} {
    padding: 40px 16px;
  }
`;
export const EntertainmentModalClose = styled.div`
  margin: 0 0 0 auto;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;
  transform: rotate(45deg);
  transition: all 0.5s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: ${globalColor.black};
  }

  &::before {
    width: 30px;
    height: 2px;
    top: 14px;
    left: 0;
  }

  &::after {
    width: 2px;
    height: 30px;
    top: 0;
    left: 14px;
  }

  &:hover {
    transform: rotate(225deg);
  }

  ${media_breakpoint_down('md')} {
    width: 20px;
    height: 20px;

    &::before {
      width: 20px;
      height: 2px;
      top: 9px;
      left: 0;
    }

    &::after {
      width: 2px;
      height: 20px;
      top: 0;
      left: 9px;
    }
  }
`;
export const EntertainmentModalList = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;
export const EntertainmentModalListItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
  font-family: var(--font-poppins), sans-serif;
  color: ${globalColor.black};

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 21px;
  }
`;
export const EntertainmentModalListNumber = styled.div`
  width: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  color: ${entAndMediaColors.entAndMediaColorGray};

  ::before {
    content: '';
    display: flex;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 5px solid ${entAndMediaColors.entAndMediaColorGray};
    border-bottom: 5px solid transparent;
  }

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 21px;
  }
`;

export const EntertainmentModalDescription = styled.div`
  margin-bottom: 50px;
  font-family: var(--font-poppins), sans-serif;
  color: ${entAndMediaColors.entAndMediaColorGray};

  ${media_breakpoint_down('md')} {
    font-size: ${rem(14)};
    line-height: 21px;
  }
`;
export const EntertainmentModalFooter = styled.div`
  margin-top: auto;
  background-color: ${globalColor.black};
  padding: 20px 135px 20px 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${EnterntainmentTabBtn} {
    border-color: white;
  }

  ${media_breakpoint_exactly_down(1850)} {
    padding: 20px 84px 20px 40px;
  }

  ${media_breakpoint_exactly_down(1440)} {
    padding: 20px 32px 20px 40px;
  }

  ${media_breakpoint_down('md')} {
    padding: 20px 16px;
  }
`;
