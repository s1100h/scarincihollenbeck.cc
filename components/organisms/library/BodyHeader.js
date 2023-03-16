import FeaturedLinks from 'components/molecules/library/FeaturedLinks';
import GlobalSearch from '../../shared/GlobalSearch/GlobalSearch';
import { BodyHeaderContainer } from '../../../styles/BodyHeader.style';

export default function BodyHeader() {
  return (
    <BodyHeaderContainer>
      <GlobalSearch />
      <FeaturedLinks />
    </BodyHeaderContainer>
  );
}

//   <p className="d-flex gap-2 text-white mb-0 text-md-center ">
//     <strong>Follow us:</strong>
//     <a
//       href="https://www.linkedin.com/company/scarinci-hollenbeck-llc"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-white d-block d-md-inline"
//     >
//       <u>LinkedIn</u>
//     </a>
//     <a
//       href="https://www.facebook.com/ScarinciHollenbeck/"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="text-white  d-block d-md-inline"
//     >
//       <u>Facebook</u>
//     </a>
//   </p>
