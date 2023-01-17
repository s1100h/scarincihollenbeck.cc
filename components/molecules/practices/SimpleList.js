import Link from 'next/link';
import { useId } from 'react';
import { ListSimple } from 'styles/Practices.style';

const SimpleList = ({ list }) => (
  <div className="my-5">
    <ListSimple>
      {list.map((item) => (
        <li key={item.ID || useId()}>
          <Link href={item.slug.replace('https://scarincihollenbeck.com', '')}>
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
