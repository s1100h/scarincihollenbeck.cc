import { BsArrowDown } from 'react-icons/bs';
import { CircleArrowBox, ScrollDownContainer } from '../../styles/practices-special-style/ScrollDownArrow.style';

const ScrollDownArrow = ({ text }) => (
  <ScrollDownContainer>
    <CircleArrowBox>
      <BsArrowDown />
    </CircleArrowBox>
    <p>{text}</p>
  </ScrollDownContainer>
);

export default ScrollDownArrow;
