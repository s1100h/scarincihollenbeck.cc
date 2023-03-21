import Link from 'next/link';
import { useRouter } from 'next/router';

const renderCategoriesList = (CategoriesList, routerPath) => {
  const authorPath = '/library/author/[slug]';
  const isAuthor = routerPath.includes(authorPath);
  if (isAuthor || !Object.keys(CategoriesList[0]).includes('count')) {
    return (
      <ul>
        {CategoriesList.map((item) => (
          <li key={item.id}>
            <Link href={`/library/category/${item.slug}`} passHref>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul>
      {CategoriesList.map((item) => (
        <li key={item.id}>
          {item.name}
          {Object.keys(item).includes('count') && (
            <Link href={`/library/category/${item.slug}`} passHref>
              <strong>
                <small>
                  (
                  {item.count}
                  )
                </small>
              </strong>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};
export default function PopularList({ term, list }) {
  const { pathname } = useRouter();

  return (
    <>
      <h5>
        <strong>{term}</strong>
      </h5>
      {renderCategoriesList(list, pathname)}
    </>
  );
}
