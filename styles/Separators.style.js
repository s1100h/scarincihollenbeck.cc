import styled from 'styled-components';
import { globalColor } from 'styles/global_styles/Global.styles';
import { media_breakpoint_down } from 'styles/mediaBreakpoints.style';
import empty from 'is-empty';

export const DiamondSeparator = styled.span`
  --size: ${({ $size }) => (!empty($size) && `${$size / 2}px`) || '6px'};
  width: 0;
  height: 0;
  border: var(--size) solid transparent;
  border-bottom-color: ${({ $color }) => $color || globalColor.blue.blue400};
  position: relative;
  top: calc(var(--size) * -1);
  display: flex;

  &:after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: calc(var(--size) * -1);
    top: var(--size);
    border: var(--size) solid transparent;
    border-top-color: ${({ $color }) => $color || globalColor.blue.blue400};
  }

  ${media_breakpoint_down('md')} {
    --size: 4px;
  }
`;

export const LogoSeparatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  &::before, &::after {
    content: '';
    width: 1px;
    height: 100%;
    background-color: ${globalColor.blue.blue400};

    ${media_breakpoint_down('xl')} {
      width: 100%;
      height: 1px;
    }
  }

  img {
    margin: auto 0;

    ${media_breakpoint_down('md')} {
      width: 24px;
      height: 24px;
    }
  }

  ${media_breakpoint_down('xl')} {
    flex-direction: row;
  }
`;
