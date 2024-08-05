import FeaturedLinks from 'components/molecules/library/FeaturedLinks';
import { GlobalSearch } from 'components/shared/GlobalSearch/GlobalSearch';
import { BodyHeaderContainer } from '../../../styles/BodyHeader.style';

export default function BodyHeader() {
  return (
    <BodyHeaderContainer>
      <GlobalSearch filterByPostType />
      <FeaturedLinks />
    </BodyHeaderContainer>
  );
}
