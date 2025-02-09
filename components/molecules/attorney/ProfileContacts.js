import Link from 'next/link';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { IoPrintSharp } from 'react-icons/io5';
import { MdLocalPhone, MdLocationPin } from 'react-icons/md';
import { AddressBox } from 'styles/attorney-page/AttorneyProfile.style';
import React from 'react';
import empty from 'is-empty';
import { QRCodesBoxForPDF } from 'styles/common/PrintStyles.style';

const ProfileContacts = ({
  contact,
  offices,
  fax,
  linkedIn,
  qrCodeLinkedin,
  qrCodeBioPage,
}) => {
  const { phoneNumber, email } = contact || {};
  return (
    <AddressBox className="address-box">
      <p className="contacts-title">Contacts</p>

      <ul className="contacts-list">
        <li className="contacts-item">
          <MdLocationPin />
          {offices?.map((office, idx) => (
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
          <li className="contacts-item pdf-hidden">
            <IoPrintSharp />
            <span>{fax}</span>
          </li>
        )}

        <li className="contacts-item">
          <a href={`mailto:${email}`} className="contacts-link">
            <BsFillEnvelopeFill />
            <span>{email}</span>
          </a>
        </li>

        <li className="contacts-item pdf-hidden">
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
      {(!empty(qrCodeLinkedin) || !empty(qrCodeBioPage)) && (
        <QRCodesBoxForPDF>
          {!empty(qrCodeLinkedin) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={qrCodeLinkedin?.sourceUrl}
              alt="LinkedIn"
              width={92}
              height={80}
            />
          )}
          {!empty(qrCodeBioPage) && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={qrCodeBioPage?.sourceUrl}
              alt="The bio page"
              width={92}
              height={80}
            />
          )}
        </QRCodesBoxForPDF>
      )}
    </AddressBox>
  );
};

export default ProfileContacts;
