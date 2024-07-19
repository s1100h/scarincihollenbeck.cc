import { FocusedCardBox } from '../../styles/home-page/WhyChooseUs.style';
import { getIcon } from '../../utils/helpers';
import { JSXWithDynamicLinks } from './micro-templates/JSXWithDynamicLinks';

const FocusedCard = ({ icon, title, text }) => (
  <FocusedCardBox>
    <>{getIcon(icon)}</>
    <h5 className="focused-card-title">{title}</h5>
    <JSXWithDynamicLinks HTML={text} />
  </FocusedCardBox>
);

export default FocusedCard;
