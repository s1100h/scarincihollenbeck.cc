import Link from 'next/link';
import {
  BsFillEnvelopeFill,
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsPrinterFill,
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
        {offices.map((o, i) => (
          <Link href={o.link} key={o.ID}>
            <a>
              {o.name}
              {i !== offices.length - 1 && ', '}
            </a>
          </Link>
        ))}
      </p>
    </AddressBox>
  );
};

export default ProfileContacts;
