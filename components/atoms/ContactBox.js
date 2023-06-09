import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { ContactBox } from '../../styles/AttorneyCard.style';

const ContactBoxTemplate = ({ number, email }) => (
  <ContactBox>
    <a onClick={(e) => e.stopPropagation()} href={`tel:${number}`}>
      <BsFillTelephoneFill />
      {' '}
      <span>{number}</span>
    </a>
    <a title={`${email}`} onClick={(e) => e.stopPropagation()} href={`mailto:${email}`}>
      <BsFillEnvelopeFill />
      {' '}
      <span>{email}</span>
    </a>
  </ContactBox>
);

export default ContactBoxTemplate;
