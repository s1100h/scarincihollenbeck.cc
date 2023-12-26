import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { ContactBox } from '../../styles/AttorneyCard.style';

const ContactBoxTemplate = ({
  number, email, classes, svgPhone, svgEmail,
}) => (
  <ContactBox className={classes}>
    <a onClick={(e) => e.stopPropagation()} href={`tel:${number}`}>
      {svgPhone || <BsFillTelephoneFill />}
      {' '}
      <span>{number}</span>
    </a>
    <a
      title={`${email}`}
      onClick={(e) => e.stopPropagation()}
      href={`mailto:${email}`}
    >
      {svgEmail || <BsFillEnvelopeFill />}
      {' '}
      <span>{email}</span>
    </a>
  </ContactBox>
);

export default ContactBoxTemplate;
