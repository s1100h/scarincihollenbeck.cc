import Link from 'next/link';
import { useId } from 'react';
import { ListSimple } from 'styles/Practices.style';
import { PRODUCTION_URL } from '../../../utils/constants';

const SimpleList = ({ list }) => (
  <div className="my-5">
    <ListSimple>
      {list.map((item) => (
        <li key={item.ID || useId()}>
          <Link href={item.slug.replace(PRODUCTION_URL, '/')} legacyBehavior>
            <a>
              <strong>{item.title || item.label}</strong>
            </a>
          </Link>
        </li>
      ))}
    </ListSimple>
  </div>
);

export default SimpleList;
