import { BsFillGeoAltFill, BsFillTelephoneFill, BsPrinterFill } from 'react-icons/bs';
import { OfficeCardContainer } from '../../../styles/Locations.style';

const CurrentOfficeCard = ({
  children,
  phone,
  fax,
  streetAddress,
  floor,
  postCode,
  addressLocality,
}) => (
  <OfficeCardContainer>
    {children}
    <address>
      <span>
        <span>
          <BsFillGeoAltFill />
        </span>
        {streetAddress}
        {streetAddress?.length > 0 && ', '}
        {floor}
        {floor?.length > 0 && ', '}
        {addressLocality}
        {addressLocality?.length > 0 && ', '}
        {postCode}
      </span>
      <a href={`tel:${phone}`}>
        <BsFillTelephoneFill />
        {phone}
      </a>
      <span>
        <BsPrinterFill />
        {fax}
      </span>
    </address>
  </OfficeCardContainer>
);

export default CurrentOfficeCard;
