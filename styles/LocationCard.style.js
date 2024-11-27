import styled from 'styled-components';
import {
  globalBorderRadius,
  globalColor,
  globalShadow,
  globalTransition,
  rem,
} from 'styles/global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import Link from 'next/link';
import { TitleH2 } from './common/Typography.style';

export const LocationsHomeSection = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: ${globalColor.gray.gray10};
`;

export const LocationTitle = styled(TitleH2)`
  margin-bottom: 16px !important;
`;

export const LocationCardMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
  gap: 20px;

  .link-map-box {
    row-gap: 12px;

    a {
      font-size: 1rem;
      line-height: 24px;
    }
  }

  ${media_breakpoint_down('xl')} {
    grid-template-columns: 2fr 1.5fr;
  }

  ${media_breakpoint_down('md')} {
    grid-template-columns: 1fr;

    .link-map-box {
      order: 2;
    }
  }
`;

export const MapBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  ${media_breakpoint_down('md')} {
    order: 1;
    height: 365px;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  > div {
    flex: 1;

    iframe {
      height: 100%;
      width: 100%;
    }
  }
`;

export const LocationOffices = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;

  ${media_breakpoint_down('md')} {
    order: 3;
  }
`;

export const LocationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    transition: ${globalTransition.default};
    transform: ${(props) =>
      props.isActive ? 'rotate(-90deg)' : 'rotate(0deg)'};
  }
`;

export const LocationHeaderTitle = styled.p`
  margin-bottom: 0;
  color: ${(props) =>
    props.isActive ? globalColor.blue.blue400 : globalColor.blue.blue500};
  font-weight: 700;
  font-size: ${rem(20)};
  line-height: 1.6;

  ${media_breakpoint_down('md')} {
    font-size: ${rem(18)};
  }
`;

export const ContactInfoCard = styled.article`
  box-shadow: ${globalShadow.shadowM};
  border-radius: ${globalBorderRadius.middle};
  border: 1px solid ${globalColor.gray.gray300};
  padding: 24px;
  background-color: ${globalColor.white};
  cursor: ${({ openCard }) => (openCard ? 'initial' : 'pointer')};

  ${media_breakpoint_down('lg')} {
    padding: 16px;
  }
`;

export const ContactInfoContent = styled.address`
  display: grid;
  transition: ${globalTransition.default};
  grid-template-rows: ${(props) => (props.isOpen ? '1fr' : '0fr')};
  overflow: hidden;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${(props) => (props.isOpen ? '20px' : '0')};
  margin-bottom: 0;

  .address-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0;
    min-height: 0;
  }
`;

export const Contact = styled.li`
  display: flex;
  gap: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: 1.55;
  margin-bottom: 0;

  ${media_breakpoint_down('md')} {
    font-size: 1rem;
    line-height: 1.5;
  }

  svg {
    flex-shrink: 0;
  }
`;

// New cards for Navigation in Header
export const LocationCards = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const LocationCardWrapper = styled.address`
  margin: 0;
  width: calc((100% - 24px) / 2);
  padding: 14px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  border-radius: ${globalBorderRadius.middle};
  background-color: ${globalColor.blue.blue6002};
  box-shadow: 0px -7px 16px 0px rgba(0, 0, 0, 0.06),
    -10px 10px 19px 0px rgba(0, 0, 0, 0.06);
  border: 2px solid transparent;
  position: relative;
  transition: ${globalTransition.default};

  &:hover {
    border-color: ${globalColor.blue.blue400};

    .location-card-icon {
      color: ${globalColor.blue.skyBlue};
    }
  }

  ${media_breakpoint_down('lg')} {
    padding: 10px 14px;
  }

  ${media_breakpoint_down('md')} {
    width: 100%;
  }
`;

export const LocationCardTitle = styled.h4`
  margin: 0;
  color: ${globalColor.blue.skyBlue};
  font-size: ${rem(20)};
  line-height: 1.6;
  font-weight: 600;
  text-transform: uppercase;

  ${media_breakpoint_down('sm')} {
    font-size: ${rem(18)};
    line-height: 1.55;
  }
`;

export const LocationCardList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 12px;

  .location-card-item,
  .location-card-link {
    display: flex;
    column-gap: 8px;
    color: ${globalColor.white};
    font-size: ${rem(18)};
    line-height: 1.55;
    font-weight: 500;

    ${media_breakpoint_down('sm')} {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
`;

export const LocationCardItem = styled.li``;

export const LocationCardItemIcon = styled.span`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${globalColor.gray.gray500};
  transition: ${globalTransition.default};
`;

export const LocationCardItemLink = styled.a`
  width: max-content;
  transition: ${globalTransition.default};
  position: relative;
  z-index: 2;

  &:hover {
    color: ${globalColor.blue.skyBlue};

    ${LocationCardItemIcon} {
      color: ${globalColor.white};
    }
  }
`;

export const LocationCardLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
