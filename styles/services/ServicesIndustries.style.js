import styled from 'styled-components';
import { UnderlinedLink } from 'styles/common/Typography.style';
import {
  globalColor,
  globalTransition,
  rem,
} from 'styles/global_styles/Global.styles';
import { media_breakpoint_down } from 'styles/mediaBreakpoints.style';

export const ServicesIndustriesSection = styled.section`
  padding: 60px 0;
  scroll-margin-top: 80px;
`;

export const ServicesIndustriesHolder = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;

  ${media_breakpoint_down('lg')} {
    row-gap: 20px;
  }

  ${media_breakpoint_down('md')} {
    row-gap: 12px;
  }
`;

export const ServicesIndustriesCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 40px;

  ${media_breakpoint_down('xl')} {
    gap: 28px;
  }
`;

export const ServicesIndustriesCardWrapper = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  background-color: ${globalColor.blue.blue6002};
  border-radius: 8px;
  transition: ${globalTransition.default};

  &:hover {
    background-color: ${globalColor.blue.blue500};
  }

  ${media_breakpoint_down('md')} {
    padding: 12px 16px;
  }

  ${UnderlinedLink} {
    margin-top: auto;

    @media (hover: hover) {
      &:hover {
        color: ${globalColor.blue.skyBlue};
      }
    }

    &:active {
      color: ${globalColor.blue.skyBlue};
    }
  }
`;

export const ServicesIndustriesCarLabel = styled.span`
  color: ${globalColor.gray.gray300};
  font-family: var(--font-lato);
  font-size: ${rem(12)};
  line-height: 1.67;
  text-transform: uppercase;
`;
