import { OfficeAttorneysContainer } from '../../../styles/Locations.style';
import AttorneyCard from '../../shared/AttorneyCard';

const AttorneysOfficeList = ({ attorneys }) => (
  <OfficeAttorneysContainer>
    <h4>Attorneys</h4>
    <ul>
      {attorneys.map((attorney) => (
        <li key={attorney.id}>
          <AttorneyCard link={`/attorneys/${attorney.link}`} image={attorney.better_featured_image} name={attorney.title} designation={attorney.designation} number={attorney.phone} email={attorney.email} />
        </li>
      ))}
    </ul>
  </OfficeAttorneysContainer>
);

export default AttorneysOfficeList;
