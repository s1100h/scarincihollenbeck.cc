import {
  BsFillGeoAltFill,
  BsFillTelephoneFill,
  BsPrinterFill,
} from 'react-icons/bs';
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
        {`${addressRegion} ${postCode}`}
      </span>
      <a href={`tel:${phone}`}>
        <BsFillTelephoneFill />
        {phone}
      </a>
      <a href={`fax:${fax}`}>
        <BsPrinterFill />
        {fax}
      </a>
    </address>
  </OfficeCardContainer>
);

export default CurrentOfficeCard;
