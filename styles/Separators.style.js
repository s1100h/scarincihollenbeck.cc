import styled from 'styled-components';
import { globalColor } from 'styles/global_styles/Global.styles';
import { media_breakpoint_down } from 'styles/mediaBreakpoints.style';
import empty from 'is-empty';

export const DiamondSeparator = styled.span`
  --size: ${({ $size }) => (!empty($size) && `${$size}px`) || '12px'};
  width: var(--size);
  height: var(--size);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ $color }) => $color || globalColor.blue.blue400};

  ${media_breakpoint_down('md')} {
    --size: 8px;
  }
`;

export const LogoSeparatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;

  &::before,
  &::after {
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
