import Link from 'next/link';
import { CategoriesNavContainer } from '../../../styles/Post/Categories.style';

const CategoriesPost = ({ categories }) => (
  <CategoriesNavContainer>
    <h5>Categories:</h5>
    <ul>
      {categories.map((category, index) => (
        <li key={category.databaseId} className="list-inline-item">
          <Link href={`/library/category/${category.slug}`}>
            <a>
              {category.name}
              {categories.length - 1 !== index && ', '}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </CategoriesNavContainer>
);

export default CategoriesPost;
