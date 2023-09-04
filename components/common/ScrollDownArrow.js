import { BsArrowDown } from 'react-icons/bs';
import { CircleArrowBox, ScrollDownContainer } from '../../styles/practices-special-style/ScrollDownArrow.style';

const ScrollDownArrow = ({ text, anchorId }) => (
  <ScrollDownContainer href={`#${anchorId}`} scroll={false}>
    <CircleArrowBox>
      <BsArrowDown />
    </CircleArrowBox>
    <p>{text}</p>
  </ScrollDownContainer>
);

export default ScrollDownArrow;
