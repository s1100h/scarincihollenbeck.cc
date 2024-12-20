import styled from 'styled-components';
import { globalBorderRadius, globalColor, globalTransition, rem } from './global_styles/Global.styles';
import Link from 'next/link';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const CareerCardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CareerCardTitle = styled.h3`
  margin: 0;
  color: inherit;
  font-size: ${rem(18)};
  line-height: 1.56;
  font-weight: 500;
  transition: ${globalTransition.default};

  ${media_breakpoint_down('sm')} {
    font-size: ${rem(16)};
    line-height: 1.5;
  }
`;

export const CareerCardDescription = styled.p`
  margin: 0;
  min-height: 96px;
  font-size: ${rem(16)};
  color: ${globalColor.gray.gray300};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${media_breakpoint_down('xxl')} {
    min-height: 80px;
    font-size: ${rem(14)};
  }
`;

export const CareerCardFooter = styled.div`
  margin-top: auto;
  padding-top: var(--card-gap);
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${globalColor.gray.gray500};
`;

export const CareerCardLocation = styled.p`
  margin: 0;
  font-size: ${rem(14)};
`;

export const CareerCardDuration = styled(CareerCardLocation)`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }
`;

export const CareerCard = styled(Link)`
  --card-gap: 12px;
  padding: 15px 23px;
  display: flex;
  flex-direction: column;
  row-gap: var(--card-gap);
  border-radius: ${globalBorderRadius.small};
  background-color: ${globalColor.blue.blue550};
  border: 1px solid transparent;
  color: ${globalColor.white};
  transition: ${globalTransition.default};

  &:hover {
    color: ${globalColor.white};
    border-color: ${globalColor.blue.skyBlue};

    ${CareerCardTitle} {
      color: ${globalColor.blue.skyBlue};
    }
  }

  ${media_breakpoint_down('sm')} {
    padding: 11px 15px;
  }
`;