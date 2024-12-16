import { MdLocalPhone } from 'react-icons/md';
import { IoPrintSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { OfficeCardContainer } from '../../../styles/Locations.style';

const CurrentOfficeCard = ({
  children,
  phone,
  fax,
  streetAddress,
  floor,
  postCode,
  addressLocality,
  addressRegion,
  backgroundColor,
}) => (
  <OfficeCardContainer backgroundColor={backgroundColor}>
    {children}
    <address>
      <span>
        <span>
          <FaLocationDot size={18} />
        </span>
        {streetAddress}
        {streetAddress?.length > 0 && ', '}
        {floor}
        {floor?.length > 0 && ', '}
        {addressLocality}
        {addressLocality?.length > 0 && ', '}
        {`${addressRegion} ${postCode}`}
      </span>
      <a href={`tel:${phone}`}>
        <MdLocalPhone size={20} />
        {phone}
      </a>
      <span>
        <IoPrintSharp size={20} />
        {fax}
      </span>
    </address>
  </OfficeCardContainer>
);

export default CurrentOfficeCard;
