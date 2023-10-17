import Link from 'next/link';
import { useId } from 'react';
import { ListSimple } from 'styles/Practices.style';
import { PRODUCTION_URL } from '../../../utils/constants';

const SimpleList = ({ list }) => (
  <div className="my-5">
    <ListSimple>
      {list.map((item) => (
        <li key={item.ID || item.databaseId || useId()}>
          <Link
            href={item.uri || item.slug.replace(PRODUCTION_URL, '/')}
            passHref
          >
            <strong>{item.title || item.label}</strong>
          </Link>
        </li>
      ))}
    </ListSimple>
  </div>
);

export default SimpleList;
