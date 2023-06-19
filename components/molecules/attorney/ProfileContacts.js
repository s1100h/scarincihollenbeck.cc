import Link from 'next/link';
import {
  BsFillEnvelopeFill, BsFillGeoAltFill, BsFillTelephoneFill, BsPrinterFill,
} from 'react-icons/bs';
import { AddressBox } from 'styles/attorney-page/AttorneyProfile.style';

const ProfileContacts = ({ contact, offices, fax }) => {
  const { phoneNumber, email } = contact;
  return (
    <AddressBox>
      <a href={`tel:${phoneNumber}`}>
        <BsFillTelephoneFill />
        {' '}
        <span>{phoneNumber}</span>
      </a>
      {fax && (
        <p>
          <BsPrinterFill />
          {' '}
          {fax}
        </p>
      )}
      <a href={`mailto:${email}`}>
        <BsFillEnvelopeFill />
        {' '}
        <span>{email}</span>
      </a>
      <p>
        <BsFillGeoAltFill />
        {' '}
        {offices.map((office, idx) => (
          <Link href={office.uri || office.link} key={office.id || office.ID}>
            {office.name}
            {idx !== offices.length - 1 && ', '}
          </Link>
        ))}
      </p>
    </AddressBox>
  );
};

export default ProfileContacts;
