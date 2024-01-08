import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import empty from 'is-empty';
import { FaLocationDot } from 'react-icons/fa6';
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
    {!empty(officeLocations) && (
      <div className="contact-offices">
        <FaLocationDot />
        <div className="contact-offices__links">
          {officeLocations.map((office, index) => (
            <a
              onClick={(e) => e.stopPropagation()}
              href={office.uri}
              key={office.databaseId}
            >
              <span>{office.title}</span>
            </a>
          ))}
        </div>
      </div>
    )}
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
