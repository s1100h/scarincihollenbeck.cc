import styled from 'styled-components';
import {
  globalColor,
  globalTransition,
  rem,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const PracticesTabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const PracticesTabsOpeners = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  ${media_breakpoint_down('md')} {
    gap: 16px;
  }
`;

export const PracticesTabsOpener = styled.button`
  padding: 7px 15px;
  border: 1px solid ${globalColor.gray.gray110};
  border-radius: 4px;
  background-color: transparent;
  color: ${globalColor.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  transition: ${globalTransition.default};

  &:hover {
    border-color: ${globalColor.blue.blue400};
    background-color: ${globalColor.blue.blue6002};
  }

  &.active {
    border-color: ${globalColor.blue.blue400};
    background-color: ${globalColor.blue.blue6002};
    font-weight: 600;
  }

  ${media_breakpoint_down('sm')} {
    padding: 7px 11px;
    font-size: ${rem(14)};
    font-weight: 400;
  }
`;

export const PracticesTabsCards = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  ${media_breakpoint_down('xl')} {
    gap: 24px;
  }

  > div {
    width: calc((100% - 80px) / 3);

    ${media_breakpoint_down('xl')} {
      width: calc((100% - 24px) / 2);
    }

    ${media_breakpoint_down('md')} {
      width: 100%;
    }
  }
`;
