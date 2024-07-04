import styled from 'styled-components';
import {
  globalColor,
  globalTransition,
  rem,
} from 'styles/global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import Link from 'next/link';

export const LocationTitle = styled.h2`
  font-family: var(--font-poppins);
  font-weight: 400;
  font-size: 72px;
  line-height: 1.2;
  color: ${globalColor.black};
  text-transform: uppercase;
  margin-bottom: 30px;

  ${media_breakpoint_down('md')} {
    font-size: 38px;
    text-align: center;
  }
`;

export const LocationCardMain = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;

  ${media_breakpoint_down('xl')} {
    grid-template-columns: 2fr 1.5fr;
  }

  ${media_breakpoint_down('md')} {
    grid-template-columns: auto;
  }
`;

export const MapBox = styled.div`
  height: 100%;
  > div,
  iframe {
    height: 100%;
  }
`;

export const LocationOffices = styled.div`
  display: flex;
  flex-flow: column;
  gap: 2vh;
`;

export const LocationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 27px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive ? 'whitesmoke' : 'transparent'};

  h5 {
    color: ${globalColor.black};
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    margin-bottom: 0;
  }
`;

export const LocationFooter = styled.div`
  justify-content: flex-end;
  padding: 0 27px 27px 0;
  display: ${(props) => (props.isActive ? 'flex' : 'none')};

  ${media_breakpoint_down('xl')} {
    margin-top: 20px;
  }
`;

export const ContactInfoCard = styled.article`
  box-shadow: -2px 0 10px rgb(0 0 0 / 13%);
`;

export const ContactInfoContent = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  padding: 0 27px 0 27px;
  margin-top: 20px;
`;

export const LinkToAttorneys = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  color: #a91110;
  border-bottom: 1.5px solid #a91110;

  :hover {
    color: #a91110;
    text-decoration: none;
  }
`;

export const Contact = styled.div`
  display: flex;
  gap: 21px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 0;
`;

// New cards for Navigation in Header
export const LocationCards = styled.div`
  padding: 20px 0 40px 0;
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  ${media_breakpoint_down('md')} {
    padding: 16px 0 24px 0;
  }
`;

export const LocationCardWrapper = styled.address`
  margin: 0;
  width: calc((100% - 24px) / 2);
  padding: 22px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border-radius: 12px;
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
    row-gap: 16px;
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
