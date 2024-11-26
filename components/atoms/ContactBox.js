import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import empty from 'is-empty';
import { FaLocationDot } from 'react-icons/fa6';
import { MdLocalPhone } from 'react-icons/md';
import { ContactBox } from '../../styles/AttorneyCard.style';

const ContactBoxTemplate = ({
  number,
  email,
  classes,
  svgPhone,
  svgEmail,
  officeLocations,
}) => (
  <ContactBox className={classes}>
    <a onClick={(e) => e.stopPropagation()} href={`tel:${number}`}>
      {svgPhone || <MdLocalPhone size={20} />}
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
    {!empty(officeLocations) && (
      <div className="contact-offices">
        <FaLocationDot />
        <div className="contact-offices__links">
          {officeLocations.map((office, index) => (
            <a
              onClick={(e) => e.stopPropagation()}
              href={office.uri}
              key={office?.databaseId || office?.id}
            >
              <span>{office.title}</span>
            </a>
          ))}
        </div>
      </div>
    )}
  </ContactBox>
);

export default ContactBoxTemplate;
