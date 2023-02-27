import Link from 'next/link';

export default function PopularList({ term, list, displayCount = true }) {
  return (
    <>
      <h5>
        <strong>{term}</strong>
      </h5>
      <ul className="p-0">
        {list.map((item) => (
          <li key={item.id}>
            <Link href={`/library/category/${item.slug}`} legacyBehavior>
              <a className="text-dark">
                {item.name}
                {displayCount && Object.keys(item).includes('count') && (
                  <>
                    <span className="mx-1">|</span>
                    <strong>
                      <small>{item.count}</small>
                    </strong>
                  </>
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
