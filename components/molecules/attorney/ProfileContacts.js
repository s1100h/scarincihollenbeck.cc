import Link from 'next/link';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { IoPrintSharp } from 'react-icons/io5';
import { MdLocalPhone, MdLocationPin } from 'react-icons/md';
import { AddressBox } from 'styles/attorney-page/AttorneyProfile.style';

const ProfileContacts = ({
  contact, offices, fax, linkedIn,
}) => {
  const { phoneNumber, email } = contact;

  return (
    <AddressBox>
      <h3 className="contacts-title">Contacts</h3>

      <ul className="contacts-list">
        <li className="contacts-item">
          <MdLocationPin />
          {offices.map((office, idx) => (
            <Link
              className="contacts-link"
              href={office.uri || office.link}
              key={office.id || office.ID}
            >
              {office.name}
              {idx !== offices.length - 1 && ', '}
            </Link>
          ))}
        </li>

        <li className="contacts-item">
          <a href={`tel:${phoneNumber}`} className="contacts-link">
            <MdLocalPhone />
            <span>{phoneNumber}</span>
          </a>
        </li>

        {fax && (
          <li className="contacts-item">
            <IoPrintSharp />
            {fax}
          </li>
        )}

        <li className="contacts-item">
          <a href={`mailto:${email}`} className="contacts-link">
            <BsFillEnvelopeFill />
            <span>{email}</span>
          </a>
        </li>

        <li className="contacts-item">
          <a
            href={linkedIn?.url}
            target="_blank"
            rel="noreferrer"
            className="contacts-link"
          >
            <FaLinkedin />
            <span>{linkedIn?.channel}</span>
          </a>
        </li>
      </ul>
    </AddressBox>
  );
};

export default ProfileContacts;
