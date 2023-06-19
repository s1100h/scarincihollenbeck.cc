import styled from 'styled-components';

export const ScrollButtonContainer = styled.div`
  position: sticky;
  left: calc(100% - 50px);
  width: 14px;
  cursor: pointer;
  z-index: 10;
  top: 10px;
  transform: rotate(180deg);
  ${(props) =>
    props?.position &&
    `
  transform: rotate(0deg);
  `};

  .down-arrow-1 {
    margin-top: 6px;
  }

  .down-arrow-1,
  .down-arrow-2,
  .down-arrow-3 {
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
  }

  .down-arrow-1 {
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    -webkit-animation-direction: alternate;
  }

  .down-arrow-2 {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -webkit-animation-direction: alternate;
  }

  .down-arrow-3 {
    -webkit-animation-delay: 0.3s;
    -moz-animation-dekay: 0.3s;
    -webkit-animation-direction: alternate;
  }

  @keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ScrollButtonMouse = styled.div`
  height: 21px;
  width: 14px;
  border-radius: 10px;
  transform: none;
  border: 2px solid #000;
  top: 170px;
`;

export const ScrollButtonMouseIn = styled.div`
  height: 5px;
  width: 2px;
  display: block;
  margin: 5px auto;
  background: #000;
  position: relative;
`;

export const ScrollButtonDownArrow = styled.div`
  display: block;
  width: 5px;
  height: 5px;
  transform: rotate(45deg);
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  margin: 0 0 3px 5px;
`;

export const ScrollButtonUpArrow = styled.div`
  display: block;
  width: 5px;
  height: 5px;
  transform: rotate(225deg);
  border-right: 2px solid #000;
  border-bottom: 2px solid #000;
  margin: 0 0 3px 5px;
`;
