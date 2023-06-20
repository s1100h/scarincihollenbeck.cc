import { Col } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { globalColor, globalIndents, globalShadow, rem } from '../global_styles/Global.styles';
import { media_breakpoint_down, media_breakpoint_exactly_down } from '../mediaBreakpoints.style';

export const ProfileHeaderContainer = styled.div`
  padding: ${globalIndents.attorneyProfilePaddings};
  margin-top: 5%;
  margin-bottom: 25px;
  box-shadow: ${globalShadow.allSideShadow};

  ${media_breakpoint_down('xl')} {
    padding: 20px 20px;
  }

  ${media_breakpoint_down('sm')} {
    margin-bottom: 72px;
  }
`;

export const ColStyled = styled(Col)`
  position: relative;
  top: ${({ top }) => (top ? top : 'none')};
  bottom: ${({ bottom }) => (bottom ? bottom : 'none')};
`;

export const ColForSidebar = styled(ColStyled)`
  margin-bottom: 80px;
  top: ${({ top }) => (top ? top : 'none')};

  ${({ top }) => {
    const topNum = top.slice(0, -2);
    return top
      ? `
      ${media_breakpoint_exactly_down(1400)} {
        top: ${topNum - 10}px;
      }
      ${media_breakpoint_down('lg')} {
        top: 0;
        margin-bottom: 25px;
      }
      `
      : `border: none`;
  }}
`;

export const SubTitleProfileBox = styled.div`
  margin-top: 0;
  margin-bottom: 18px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${globalColor.graySmoke.extraLiteSmoke};

  h2,
  h4 {
    color: ${globalColor.gray.gray80};
    font-size: 1rem;
    margin: 10px 0 2px;
  }

  p {
    color: ${globalColor.gray.gray80};
    margin-bottom: 0;
  }
`;

export const AddressBox = styled.address`
  display: flex;
  flex-direction: column;
  gap: 10px;

  a,
  p {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 0;
    font-size: ${rem(18)};
  }

  svg {
    color: ${globalColor.gray.gray80};
    width: 20px;
  }

  ${media_breakpoint_down('sm')} {
    border-bottom: 1px solid ${globalColor.grayExtraLite.grayExtraLite50};
    padding-bottom: 15px;
  }
`;

export const DetailsBox = styled.div`
  display: flex;
  gap: 10%;

  ${media_breakpoint_down('sm')} {
    flex-direction: column;

    ul {
      padding-left: 0;
    }
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemContactList = styled.li`
  a {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  svg {
    fill: ${(props) => globalColor.socialNetworks[props?.socialNetwork] || globalColor.gray.gray80};
  }

  ${(props) =>
    props?.socialNetwork === 'vizibility' &&
    `
     a {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 10px;
      width: 135px;
      height: 80px;
      border-radius: 5px;
      font-size: 15px;
      box-shadow: 5px 6px 20px rgb(180 177 177);
      color: ${globalColor.black};

      svg {
        width: 25px;
        height: 25px;
      }

      transition: .5s;
      :hover {
        box-shadow: 5px 6px 0px ${globalColor.graySmoke.extraLiteSmoke};
        border: 1px solid ${globalColor.grayLite.grayLite100};
        cursor: pointer;
        color: ${globalColor.black};
      }
     }
   `}
`;

export const ProfileName = styled.h1`
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
`;

const shake = keyframes`
  1%, 9% {
    transform: translate3d(-1px, 0, 0);
  }

  2%, 8% {
    transform: translate3d(2px, 0, 0);
  }

  3%, 5%, 7% {
    transform: translate3d(-4px, 0, 0);
  }

  4%, 6% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const VideoButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${({ isRotatedCard }) => (isRotatedCard ? 0 : '2px')};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  right: 30px;
  bottom: 20px;
  background-color: ${globalColor.red.darkRed};
  animation: ${({ isRotatedCard }) => !isRotatedCard && shake} 10s cubic-bezier(0.36, 0.07, 0.19, 0.97) both 5s infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
  z-index: 4;

  :hover {
    background-color: ${globalColor.red.liteRed};
  }

  :active {
    background-color: ${globalColor.red.burgundy};
  }

  svg {
    color: ${globalColor.white};
    font-size: 30px;
  }
`;

export const CardImageVideoContainer = styled.div`
  perspective: 1000px;
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;

export const Front = styled.div`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: relative;
  top: 0;
  left: 0;
  transition: 0.5s;
  transform: ${({ isRotateProp }) => (isRotateProp ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;
export const Back = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  transition: 0.5s;
  transform: ${({ isRotateProp }) => (isRotateProp ? 'rotateY(360deg)' : 'rotateY(180deg)')};
  position: absolute;

  video {
    width: inherit;
    height: -webkit-fill-available;
  }
`;
