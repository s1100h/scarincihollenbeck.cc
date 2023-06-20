import { forwardRef, useEffect, useState } from 'react';
import {
  ScrollButtonContainer, ScrollButtonDownArrow, ScrollButtonMouse, ScrollButtonMouseIn, ScrollButtonUpArrow,
} from '../../../styles/ScrollButton.style';

const ScrollButton = forwardRef(({ currentPlace, scrollFuncBottom, scrollFuncTop }, ref) => {
  const [isTopOrDown, setTopOrDown] = useState(true);
  const handleScroll = () => {
    if (isTopOrDown) {
      setTopOrDown(false);
      scrollFuncBottom();
      return;
    }
    scrollFuncTop();
    setTopOrDown(true);
  };
  // let positionScroll = 'true';
  // if ((currentPlace?.current?.scrollHeight - currentPlace?.current?.clientHeight) <= currentPlace?.current?.scrollTop) {
  //   positionScroll = 'false';
  //   console.log('bottom');
  // }
  // if ((currentPlace?.current?.scrollHeight - currentPlace?.current?.clientHeight) > currentPlace?.current?.scrollTop) {
  //   console.log('bottom');
  // }
  // if (currentPlace?.current?.scrollTop === 0) {
  //   positionScroll = 'true';
  //   console.log('top');
  // }
  return (
    <ScrollButtonContainer onClick={handleScroll} position={isTopOrDown && 'true'}>
      <ScrollButtonMouse>
        <ScrollButtonMouseIn />
      </ScrollButtonMouse>
      <div>
        <ScrollButtonDownArrow className="down-arrow-1" />
        <ScrollButtonDownArrow className="down-arrow-2" />
        <ScrollButtonDownArrow className="down-arrow-3" />
      </div>
    </ScrollButtonContainer>
  );
});

export default ScrollButton;
