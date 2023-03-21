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
