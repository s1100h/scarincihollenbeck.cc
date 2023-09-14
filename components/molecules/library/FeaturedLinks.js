import Link from 'next/link';
import { useRouter } from 'next/router';
import { ButtonItem, CategoriesLinks } from '../../../styles/BodyHeader.style';
import { CategoriesButtonsStructure } from '../../../utils/constants';

const FeaturedLinks = () => {
  const { query } = useRouter();
  return (
    <CategoriesLinks>
      {CategoriesButtonsStructure.map((btnLink) => (
        <ButtonItem page={{ currentPage: query.slug, btnSlug: btnLink.slug }} key={btnLink.databaseId}>
          <Link href={`/library/category/${btnLink.slug}`} passHref>
            {btnLink.label}
          </Link>
        </ButtonItem>
      ))}
    </CategoriesLinks>
  );
};

export default FeaturedLinks;
