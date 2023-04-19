import { TileBox } from '../../../styles/ContactUs.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const TileContacts = ({ title, textContent, icon }) => (
  <TileBox>
    <div>{icon}</div>
    <h4>{title}</h4>
    <p>
      <JSXWithDynamicLinks HTML={textContent} />
    </p>
  </TileBox>
);

export default TileContacts;
